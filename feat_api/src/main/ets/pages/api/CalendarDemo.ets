// CalendarKit：calendarManager 日历账户/事件（createCalendar/getCalendar/addEvent）。
// READ/WRITE_CALENDAR 为 user_grant：未授权环境按 BusinessError 201 记录（调用面即语料）。
import { calendarManager } from '@kit.CalendarKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common, abilityAccessCtrl } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct CalendarDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'CalendarKit',
        cases: [
          new Case('request perms', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const atManager = abilityAccessCtrl.createAtManager();
              const r = await atManager.requestPermissionsFromUser(ctx, [
                'ohos.permission.READ_CALENDAR', 'ohos.permission.WRITE_CALENDAR']);
              return `granted=${r.permissions.length} auth=${r.authResults.join(',')}`;
            } catch (e) {
              const err = e as BusinessError;
              return `perm-err=${err.code}`;
            }
          }),
          new Case('createCalendar', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const mgr = calendarManager.getCalendarManager(ctx);
              const cal = await mgr.createCalendar({
                name: 'vd-bench-cal',
                displayName: 'vd-bench-cal',
                type: calendarManager.CalendarType.LOCAL
              } as calendarManager.CalendarAccount);
              return `calendar id=${cal.id}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`create fail: ${err.code} ${err.message}`);
              return `create-err=${err.code}`;
            }
          }),
          new Case('addEvent', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const mgr = calendarManager.getCalendarManager(ctx);
              const cal = await mgr.getCalendar();
              const now = Date.now();
              const id = await cal.addEvent({
                type: calendarManager.EventType.NORMAL,
                title: 'vd-bench-event',
                startTime: now,
                endTime: now + 3600000
              } as calendarManager.Event);
              return `event id=${id}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`addEvent fail: ${err.code} ${err.message}`);
              return `addEvent-err=${err.code}`;
            }
          }),
          new Case('query events', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const mgr = calendarManager.getCalendarManager(ctx);
              const cal = await mgr.getCalendar();
              const evs = await cal.getEvents();
              return `events=${evs.length}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`query fail: ${err.code} ${err.message}`);
              return `query-err=${err.code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
