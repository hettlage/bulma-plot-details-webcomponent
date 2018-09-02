import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bulmaplot',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
