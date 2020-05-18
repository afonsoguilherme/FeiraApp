import React, { useEffect, useState } from 'react';
import { Animated, Text, StatusBar } from 'react-native';
import { isEmpty } from 'lodash'
import { useSelector } from 'react-redux'
import { colors } from '~/styles/colors'
import { Background, Title } from './styles'
import Logo from '~/assets/images/logo.png';

export default function SplashScreen({ navigation }) {
	const currentUser = useSelector(state => state.user.currentUser)

	const [width] = useState(new Animated.Value(0));
	const [height] = useState(new Animated.Value(0));
	
	useEffect(() => {
		Animated.timing(width, { toValue: 250, duration: 1500, useNativeDriver: false }).start();
		Animated.timing(height, { toValue: 150, duration: 1500, useNativeDriver: false }).start();

		setTimeout(() => {
			isEmpty(currentUser.username) ? navigation.replace('Login') : navigation.replace('Home', { screen: 'RegisterProduct' })
		}, 2200);
	})

	return (
		<Background>
			<StatusBar
				barStyle="light-content"
				backgroundColor={colors.salmon}
			/>

			<Animated.Image
				source={Logo}
				style={{ width, height }}

			/>
		</Background>
	);
}
