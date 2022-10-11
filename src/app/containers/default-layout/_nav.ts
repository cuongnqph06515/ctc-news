import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Role',
    url: '/role',
    iconComponent: { name: 'cil-puzzle' },
    // children: [
    //   {
    //     name: 'Accordion',
    //     url: '/base/accordion'
    //   },
    // ]
  },
  {
    name: 'Sender',
    url: '/sender',
    iconComponent: { name: 'cil-puzzle' }
  },
  {
    name: 'Category',
    url: '/category',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Product',
    url: '/product',
    iconComponent: { name: 'cil-puzzle' }
  },
  {
    name: 'User',
    url: '/user',
    iconComponent: { name: 'cil-speedometer' }
  }
  
];
