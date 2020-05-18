import React from 'react';
import { TouchableOpacity, Text, StatusBar } from 'react-native';
import { useSelector } from 'react-redux'
import { colors } from '~/styles/colors'
import { Container, TextTotal, ListWrapper } from './style'
import { useDispatch } from 'react-redux'
import CartItem from './cartItem'


export default function ShoppingCartPage({ navigation }) {
	const dispatch = useDispatch()
	const listOfProducts = useSelector(state => state.shoppingCart.listOfProducts)

	function setCountItensMessage() {
		if (listOfProducts.length > 0) return `Você tem ${listOfProducts.length} itens no carrinho.`
		else return 'Seu carrinho esta vazio.'
	}

	return (
		<>
			<StatusBar
				barStyle="light-content"
				backgroundColor={colors.salmon}
			/>
	
			<Container>
				<TextTotal>{ setCountItensMessage() }</TextTotal>

				<ListWrapper>
					{ listOfProducts.map(item => <CartItem item={item} />) }
				</ListWrapper>
			</Container>
		</>
	);
}
