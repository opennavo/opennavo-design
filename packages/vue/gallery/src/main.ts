import { createApp } from 'vue';
import '@unocss/reset/tailwind.css';
import '@fontsource-variable/inter/opsz.css';
import '@opennavo/design-tokens/tokens.css';
import '../../src/styles/base.css';
import 'virtual:uno.css';
import galleryIcons from 'virtual:gallery-icons';
import { createOnUi, registerIcons } from '../../src';
import App from './App.vue';
import { locale } from './state';

// Icons beyond the bundled set, registered before mounting as an app would register its own subset.
registerIcons(galleryIcons);

createApp(App).use(createOnUi({ locale })).mount('#app');
