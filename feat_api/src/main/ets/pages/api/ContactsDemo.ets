// ContactsKit：contact 增查（addContact/queryContacts）。
// READ/WRITE_CONTACTS 为 user_grant：未授权环境按 BusinessError 201 记录（基准约定，调用面即语料）。
import { contact } from '@kit.ContactsKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common, abilityAccessCtrl } from '@kit.AbilityKit';
import { Case, DemoScaffold } from 'lib_common';

@Entry
@Component
struct ContactsDemo {
  build() {
    Column() {
      DemoScaffold({
        title: 'ContactsKit',
        cases: [
          new Case('request perms', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const atManager = abilityAccessCtrl.createAtManager();
              const r = await atManager.requestPermissionsFromUser(ctx, [
                'ohos.permission.READ_CONTACTS', 'ohos.permission.WRITE_CONTACTS']);
              return `granted=${r.permissions.length} auth=${r.authResults.join(',')}`;
            } catch (e) {
              const err = e as BusinessError;
              return `perm-err=${err.code}`;
            }
          }),
          new Case('addContact', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const c: contact.Contact = { name: { familyName: 'vd-bench' } } as contact.Contact;
              const id = await contact.addContact(ctx, c);
              return `added id=${id}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`add fail: ${err.code} ${err.message}`);
              return `add-err=${err.code}`;
            }
          }),
          new Case('queryContacts', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const list = await contact.queryContacts(ctx);
              return `count=${list.length}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`query fail: ${err.code} ${err.message}`);
              return `query-err=${err.code}`;
            }
          }),
          new Case('query attrs', async (ctx: common.UIAbilityContext, log: (s: string) => void) => {
            try {
              const key = await contact.queryGroups(ctx);
              return `groups=${key.length}`;
            } catch (e) {
              const err = e as BusinessError;
              log(`groups fail: ${err.code} ${err.message}`);
              return `groups-err=${err.code}`;
            }
          }),
        ],
      })
    }
    .height('100%')
  }
}
