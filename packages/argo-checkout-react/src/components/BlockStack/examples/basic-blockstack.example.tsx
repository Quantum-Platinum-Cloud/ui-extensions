import {render, BlockStack, View} from '@shopify/argo-checkout-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return (
    <BlockStack>
      <View border="base" padding="base">
        View
      </View>
      <View border="base" padding="base">
        View
      </View>
      <View border="base" padding="base">
        View
      </View>
    </BlockStack>
  );
}