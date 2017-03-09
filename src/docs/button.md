# Buttons

## Button Tags

Use the button classes on and `<a>`, `<button>`, `<input>` elements.

<button type="button" class="btn btn-default">Default Button</button>
<button type="button" class="btn btn-default" disabled>Default Button</button>
```html
<button type="button" class="btn btn-default">Default Button</button>
<button type="button" class="btn btn-default" disabled>Default Button</button>

```

> Context-specific usage
> While button classes can be used on `<a>` and `<button>` elements, only `<button>` elements are supported within our nav and navbar components.

> Links acting as buttons
> If the <a> elements are used to act as buttons – triggering in-page functionality, rather than navigating to another document or section within the current page – they should also be given an appropriate role="button".

> Cross-browser rendering
> As a best practice, we highly recommend using the `<button>` element whenever possible to ensure matching cross-browser rendering.
>
> Among other things, there's a bug in Firefox &lt; 30 that prevents us from setting the line-height of `<input>`-based buttons, causing them to not exactly match the height of other buttons on Firefox.

<button type="button" class="btn btn-primary">Primary Button</button>
<button type="button" class="btn btn-primary" disabled>Primary Button</button>
```html
<button type="button" class="btn btn-primary">Primary Button</button>
```

<button type="button" class="btn btn-warning">Warning Button</button>
<button type="button" class="btn btn-warning" disabled>Warning Button</button>
```html
<button type="button" class="btn btn-warning">Warning Button</button>
```

<a href="" class="btn btn-link">Link Button</a>
<a href="" class="btn btn-link" disabled>Link Button</a>
```html
<a href="" class="btn btn-link">Link Button</a>
```
