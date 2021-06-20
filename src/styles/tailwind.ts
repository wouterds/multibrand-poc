import { create } from 'tailwind-rn';
import { activeBrand, Brand } from 'utils/branding';

import baseConfig from './config/base.json';
import defaultConfig from './config/default.json';
import telenetConfig from './config/telenet.json';
import vrtConfig from './config/vrt.json';

export const { tailwind, getColor } = create({
  ...baseConfig,
  ...defaultConfig,
  ...(activeBrand === Brand.Telenet ? telenetConfig : {}),
  ...(activeBrand === Brand.VRT ? vrtConfig : {}),
});
