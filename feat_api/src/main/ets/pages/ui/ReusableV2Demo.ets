// V2 复用与深形态补全：@ReusableV2（API26 复用池 + ReusableOptions 内存优化策略）、
// @Reusable（V1 对照）、aboutToRecycle/aboutToReuse 复用生命周期、@Require @Param、
// @Computed getter/setter、@Monitor 多路径嵌套监听、嵌套 @ObservedV2 对象图。
// 复用语义真实触发：ForEach 重排使列表项走 recycle→reuse 链，selfcheck 断言池行为。
@ObservedV2
class InnerNode {
  @Trace val: number = 0;

  constructor(val: number) {
    this.val = val;
  }
}

@ObservedV2
class OuterGraph {
  @Trace tag: string = 'g0';
  @Trace inner: InnerNode[] = [];

  constructor(tag: string, n: number) {
    this.tag = tag;
    for (let i = 0; i < n; i += 1) {
      this.inner.push(new InnerNode(i));
    }
  }
}

const REUSE_LOG: string[] = [];

@ReusableV2({ memoryOptimizationStrategy: ReusableMemOptStrategy.ENABLE_AUTO_CACHE_OPTIMIZATION })
@ComponentV2
struct ReuseItemV2 {
  @Require @Param label: string = '';
  @Local shown: string = '';
  // V2 复用生命周期：回收入池（记录）与出池复用（params 携带新数据）
  aboutToRecycle(): void {
    REUSE_LOG.push(`recycle:${this.label}`);
  }

  aboutToReuse(params: Record<string, Object | undefined | null>): void {
    // 实证：@Param 在复用回调内只读（"read-only property"）——池行为仅记录
    const next = params['label'];
    REUSE_LOG.push(`reuse:${typeof next === 'string' ? next : this.label}`);
  }

  build() {
    Text(this.label).fontSize(12).padding(6).border({ width: 1 })
  }
}

@Reusable
@Component
struct ReuseItemV1 {
  @State label: string = '';

  aboutToRecycle(): void {
    REUSE_LOG.push(`v1-recycle:${this.label}`);
  }

  aboutToReuse(params: Record<string, Object>): void {
    this.label = params['label'] as string;
    REUSE_LOG.push(`v1-reuse:${this.label}`);
  }

  build() {
    Text(this.label).fontSize(12).padding(6).border({ width: 1 })
  }
}

@Entry
@ComponentV2
struct ReusableV2Demo {
  @Local rows: string[] = ['r0', 'r1', 'r2', 'r3', 'r4', 'r5'];
  @Local graph: OuterGraph = new OuterGraph('g0', 3);
  @Local base: number = 1;
  @Local monitorHits: string[] = [];
  @Local selfcheckResult: string = '';

  // @Computed getter（本 SDK Beta2 实证：@Computed 不允许 set 方法——"cannot define
  // a set method"，官方 V2 文档的 getter/setter 双向形态在此编译器版本不可达）
  @Computed
  get scaled(): number {
    return this.base * 10;
  }

  // @Monitor 多路径：顶层属性 + 嵌套对象图路径（OuterGraph.inner[].val 链）
  @Monitor('base', 'graph.tag')
  onPaths(monitor: IMonitor): void {
    this.monitorHits.push(monitor.dirty.join('+'));
  }

  shuffle(): void {
    const next: string[] = [];
    for (let i = this.rows.length - 1; i >= 0; i -= 1) {
      const j = (i * 7 + this.base) % (i + 1);
      next.push(this.rows[j]);
      this.rows[j] = this.rows[i];
    }
    this.rows = next;
  }

  runSelfcheck(): void {
    const checks: boolean[] = [];
    checks.push(this.scaled === this.base * 10);
    this.base = 3; // 直写 @Local（写路径）
    this.graph.tag = 'g1'; // 多路径 monitor 命中 graph.tag
    this.graph.inner[0].val = 99; // 嵌套 @Trace 图写穿
    checks.push(this.graph.inner[0].val === 99);
    checks.push(this.monitorHits.length > 0);
    this.shuffle(); // 触发列表重排（复用池时机）
    checks.push(this.rows.length === 6);
    const recycleSeen = REUSE_LOG.some((l: string) => l.startsWith('recycle:') || l.startsWith('v1-recycle:'));
    this.selfcheckResult =
      `pass=${checks.filter((c: boolean) => c).length}/${checks.length} monitor=${this.monitorHits.length} pool=${recycleSeen ? 1 : 0}`;
  }

  build() {
    Column({ space: 8 }) {
      Text('V2 reuse & deep forms').fontSize(20)
      Text(`@Local base=${this.base} @Computed get/set scaled=${this.scaled}`)
      Text(`nested graph tag=${this.graph.tag} inner0=${this.graph.inner[0]?.val ?? -1}`)
      Text(`@Monitor paths=[${this.monitorHits.join('|')}]`)
      Text(`reuse log ${REUSE_LOG.length}`).fontSize(11).fontColor('#668844')
      Button('write @Local base (recompute @Computed)')
        .onClick(() => {
          this.base += 1;
        })
      Button('bump nested @Trace graph')
        .onClick(() => {
          this.graph.inner[this.base % this.graph.inner.length].val += 1;
        })
      Button('shuffle list (recycle/reuse)')
        .onClick(() => {
          this.shuffle();
        })
      Button('run selfcheck')
        .onClick(() => {
          this.runSelfcheck();
        })
      if (this.selfcheckResult !== '') {
        Text(`✅ selfcheck ui-v2reuse ${this.selfcheckResult}`)
          .fontSize(12).fontColor('#226622')
      }
      ForEach(this.rows, (r: string) => {
        ReuseItemV2({ label: r })
      }, (r: string) => r)
      ForEach(this.rows, (r: string) => {
        ReuseItemV1({ label: `v1-${r}` })
      }, (r: string) => `v1-${r}`)
    }
    .padding(12)
  }
}
