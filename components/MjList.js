import { BodyComponent } from 'mjml-core'

export default class MjList extends BodyComponent {
  static componentName = 'mj-list'

  static dependencies = {
    'mj-list': ['mj-li'],
    'mj-column': ['mj-list'],
  }

  static allowedAttributes = {
    'background-color': 'color',
    border: 'string',
    'border-bottom': 'string',
    'border-left': 'string',
    'border-radius': 'unit(px,%){1,4}',
    'border-right': 'string',
    'border-top': 'string',
    direction: 'enum(ltr,rtl)',
    'inner-background-color': 'color',
    'padding-bottom': 'unit(px,%)',
    'padding-left': 'unit(px,%)',
    'padding-right': 'unit(px,%)',
    'padding-top': 'unit(px,%)',
    padding: 'unit(px,%){1,4}',
    'vertical-align': 'enum(top,bottom,middle)',
    width: 'unit(px,%)',
  }

  static defaultAttributes = {
    direction: 'ltr',
    'vertical-align': 'top',
  }

  render () {
    return this.renderMJML(`
      <mj-column
        css-class="list"
        ${this.htmlAttributes({
          'background-color': this.getAttribute('background-color'),
          border: this.getAttribute('border'),
          'border-bottom': this.getAttribute('border-bottom'),
          'border-left': this.getAttribute('border-left'),
          'border-radius': this.getAttribute('border-radius'),
          'border-right': this.getAttribute('border-right'),
          'border-top': this.getAttribute('border-top'),
          direction: this.getAttribute('direction'),
          'inner-background-color': this.getAttribute('inner-background-color'),
          'padding-bottom': this.getAttribute('padding-bottom'),
          'padding-left': this.getAttribute('padding-left'),
          'padding-right': this.getAttribute('padding-right'),
          'padding-top': this.getAttribute('padding-top'),
          padding: this.getAttribute('padding'),
          'vertical-align': this.getAttribute('vertical-align'),
          width: this.getAttribute('width'),
        })}
      >
        ${this.renderChildren(this.props.children, {
          rawXML: true,
          renderer: component => component.render,
        })}
      </mj-column>
      `)
  }
}
