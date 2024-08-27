import { create } from '@storybook/theming/create'
import logoUrl from './logo.svg'

export default create({
  base: 'dark',
  brandTitle: 'Excelsior Angular',
  brandUrl: 'https://excelsior-angular.accentio.dev',
  brandImage: logoUrl,
  brandTarget: '_self',
  fontBase: '"Inter", sans-serif',
})
