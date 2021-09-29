# mjml-list

`<ul>` and `<li>` HTML elements can be used in HTML emails, but getting them to
render consistently
[takes a little work](https://www.litmus.com/blog/the-ultimate-guide-to-bulleted-lists-in-html-email/).
This is a shortcut for these elements.

**`<mj-list>`** replaces `<ul>`. Use it alongside
[`<mj-text>`](https://documentation.mjml.io/#mj-text) within
[`<mj-column>`](https://documentation.mjml.io/#mj-column).

**`<mj-li>`** replaces `<li>`. Use it inside `<mj-list></mj-list>`.

## Usage

This MJML...

```html
<mj-text>
  <p>Examples of the custom "mj-list" and "mj-li" tags. Here is a list with an
  option set on the entire list:</p>
</mj-text>
<mj-list background-color="#ddd" border-top="18px #ddd solid">
  <mj-li>List item one.</mj-li>
  <mj-li>List item two.</mj-li>
  <mj-li>List item three.</mj-li>
  <mj-li>List item four.</mj-li>
</mj-list>
<mj-text>
  <p>And here's a list with options set on individual list items:</p>
</mj-text>
<mj-list>
  <mj-li>List item one. Lorem ipsum dolor sit amet, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.</mj-li>
  <mj-li color="blue">List item two, customized color for the entire list item.</mj-li>
  <mj-li>List item three.</mj-li>
  <mj-li bullet-color="red" padding-left="40px">List item four, customized
    bullet color and left padding. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.</mj-li>
  <mj-li gutter="20px">List item five, custom gutter size.</mj-li>
  <mj-li>List item six.</mj-li>
  <mj-li text-color="green">List item seven, customized text (only) color. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.</mj-li>
</mj-list>
```

Will show this markup:

(markup image to come)

In your `<mj-head>` component, you should also add the following:

```html
<mj-html-attributes>
  <mj-selector path=".list table table">
    <mj-html-attribute name="role">list</mj-html-attribute>
  </mj-selector>
  <mj-selector path=".list table table > tbody">
    <mj-html-attribute name="role">presentation</mj-html-attribute>
  </mj-selector>
</mj-html-attributes>
```

This will ensure that these lists are properly described as such when the email
is read using assistive technology.

You can customize aspects of both the list and individual list items using the
options below.

## `<mjml-list>` options

| option                   | unit                                                                       | details                                                                      | default value                  |
| ------------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------ |
| `background-color`       | color                                                                      | Applies to entire list                                                       | none                           |
| `border`                 | string ([border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)) | Applies to entire list                                                       | none                           |
| `border-top`             | string ([border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)) | Applies to entire list                                                       | none                           |
| `border-right`           | string ([border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)) | Applies to entire list                                                       | none                           |
| `border-bottom`          | string ([border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)) | Applies to entire list                                                       | none                           |
| `border-left`            | string ([border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)) | Applies to entire list                                                       | none                           |
| `border-radius`          | pixels                                                                     | Applies to entire list                                                       | none                           |
| `direction`              | `ltr`, `rtl`                                                               | [Language direction](https://www.w3.org/International/questions/qa-html-dir) | `ltr`                          |
| `inner-background-color` | color                                                                      | Applies to entire list                                                       | none                           |
| `padding`                | pixels                                                                     | Applies to entire list                                                       | none                           |
| `padding-top`            | pixels                                                                     | Applies to entire list                                                       | none                           |
| `padding-right`          | pixels                                                                     | Applies to entire list                                                       | none                           |
| `padding-bottom`         | pixels                                                                     | Applies to entire list                                                       | none                           |
| `padding-left`           | pixels                                                                     | Applies to entire list                                                       | none                           |
| `vertical-align`         | `top`, `middle`, `bottom`                                                  | Applies to entire list                                                       | `top`                          |
| `width`                  | pixels                                                                     | Applies to entire list                                                       | none (full width of container) |

## `<mjml-li>` options

| option             | unit                                 | details                                 | default value                                                                                       |
| ------------------ | ------------------------------------ | --------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `color`            | color                                | Applies to both bullet marker and text  | none (inherited from parent text style)                                                             |
| `bullet-color`     | color                                | Applies to bullet marker only           | none (inherited from `color`)                                                                       |
| `text-color`       | color                                | Applies to text only                    | none (inherited from `color`)                                                                       |
| `background-color` | color                                | Applies to list item                    | none                                                                                                |
| `font-family`      | string                               | Applies to list item                    | `Ubuntu, Helvetica, Arial, sans-serif` (from [`<mj-text>`](https://documentation.mjml.io/#mj-text)) |
| `font-size`        | pixels                               | Applies to list item                    | `13px` (from [`<mj-text>`](https://documentation.mjml.io/#mj-text))                                 |
| `font-style`       | string                               | Applies to list item                    | none                                                                                                |
| `font-weight`      | string                               | Applies to list item                    | none                                                                                                |
| `gutter`           | pixels                               | Distance between bullet marker and text | default set in [`themeConfig.yaml`](designs/_templates/theme/themeConfig.yaml)                      |
| `letter-spacing`   | pixels (negative allowed)            | Applies to list item                    | none                                                                                                |
| `line-height`      | number, pixels or percentage         | Applies to list item                    | none                                                                                                |
| `padding-right`    | pixels                               | Applies to list item                    | none                                                                                                |
| `padding-left`     | pixels                               | Applies to list item                    | none                                                                                                |
| `text-align`       | `left`, `center`, `right`, `justify` | Applies to list item                    | `left`                                                                                              |
| `text-decoration`  | string                               | Applies to list item                    | none                                                                                                |
| `text-transform`   | string                               | Applies to list item                    | none                                                                                                |
| `vertical-align`   | `top`, `middle`, `bottom`            | Applies to list item                    | `top`                                                                                               |

## Setup

Install via npm:

```
npm install mjml-list
```

Then add the package to your `.mjmlconfig`:

```
{
  "packages": [
    "mjml-list/lib/index.js"
  ]
}
```

## License

GPLv3. See [LICENSE](LICENSE).
