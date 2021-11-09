<h1 align="center">MJML Bullet List: <code>&lt;mj-list&gt;</code> and <code>&lt;mj-li&gt;</code></h1>

<!-- This component's documentation and README need to stay in sync. Make sure
     to make any updates here in both places:

     https://premail.dev/docs/components/mjml-bullet-list/
     https://github.com/premail/mjml-bullet-list/blob/main/README.md

     Should differences exist, the README is considered canonical as it is
     published to NPM:
     https://www.npmjs.com/package/mjml-bullet-list
-->

<div align="center">
  <strong>Making bulletproof bulleted lists in emails easy with MJML!</strong><br />
  <br />
  <a href="https://github.com/premail/mjml-bullet-list/issues/new?assignees=&labels=Type%3A+Bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  &bullet;
  <a href="https://github.com/premail/mjml-bullet-list/issues/new?assignees=&labels=Type%3A+Feature&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  &bullet;
  <a href="https://github.com/premail/mjml-bullet-list/issues/new?assignees=&labels=Type%3A+Question&template=03_SUPPORT_QUESTION.md&title=support%3A+">Ask a Question</a>
</div>

<div align="center">
<br />

[![NPM](https://img.shields.io/npm/v/mjml-bullet-list?style=flat-square)](https://www.npmjs.com/package/mjml-bullet-list)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/premail/mjml-bullet-list?sort=semver&style=flat-square)](https://github.com/premail/mjml-bullet-list/releases)
![Checks](https://img.shields.io/github/checks-status/premail/mjml-bullet-list/main.svg?style=flat-square)
[![MJML 4.0+ valid](https://img.shields.io/badge/mjml-4%2B-brightgreen.svg?style=flat-square)](https://github.com/mjmlio/mjml/releases)
[![License: AGPL-3.0+](https://img.shields.io/github/license/premail/mjml-bullet-list?style=flat-square&color=blue)](https://github.com/premail/mjml-bullet-list/blob/main/LICENSE)
[![Pull Requests welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=flat-square)](https://github.com/premail/mjml-bullet-list/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22%2C%22Status%3A+Available%22+sort%3Aupdated-desc+)

</div>

---

<img src="https://raw.githubusercontent.com/premail/mjml-bullet-list/main/docs/images/icon.svg" alt="Premail" width="50" height="50" align="left" /><strong>This
MJML component is brought to you by
<a href="https://github.com/premail">Premail</a>, and the following
documentation can also be found at
<a href="https://premail.dev/docs/components/mjml-bullet-list">https://premail.dev/docs/components/mjml-bullet-list</a></strong>

---

`<ul>` and `<li>` HTML elements can be used in HTML emails, but getting them to
render consistently
[takes a little work](https://www.litmus.com/blog/the-ultimate-guide-to-bulleted-lists-in-html-email/).
This is a shortcut for these elements. Its output is predictably boring, but
bulletproof (forgive the pun) for email clients:

![Example of simple generated markup from the MJML Bullet List component](examples/mjml-bullet-list-screenshot-simple.png)

**`<mj-list>`** replaces `<ul>`. Use it alongside
[`<mj-text>`](https://documentation.mjml.io/#mj-text) within
[`<mj-column>`](https://documentation.mjml.io/#mj-column).

**`<mj-li>`** replaces `<li>`. Use it inside `<mj-list></mj-list>`.

_MJML Bullet List is designed for MJML 4+ and is unrelated to the v3 component
[`mjml-list`](https://www.npmjs.com/package/mjml-list)._

---

- [Usage](#usage)
  - [Coding](#coding)
  - [MJML Head](#mjml-head)
  - [Styling](#styling)
  - [Options](#options)
    - [Available options for &lt;mj-list&gt;](#available-options-for-mj-list)
    - [Available options for &lt;mj-li&gt;](#available-options-for-mj-li)
  - [Adding this to your emails](#adding-this-to-your-emails)
  - [Fork or contribute to this component](#fork-or-contribute-to-this-component)
- [Security](#security)
- [License](#license)

# Usage

## Coding

This MJML:

```html
<mj-list>
  <mj-li>List item one.</mj-li>
  <mj-li>List item two.</mj-li>
  <mj-li>List item three.</mj-li>
  <mj-li>List item four.</mj-li>
</mj-list>
```

Will produce the following visual representation:

![Example of simple generated markup from the MJML Bullet List component](examples/mjml-bullet-list-screenshot-simple.png)

Not very exciting, but reliably rendered in all email clients.

But you can get more creative. This MJML:

```html
<mj-text>
  <p>
    Examples of the custom "mj-list" and "mj-li" tags. Here is a list with an
    option set on the entire list:
  </p>
</mj-text>
<mj-list background-color="#ddd">
  <mj-li>List item one.</mj-li>
  <mj-li>List item two.</mj-li>
  <mj-li>List item three.</mj-li>
  <mj-li>List item four.</mj-li>
</mj-list>
<mj-text>
  <p>And here's a list with options set on individual list items:</p>
</mj-text>
<mj-list>
  <mj-li
    >List item one. Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.</mj-li
  >
  <mj-li color="blue"
    >List item two, customized color for the entire list item.</mj-li
  >
  <mj-li>List item three.</mj-li>
  <mj-li bullet-color="red" padding-left="40px"
    >List item four, customized bullet color and left padding. Duis aute irure
    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
    officia deserunt mollit anim id est laborum.</mj-li
  >
  <mj-li gutter="20px">List item five, custom gutter size.</mj-li>
  <mj-li>List item six.</mj-li>
  <mj-li text-color="green"
    >List item seven, customized text (only) color. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.</mj-li
  >
</mj-list>
```

Will produce the following visual representation:

![Example of advanced generated markup from the MJML Bullet List component](examples/mjml-bullet-list-screenshot-advanced.png)

## MJML Head

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

## Styling

In addition to setting attributes with the elements options (see below), you can
also modify them through CSS. Use
[`<mj-style>`](https://documentation.mjml.io/#mj-style) and target the `.list`
and `.list-item` classes.

You can see this being done in the [example MJML file](examples/index.mjml).

## Options

### Available options for `<mj-list>`

| option                   | unit                                                                       | details                                                                      | default value                                                                                      |
| ------------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `background-color`       | color                                                                      | Applies to entire list                                                       | none                                                                                               |
| `border`                 | string ([border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)) | Applies to entire list                                                       | none                                                                                               |
| `border-top`             | string ([border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)) | Applies to entire list                                                       | none                                                                                               |
| `border-right`           | string ([border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)) | Applies to entire list                                                       | none                                                                                               |
| `border-bottom`          | string ([border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)) | Applies to entire list                                                       | none                                                                                               |
| `border-left`            | string ([border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)) | Applies to entire list                                                       | none                                                                                               |
| `border-radius`          | pixels                                                                     | Applies to entire list                                                       | none                                                                                               |
| `direction`              | `ltr`, `rtl`                                                               | [Language direction](https://www.w3.org/International/questions/qa-html-dir) | `ltr`                                                                                              |
| `inner-background-color` | color                                                                      | Applies to entire list                                                       | none                                                                                               |
| `padding`                | pixels                                                                     | Applies to entire list                                                       | none                                                                                               |
| `padding-top`            | pixels                                                                     | Applies to entire list                                                       | none                                                                                               |
| `padding-right`          | pixels                                                                     | Applies to entire list                                                       | none                                                                                               |
| `padding-bottom`         | pixels                                                                     | Applies to entire list                                                       | none                                                                                               |
| `padding-left`           | pixels                                                                     | Applies to entire list                                                       | `25px` (note that if you set this to 0, the bullet icons in the list may overflow their container) |
| `vertical-align`         | `top`, `middle`, `bottom`                                                  | Applies to entire list                                                       | `top`                                                                                              |
| `width`                  | pixels                                                                     | Applies to entire list                                                       | none (full width of container)                                                                     |

### Available options for `<mj-li>`

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
| `gutter`           | pixels                               | Distance between bullet marker and text | `3px`                                                                                               |
| `letter-spacing`   | pixels (negative allowed)            | Applies to list item                    | none                                                                                                |
| `line-height`      | number, pixels or percentage         | Applies to list item                    | none                                                                                                |
| `padding-right`    | pixels                               | Applies to list item                    | none                                                                                                |
| `padding-left`     | pixels                               | Applies to list item                    | none                                                                                                |
| `text-align`       | `left`, `center`, `right`, `justify` | Applies to list item                    | `left`                                                                                              |
| `text-decoration`  | string                               | Applies to list item                    | none                                                                                                |
| `text-transform`   | string                               | Applies to list item                    | none                                                                                                |
| `vertical-align`   | `top`, `middle`, `bottom`            | Applies to list item                    | `top`                                                                                               |

## Adding this to your emails

In your MJML project directory, install this package via npm:

```sh
npm install mjml-bullet-list
```

Add the package to your `.mjmlconfig`:

```json
{
  "packages": ["mjml-bullet-list/lib/MjList", "mjml-bullet-list/lib/MjLi"]
}
```

You can now use `<mj-list>` and `<mj-li>` in your MJML emails.

## Fork or contribute to this component

If you want to edit this component, first grab it via git:

```sh
git clone https://github.com/premail/mjml-bullet-list.git
```

Navigate to the folder and install:

```sh
cd mjml-bullet-list
npm install
```

Edit the component script file in `./components/`, then run `gulp build` or
`gulp watch` to compile. We include
[sheerun/modern-node](https://github.com/sheerun/modern-node), which formats and
lints code automatically on commits using [Prettier](https://prettier.io/) and
[ESLint](https://eslint.org/). You can use `npm run format` and `npm run lint`
on their own as well.

To run tests, use `npm run test`

If you want to use a forked version of this component in your emails without
having to publish it to npm, see
[premail/mjml-custom-component](https://github.com/premail/mjml-custom-component)
for a guide.

# Security

Legalese: This component is provided **"as is"** without any warranty. Use at
your own risk.

_For more information and to report security issues, please refer to our
[security documentation](https://github.com/premail/mjml-bullet-list/blob/main/docs/SECURITY.md)._

# License

`mjml-bullet-list` is licensed under the GNU Affero General Public License v3.0
or later. To be clear: This license only covers the component's code, _not_ any
content you generate _using_ it.

For the legal details of the AGPL, see the complete
[LICENSE](https://github.com/premail/mjml-bullet-list/blob/main/LICENSE).
