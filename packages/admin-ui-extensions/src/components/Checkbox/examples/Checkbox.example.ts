import {extend, ExtensionPoint, Checkbox} from '@shopify/admin-ui-extensions';

extend('Playground', (root) => {
  const checkbox = root.createComponent(Checkbox, {
    label: 'Opt in to something cool',
    checked: true,
    onChange: () => console.log('Checked'),
  });

  root.appendChild(checkbox);

  root.mount();
});
