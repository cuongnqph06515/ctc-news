import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    children: [
      {
        name: 'Sender',
        url: '/sender',
      }
    ]
  },
  {
    name: 'Sender',
    url: '/sender',
    iconComponent: { name: 'cil-Share' }
  },
  {
    name: 'Category',
    url: '/category',
    iconComponent: { name: 'cil-PaperPlane' }
  },
  {
    name: 'Product',
    url: '/product',
    iconComponent: { name: 'cil-Star' }
  },
  {
    name: 'Hub',
    url: '/hub',
    iconComponent: { name: 'cil-Share' }
  },
  {
    name: 'User & Permission',
    title: true
  },
  {
    name: 'User',
    url: '/user',
    iconComponent: { name: 'cil-User' }
  },
  {
    name: 'Role',
    url: '/role',
    iconComponent: { name: 'cil-puzzle' },

  },
  
];
