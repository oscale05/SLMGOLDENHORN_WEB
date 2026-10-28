# Migration

NG-ZORRO follows Angular's major version. Major numbers ALWAYS match `@angular/core`, when you bump Angular you bump NG-ZORRO in the same PR.

## v17, key shifts

- **`provideNzI18n` replaces `NZ_I18N` + `APP_INITIALIZER` registration.** v16 needed a factory provider in `app.module.ts`, v17 introduced the provider for use in `app.config.ts`.
- **`<nz-icon>` registration via `provideNzIcons`.** Replaces module-level `IconDefinitions` registration. See [setup.md](./setup.md).
- **Standalone components arrive (partial).** Many components export both `Nz*Module` and the underlying standalone class.

## v18, the standalone cutover

- **Every component ships a standalone class.** `NzButtonComponent`, `NzTableComponent`, `NzFormItemComponent`, etc. The `Nz*Module` exports remain for backwards compatibility, prefer the standalone class in new code.
- **Imports tree-shake better when you reference the standalone class directly.** The module forms re-export the same classes plus a few directives, so they're slightly heavier.
- **Schematic-generated code switched to standalone.** A fresh `ng add ng-zorro-antd` in v18+ no longer creates `app.module.ts`.

## v19, v20, v21, incremental

These minor majors mostly track Angular features (control flow `@if` / `@for`, signal inputs, zoneless). Component APIs are stable, but watch for these:

- **`provideZonelessChangeDetection`** is supported, NG-ZORRO components run under zoneless without modification.
- **Signal-input migrations.** Some components convert `@Input()` to `input()` between minors, the template binding shape is unchanged.
- **Animations are still required.** `provideAnimationsAsync()` is needed for Modal, Drawer, Dropdown overlays.
- **Dynamic theme** stays flagged experimental through v21.

## v21 → v22, the first breaking bump in a while

`ng-zorro-antd@22` requires **Angular v22** (`@angular/core@^22.0.0`; upgrade Angular first, then NG-ZORRO in lockstep). Unlike v19-v21 this release removes APIs and changes date-component setup.

- **Date components no longer register a default date adapter.** DatePicker, RangePicker, Calendar, etc. now need an explicit provider. Add `provideNzDateFnsAdapter()` to `app.config.ts` to keep the previous behaviour, and note `date-fns` is now **v4** (its own import-path / API changes may hit code that calls `date-fns` directly).
  ```ts
  import { provideNzDateFnsAdapter } from 'ng-zorro-antd/date-picker';
  providers: [provideNzI18n(en_US), provideNzDateFnsAdapter()]
  ```
  Symptom if missing: date components throw or render without a working calendar.
- **All components are `OnPush` now.** Pure performance win, but custom code that mutated component state outside Angular's awareness may need `markForCheck()`.
- **Removed deprecated inputs/APIs** (finalized in v22):

  | Component | Removed | Use instead |
  |---|---|---|
  | `nz-button` | `nzSearch` | plain button + `nz-input-group` search affordance |
  | `nz-cascader` | `nzDisplayWith` | `nzLabelRender` template |
  | `nz-input` | `nzAutosize` | `nz-textarea` autosize / CDK `cdkTextareaAutosize` |
  | `nz-input` | `nz-input-group` slot components, `nzStepperless` | current input-group API |
  | `nz-modal` | `nzOnOk` / `nzOnCancel` **as inputs** | the service `nzOnOk`/`nzOnCancel` config, or `(nzOnCancel)` output |
  | `nz-upload` | `nzTransformFile` + related types | `nzCustomRequest` / `nzBeforeUpload` |
  | `nz-tooltip` | `cdkConnectedOverlayPush` | default overlay positioning |

  Plus smaller removals across dropdown, collapse, message, and transfer. Code that still uses these fails to compile on v22, run `ng build` right after the bump and fix by the table.

## v22.0 to v22.1, minor but with a style change

No removals, but the stylesheet layer changed:

- **Standalone `style/rtl.less` files are removed.** LTR and RTL styles are merged using CSS logical properties. Delete any import of a component's `rtl.less` and import the component style entry points instead.
- **Renamed LESS variables.** `@anchor-link-top` is now `@anchor-link-padding-block`, `@anchor-link-left` is now `@anchor-link-padding-inline-start`, and `@anchor-link-padding` is removed. For tabs, spacing uses `@tabs-horizontal-gutter` (migrate overrides of `@tabs-horizontal-margin`), and `@tabs-horizontal-margin-rtl` is removed. The LESS compile flags unknown variables.
- **22.1.2** isolates internal `ngModel` controls, which fixes spurious `NG01354` errors when NG-ZORRO controls sit inside a parent reactive form.

## Renamed / removed APIs to watch

| Old | New | Since |
|---|---|---|
| `NZ_I18N` `InjectionToken` factory | `provideNzI18n(locale)` | v17 |
| `IconDefinitions` module registration | `provideNzIcons([...])` | v17 |
| `nz-input-group [nzPrefixIcon]="'..."'` (string) | `<nz-icon nzType="..." nzInputPrefix>` projection slot | v17 |
| `NzModalService.create({ nzContent: ComponentRef })` | Same call, `nzContent` now also accepts a `TemplateRef` or `Type<unknown>` | stable |
| `nz-form-explain` deprecated wrapper | `nz-form-control [nzErrorTip]="..."` | pre-v15, still appears in old samples |

If you encounter `NZ_I18N` in legacy code, that file is on v16 or earlier. The safest cleanup is to convert that module to standalone alongside the upgrade.

## Cross-major upgrade pattern

1. **Upgrade Angular first.** Use `ng update @angular/core@<n> @angular/cli@<n>`.
2. **Upgrade NG-ZORRO to the same major.** `ng update ng-zorro-antd@<n>` runs schematics that rewrite known deprecated APIs.
3. **Re-run schematic-generated `app.config.ts` patches** if the project skipped earlier majors, the schematics cover incremental hops, not multi-major jumps.
4. **Rebuild LESS.** Theme variables occasionally rename across majors, the compile will flag unknowns.

## Module → standalone, mechanical recipe

For a component still importing `NzButtonModule`:

```ts
// before
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  imports: [NzButtonModule],
  template: `<button nz-button>Hi</button>`,
})

// after
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  imports: [NzButtonComponent],
  template: `<button nz-button>Hi</button>`,
})
```

The template binding (`nz-button` attribute) is unchanged. Only the import shape changes.

## Things that are NOT changing

- **`nz-*` template directive names.** `<button nz-button>`, `<nz-table>`, `<nz-form-item>` are stable across all v17+ majors.
- **The service APIs.** `NzModalService`, `NzMessageService`, `NzNotificationService`, `NzDrawerService` keep their method shapes.
- **LESS variable names.** `@primary-color`, `@border-radius-base`, etc. survive across majors. New variables get added, existing ones don't get renamed without a release-note callout.