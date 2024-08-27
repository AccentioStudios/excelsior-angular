import type { Preview } from '@storybook/angular'
import { setCompodocJson } from '@storybook/addon-docs/angular'
import docJson from '../documentation.json'
import { version } from '../package.json'
const [major, minor, patch, postfix] = version.split('.')

setCompodocJson(docJson)

const preview: Preview = {
  parameters: {
    version: {
      major,
      minor,
      patch,
      postfix,
      style: {
        color: '#fff',
        'font-size': '1rem',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
