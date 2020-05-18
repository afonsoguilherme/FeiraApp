import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import FlashMessage from "react-native-flash-message";

import Routes from './routes';

const App = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Routes />

			<FlashMessage position="top" duration={3000} />
		</PersistGate>
	</Provider>
);

export default App;