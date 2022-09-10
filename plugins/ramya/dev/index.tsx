import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { ramyaPlugin, RamyaPage } from '../src/plugin';

createDevApp()
  .registerPlugin(ramyaPlugin)
  .addPage({
    element: <RamyaPage />,
    title: 'Root Page',
    path: '/ramya'
  })
  .render();
