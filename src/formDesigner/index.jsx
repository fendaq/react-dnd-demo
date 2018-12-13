import React from 'react';
import { Provider } from 'react-redux';
import FormDesigner from './components';
import store from './store';

function FormDesignerEntry(props) {
  return (
    <Provider store={store}>
      <FormDesigner {...props} />
    </Provider>
  );
}

export default FormDesignerEntry;
