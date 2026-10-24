import { defineConfig, presetWind3 } from 'unocss';
import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

export default defineConfig({
  presets: [presetWind3(), presetOpenNavo()]
});
