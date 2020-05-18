import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from './styles/colors'
import { isAdmin } from '~/helpers/userAccount'
import { useSelector } from 'react-redux'

import LoginPage from '~/pages/login';
import ProductsPage from '~/pages/products';
import RegisterProductPage from '~/pages/registerProduct'
import ShoppingCartPage from '~/pages/shoppingCart'
import SplashScreen from '~/pages/splash';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Home() {
	const listOfProducts = useSelector(state => state.shoppingCart.listOfProducts)

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					let badgeCount;

					if (route.name === 'Produtos') iconName = 'md-list'
					if (route.name === 'Cadastro Produtos') iconName = 'md-create'
					if (route.name === 'Carrinho') {
						iconName = 'md-basket'
						badgeCount = listOfProducts.length
					}

					return <TabIcon name={iconName} badgeCount={badgeCount} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: colors.secundary,
				inactiveTintColor: colors.silver,
			}}
		>

			<Tab.Screen name="Produtos" component={ProductsPage} />
			{isAdmin() ? <Tab.Screen name="Cadastro Produtos" component={RegisterProductPage} /> : null}
			{!isAdmin() ? <Tab.Screen name="Carrinho" component={ShoppingCartPage} /> : null}
		</Tab.Navigator>
	);
}


export default function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Splash"
					component={SplashScreen}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name="Login"
					component={LoginPage}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}


function TabIcon({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}
