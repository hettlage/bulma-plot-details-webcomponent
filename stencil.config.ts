import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'plotdetails',
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
