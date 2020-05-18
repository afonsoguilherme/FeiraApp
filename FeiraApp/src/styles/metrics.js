import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const metrics = {
	smallSpacing: 7,
	baseSpacing: 20,
	doubleBaseSpacing: 40,
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	baseRadius: 10,
	roundRadius: 50,
	selectHeight: 48,
}
