import styled from 'styled-components/native';

import { colors } from '~/styles/colors'
import { fontSize } from '~/styles/font'
import { metrics } from '~/styles/metrics'

export const Wrapper = styled.View`
	flexDirection: column;
	alignItems: center;
	borderColor: ${colors.secundary};
	borderRadius: 20px;
	borderWidth: 1px;
	width: 140px;
	padding: ${metrics.smallSpacing}px;
	marginBottom: ${metrics.baseSpacing / 2}px;
`;

export const TextCode = styled.Text`
	color: ${colors.black};
	fontSize: ${fontSize.small}px;
	fontFamily: 'sans-serif-thin';
`;

export const TextDescription = styled.Text`
	color: ${colors.secundary};
	fontSize: ${fontSize.wide}px;
	fontFamily: 'sans-serif-thin';
`;
