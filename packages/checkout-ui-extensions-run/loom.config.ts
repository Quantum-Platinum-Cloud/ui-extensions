import {createPackage} from '@shopify/loom';

import {defaultProjectPlugin} from '../../config/loom';

export default createPackage((pkg) => {
  pkg.entry({root: './src/index.ts'});
  pkg.binary({name: 'checkout-ui-extensions-run', root: './src/index.ts'});
  pkg.use(defaultProjectPlugin());
});