import { BodyComponent } from 'mjml-core'

export default class MjLi extends BodyComponent {
  static componentName = 'mj-li'
  static endingTag = true

  static dependencies = {
    'mj-li': [],
    'mj-list': ['mj-li'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    'bullet-color': 'color',
    color: 'color',
    'font-family': 'string',
    'font-size': 'unit(px)',
    'font-style': 'string',
    'font-weight': 'string',
    gutter: 'unit(px)',
    'letter-spacing': 'unitWithNegative(px,em)',
    'line-height': 'unit(px,%,)',
    'padding-left': 'unit(px,%)',
    'padding-right': 'unit(px,%)',
    'text-align': 'enum(left,right,center,justify)',
    'text-color': 'color',
    'text-decoration': 'string',
    'text-transform': 'string',
    'vertical-align': 'enum(top,bottom,middle)',
  }

  static defaultAttributes = {
    'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
    'font-size': '13px',
    gutter: '3px',
    'text-align': 'left',
    'vertical-align': 'top',
  }

  getStyles () {
    const textColor =
      this.getAttribute('text-color') || this.getAttribute('color')

    return {
      ulStyle: {
        'background-color': this.getAttribute('background-color'),
        color: this.getAttribute('color'),
        'font-family': this.getAttribute('font-family'),
        'font-size': this.getAttribute('font-size'),
        'font-style': this.getAttribute('font-style'),
        'font-weight': this.getAttribute('font-weight'),
        'letter-spacing': this.getAttribute('letter-spacing'),
        'mso-line-height-rule': 'exactly',
        'line-height': this.getAttribute('line-height'),
        'margin-top': '0',
        'margin-left': this.getAttribute('padding-left'),
        'margin-right': this.getAttribute('padding-right'),
        'margin-bottom': '0',
        padding: '0',
        'text-decoration': this.getAttribute('text-decoration'),
        'text-transform': this.getAttribute('text-transform'),
        'text-align': this.getAttribute('align'),
      },
      liStyle: {
        color: this.getAttribute('bullet-color'),
        margin: '0',
        padding: '0',
        'padding-left': this.getAttribute('gutter'),
        'text-decoration': this.getAttribute('text-decoration'),
        'text-transform': this.getAttribute('text-transform'),
        'text-align': this.getAttribute('align'),
      },
      textWrap: {
        color: textColor,
        'letter-spacing': this.getAttribute('letter-spacing'),
        'text-decoration': this.getAttribute('text-decoration'),
        'text-transform': this.getAttribute('text-transform'),
        'text-align': this.getAttribute('text-align'),
      },
    }
  }

  render () {
    let itemClass = 'list-item'

    if (this.getAttribute('css-class')) {
      itemClass += ` ${this.getAttribute('css-class')}`
    }

    return `
      <ul
        ${this.htmlAttributes({
          role: 'presentation',
          class: 'list-item-wrap',
          align: this.getAttribute('text-align'),
          type: 'disc',
          style: 'ulStyle',
        })}
      >
        <li
          ${this.htmlAttributes({
            role: 'list-item',
            class: `${itemClass}`,
            style: 'liStyle',
          })}
        >
          <span
            ${this.htmlAttributes({
              class: 'list-item__text',
              style: 'textWrap',
            })}
          >
            ${this.getContent()}
          </span>
        </li>
      </ul>
      `
  }
}
