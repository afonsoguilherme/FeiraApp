import React from 'react';
import { TouchableOpacity, Text, StatusBar } from 'react-native';
import { useSelector } from 'react-redux'
import { colors } from '~/styles/colors'
import { Container, EmptyMessage, LogoutBtnText } from './style'
import { useDispatch } from 'react-redux'
import { clearCurrentUser } from '~/store/ducks/user'
import ProductItem from './productItem'


export default function ProductsPage({ navigation }) {
	const dispatch = useDispatch()
	const listOfProducts = useSelector(state => state.products)

	function logout() {
		navigation.replace('Login')

		dispatch(clearCurrentUser())
	}

	return (
		<Container>
			<StatusBar
				barStyle="light-content"
				backgroundColor={colors.salmon}
			/>

			<Container>
				{listOfProducts.length === 0 ? <EmptyMessage>Não existem produtos!</EmptyMessage> : listOfProducts.map((product, index) => <ProductItem key={index} item={product} />)}
			</Container>

			<TouchableOpacity onPress={logout}>
				<LogoutBtnText>Sair</LogoutBtnText>
			</TouchableOpacity>
		</Container>
	);
}
