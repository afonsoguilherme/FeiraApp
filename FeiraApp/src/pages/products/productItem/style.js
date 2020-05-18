import styled from 'styled-components/native';

import { colors } from '~/styles/colors'
import { fontSize } from '~/styles/font'
import { metrics } from '~/styles/metrics'

export const Wrapper = styled.View`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-between;
	backgroundColor: ${colors.clear};
	width: ${metrics.screenWidth}px;
	padding: ${metrics.baseSpacing}px;
	marginBottom: ${metrics.baseSpacing / 2}px;
`;

export const TextCode = styled.Text`
	color: ${colors.black};
	fontSize: ${fontSize.small}px;
	fontFamily: 'sans-serif';
`;

export const TextDescription = styled.Text`
	color: ${colors.black};
	fontSize: ${fontSize.wide}px;
	fontFamily: 'sans-serif-thin';
`;
