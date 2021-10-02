import fs from 'fs'
import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'

import MjList from '../lib/MjList.js'
import MjLi from '../lib/MjLi.js'

function toHtml (mjml) {
  const conversion = mjml2html(mjml)
  const errors = conversion.errors
  if (errors.length > 0) {
    return errors
  }
  return conversion.html
}

const data = fs.readFileSync('./examples/index.mjml', 'utf8')

describe('mjml-list', () => {
  beforeAll(() => {
    registerComponent(MjList)
    registerComponent(MjLi)
  })

  it('should include the class on the opening tag', () => {
    expect(toHtml(data)).toContain(
      'class="mj-column-px-NaN mj-outlook-group-fix list"'
    )
  })

  it('should include the a11y role list', () => {
    expect(toHtml(data)).toContain('role="list"')
  })

  it('should include the a11y role presentation', () => {
    expect(toHtml(data)).toContain('<tbody role="presentation">')
  })
})

describe('mjml-li', () => {
  beforeAll(() => {
    registerComponent(MjList)
    registerComponent(MjLi)
  })

  it('should include the class list-item', () => {
    expect(toHtml(data)).toContain('class="list-item"')
  })

  it('should include the class list-item__text', () => {
    expect(toHtml(data)).toContain('class="list-item"')
  })

  it('should include the a11y role list-item', () => {
    expect(toHtml(data)).toContain('role="list-item"')
  })
})
