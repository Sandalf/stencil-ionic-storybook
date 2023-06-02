import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-ionic-storybook',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
  ],
};
