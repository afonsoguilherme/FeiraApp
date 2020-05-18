import React, { useState } from 'react';
import { showMessage, } from 'react-native-flash-message';
import { View, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '~/styles/colors'
import { Background, Title, Input, FormWrapper, SubmitButtonText, GuestButtonText } from './style'
import { authentication } from '~/services/user'
import { setCurrentUser } from '~/store/ducks/user'
import { useDispatch } from 'react-redux'


export default function LoginPage({ navigation }) {
	const dispatch = useDispatch()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	function handleSubmit () {
		authentication(username, password)
			.then((result) => {
				dispatch(setCurrentUser(result))

				navigation.replace('Home', { screen: 'Products' })
			})
			.catch((err) => {
				showMessage({
					message: 'Usuário ou senha incorretos!',
					type: 'danger',
					icon: 'danger'
				});
			});
	}

	function submitAsGuest () {
		let guestData = {"displayName": "Visitante", "username": "guest"}

		dispatch(setCurrentUser(guestData))

		navigation.replace('Home', { screen: 'Products' })
	}

	return (
		<Background>
			<StatusBar
				barStyle="light-content"
				backgroundColor={colors.salmon}
			/>

			<Title>Feira App</Title>
			
			<FormWrapper>
				<Input placeholder="usuario" onChangeText={val => setUsername(val)} />

				<Input placeholder="senha" onChangeText={val => setPassword(val)}  secureTextEntry={true} />
			</FormWrapper>

			<TouchableOpacity onPress={handleSubmit}>
				<SubmitButtonText>Inserir produtos</SubmitButtonText>
			</TouchableOpacity>

			<TouchableOpacity>
				<GuestButtonText onPress={submitAsGuest}>COMPRAR</GuestButtonText>
			</TouchableOpacity>
		</Background>
	);
}
