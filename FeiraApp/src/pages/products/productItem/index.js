import React from 'react';
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native';
import { colors } from '~/styles/colors'
import { Wrapper, TextCode, TextDescription } from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isAdmin } from '~/helpers/userAccount'
import { addProductInCart } from '~/store/ducks/shoppingCart'

export default function ProductItem(props) {
	const dispatch = useDispatch();

	function handleAddProductInCart() {
		dispatch(addProductInCart(props.item));
	}

	return (
		<Wrapper>

			<TextDescription>{ props.item.description }</TextDescription>
			
			<TextCode>R$ { props.item.productValue }</TextCode>

			{ !isAdmin() ?
				<TouchableOpacity onPress={handleAddProductInCart}>
					<Ionicons name='ios-add-circle-outline' size={25} color={colors.secundary} />
				</TouchableOpacity> :
				null
			}
		</Wrapper>
	);
}
