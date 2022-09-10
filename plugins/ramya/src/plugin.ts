import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const ramyaPlugin = createPlugin({
  id: 'ramya',
  routes: {
    root: rootRouteRef,
  },
});

export const RamyaPage = ramyaPlugin.provide(
  createRoutableExtension({
    name: 'RamyaPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
