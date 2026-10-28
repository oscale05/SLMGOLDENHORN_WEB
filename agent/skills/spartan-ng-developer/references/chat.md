# Chat and Agent UI

The 8 Helm components for conversation transcripts, agent activity, and guided questions: Message, Bubble, Attachment, Marker, Message Scroller, Trace, Code Block, Questionnaire. Message, Bubble, Attachment, and Marker arrived in 1.2, Questionnaire in 1.4, Message Scroller in 1.5, Trace and Code Block in 1.8. All follow [helm-conventions.md](helm-conventions.md). Message Scroller and Questionnaire also ship Brain primitives (`@spartan-ng/brain/message-scroller`, `@spartan-ng/brain/questionnaire`).

Every part below accepts both forms of selector: the attribute (`<div hlmMessage>`) and the element (`<hlm-message>`), except where a native element is required (noted per entry). Sources are the component pages and previews in the upstream repo at v1.8.0.

---

### Message

- **Import**: `HlmMessageImports` from `@spartan-ng/helm/message`
- **Parts**: `hlmMessage`, `hlmMessageAvatar`, `hlmMessageContent`, `hlmMessageHeader`, `hlmMessageFooter`, `hlmMessageGroup`
- **Inputs**: `align` on `hlmMessage`, `'start'` (default) or `'end'`. Use `end` for the current user's own messages.
- **Use**: One row of a conversation, laying out an avatar and a content column. Put Bubbles, Attachments, headers and footers (such as "Delivered") inside the content.
- **Example**:
  ```html
  <div hlmMessage align="end">
    <div hlmMessageAvatar>
      <hlm-avatar>
        <span hlmAvatarFallback>ME</span>
      </hlm-avatar>
    </div>
    <div hlmMessageContent>
      <div hlmBubble>
        <div hlmBubbleContent>Deploying to prod real quick.</div>
      </div>
      <div hlmMessageFooter>Delivered</div>
    </div>
  </div>
  ```

### Bubble

- **Import**: `HlmBubbleImports` from `@spartan-ng/helm/bubble`
- **Parts**: `hlmBubble`, `hlmBubbleContent`, `hlmBubbleGroup`, `hlmBubbleReactions`
- **Inputs**: `variant` on `hlmBubble`: `'default'` (default), `'secondary'`, `'muted'`, `'tinted'`, `'outline'`, `'ghost'`, `'destructive'`. `align` (`'start'` | `'end'`) when used outside a Message. `hlmBubbleReactions` takes `side` (default `'bottom'`) and `align` (default `'end'`).
- **Use**: The text surface of a chat message. Wrap consecutive bubbles from the same sender in `hlmBubbleGroup`. Add `hlmBubbleReactions` for emoji chips.
- **Gotcha**: Give `hlmBubbleReactions` an accessible name (`aria-label`, and `role="img"` when it is only emoji).

### Attachment

- **Import**: `HlmAttachmentImports` from `@spartan-ng/helm/attachment`
- **Parts**: `hlmAttachment`, `hlmAttachmentMedia`, `hlmAttachmentContent`, `hlmAttachmentTitle`, `hlmAttachmentDescription`, `hlmAttachmentActions`, `button[hlmAttachmentAction]`, `hlmAttachmentGroup`, `hlmAttachmentTrigger` (on a `button` or `a`, to make the whole card clickable)
- **Inputs**: `state` on `hlmAttachment`: `'idle'`, `'uploading'`, `'processing'`, `'error'`, `'done'` (default). `size` (default `'default'`), `orientation` (`'horizontal'` default, `'vertical'`). `hlmAttachmentMedia` takes `variant`: `'icon'` (default) or `'image'`.
- **Use**: File chips and image tiles in a composer or message, with upload states.
- **Example**:
  ```html
  <div hlmAttachment state="uploading">
    <div hlmAttachmentMedia>
      <hlm-spinner />
    </div>
    <div hlmAttachmentContent>
      <span hlmAttachmentTitle>sales-dashboard.pdf</span>
      <span hlmAttachmentDescription>Uploading · 64%</span>
    </div>
    <div hlmAttachmentActions>
      <button hlmAttachmentAction aria-label="Cancel upload">
        <ng-icon name="lucideX" />
      </button>
    </div>
  </div>
  ```
- **Gotcha**: `hlmAttachmentAction` is an icon-only ghost button, so always set `aria-label`.

### Marker

- **Import**: `HlmMarkerImports` from `@spartan-ng/helm/marker`
- **Parts**: `hlmMarker`, `hlmMarkerIcon`, `hlmMarkerContent`
- **Inputs**: `variant` on `hlmMarker`: `'default'` (default), `'separator'`, `'border'`.
- **Use**: Inline status lines and dividers in a transcript, such as "Thinking...", "Explored 4 files", or "Conversation compacted".
- **Example**:
  ```html
  <div hlmMarker role="status">
    <span hlmMarkerIcon>
      <hlm-spinner />
    </span>
    <span hlmMarkerContent>Thinking...</span>
  </div>
  <div hlmMarker variant="separator">
    <span hlmMarkerContent>Conversation compacted</span>
  </div>
  ```
- **Gotcha**: Use `role="status"` on markers whose text changes live so assistive tech announces them.

### Message Scroller

- **Imports**: `HlmMessageScrollerImports` from `@spartan-ng/helm/message-scroller`
- **Parts**: `hlmMessageScrollerProvider`, `hlmMessageScroller`, `hlmMessageScrollerViewport`, `hlmMessageScrollerContent`, `hlmMessageScrollerItem`, `button[hlmMessageScrollerButton]`
- **Use**: A chat transcript viewport that keeps the right scroll position while messages stream in, prepend, or animate. The docs show anchoring, streaming, history loading, opening position, and group chat variants.
- **Key inputs** (Brain): on the provider, `autoScroll` (follow new content, default off), `defaultScrollPosition` (default `'end'`), `scrollEdgeThreshold`, `scrollPreviousItemPeek`, `scrollMargin`. On an item, `messageId` and `scrollAnchor` (anchor the viewport to this item, typically the latest user message). On the viewport, `preserveScrollOnPrepend` (default true) and `aria-label` (default `Messages`). On the button, `direction` (default `'end'`) and `behavior` (default `'smooth'`).
- **Example**:
  ```html
  <div hlmMessageScrollerProvider autoScroll>
    <div hlmMessageScroller>
      <div hlmMessageScrollerViewport>
        <div hlmMessageScrollerContent>
          @for (message of messages(); track message.id) {
            <div hlmMessageScrollerItem [messageId]="message.id" [scrollAnchor]="message.role === 'user'">
              <!-- hlmMessage goes here -->
            </div>
          }
        </div>
      </div>
      <button hlmMessageScrollerButton></button>
    </div>
  </div>
  ```
- **Gotcha**: The provider owns the scroll state, so the scroller, viewport and button must all sit inside one `hlmMessageScrollerProvider`. The viewport needs a bounded height (for example a flex child with `min-h-0` inside a fixed-height card), otherwise it never scrolls.

### Trace

- **Import**: `HlmTraceImports` from `@spartan-ng/helm/trace`
- **Parts**: `hlmTrace`, `hlmTraceLine`, `hlmTraceIcon`, `hlmTraceTitle`, `hlmTraceDescription`, `hlmTraceCollapsible`, `button[hlmTraceCollapsibleTrigger]`, `hlmTraceCollapsibleContent`
- **Inputs**: `status` on `hlmTraceLine`: `'running'`, `'error'`, `'pending'` (unset means finished). `hlmTraceCollapsible` takes `expanded`.
- **Use**: Shows what an agent did, as a list of lines (searches, commands, thoughts), where a line can expand to show detail such as a Code Block.
- **Example**:
  ```html
  <hlm-trace>
    <hlm-trace-collapsible>
      <button hlmTraceCollapsibleTrigger>
        <hlm-trace-line>
          <hlm-trace-icon><ng-icon name="lucideCircleCheck" /></hlm-trace-icon>
          <hlm-trace-title>Thought for 5s</hlm-trace-title>
        </hlm-trace-line>
      </button>
      <hlm-trace-collapsible-content>The lockfile was not updated.</hlm-trace-collapsible-content>
    </hlm-trace-collapsible>
    <hlm-trace-line status="running">
      <hlm-trace-icon><hlm-spinner /></hlm-trace-icon>
      <hlm-trace-title>Running tests</hlm-trace-title>
    </hlm-trace-line>
  </hlm-trace>
  ```

### Code Block

- **Import**: `HlmCodeBlockImports` from `@spartan-ng/helm/code-block`
- **Parts**: `hlmCodeBlock`, `hlmCodeBlockHeader`, `hlmCodeBlockTitle`, `hlmCodeBlockActions`, `button[hlmCodeBlockCopyButton]`, `pre[hlmCodeBlockContent]`, `span[hlmCodeBlockLine]`, `hlmCodeBlockFooter`
- **Inputs**: `hlmCodeBlock`: `variant` (`'default'` | `'destructive'`), `size` (`'default'` | `'sm'`). `hlmCodeBlockContent`: `code` (string), `wrap`, `lineNumbers`, `startLine`. `hlmCodeBlockCopyButton`: `value` (text to copy), `copyText` (default `Copy`), `copiedText` (default `Copied`). `hlmCodeBlockLine`: `variant` (`'default'` | `'added'` | `'removed'` | `'highlighted'`) for diffs and highlighted lines.
- **Use**: Display and copy a snippet or terminal output. It does not do syntax highlighting itself. For a highlighted diff viewer see the diff recipe in [recipes.md](recipes.md).
- **Example**:
  ```html
  <hlm-code-block>
    <hlm-code-block-header>
      <hlm-code-block-title>Terminal</hlm-code-block-title>
      <hlm-code-block-actions>
        <button hlmCodeBlockCopyButton [value]="output"></button>
      </hlm-code-block-actions>
    </hlm-code-block-header>
    <pre hlmCodeBlockContent [code]="output"></pre>
  </hlm-code-block>
  ```

### Questionnaire

- **Import**: `HlmQuestionnaireImports` from `@spartan-ng/helm/questionnaire`
- **Parts**: `form[hlmQuestionnaire]`, `hlmQuestionnaireProgress`, `fieldset[hlmQuestionnaireItem]`, `legend[hlmQuestionnaireTitle]`, `hlmQuestionnaireDescription`, `hlmQuestionnaireChoices`, `label[hlmQuestionnaireChoice]`, `hlmQuestionnaireChoiceDescription`, `input[hlmQuestionnaireInput]` (free-form answer), `hlmQuestionnaireError`, `hlmQuestionnaireActions`, and the buttons `hlmQuestionnairePrevious`, `hlmQuestionnaireSkip`, `hlmQuestionnaireNext`, `hlmQuestionnaireSubmit`
- **Inputs**: on the form, `items` (array of `{ name, required, choices: [{ value }] }`, typed `BrnQuestionnaireItemDefinition`), `defaultItem`, `shortcuts` (for example `'letters'` to bind letter keys to choices). On an item, `name` (required), `required`, `multiple` (checkbox-style answers). On a choice, `value` (required).
- **Use**: A one-question-at-a-time wizard (agent clarifying questions, onboarding). It tracks the current question, validation, skipping, and keyboard shortcuts for you.
- **Signal Forms**: the docs wire it with Signal Forms. Add `[formRoot]="form"` on the form and `[formField]="form.<name>"` on each item, importing `FormField` and `FormRoot` from `@angular/forms/signals` and building `form(model, schema, { submission })`. Reactive Forms is not shown in the docs, so verify before using it.
- **Gotcha**: Each item's `name` must match its entry in `items` and its form field. Add a `<p hlmQuestionnaireError></p>` per item, and set `required` on both the item and the form schema.

## See also

- [Helm conventions](helm-conventions.md)
- [Layout](layout.md) - Card and Scroll Area for the container around a transcript.
- [Forms](forms.md) - Signal Forms wiring.
- [Back to SKILL.md](../SKILL.md)
