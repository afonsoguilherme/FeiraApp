import styled from 'styled-components/native';

import { colors } from '~/styles/colors'
import { fontSize } from '~/styles/font'
import { metrics } from '~/styles/metrics'

export const Container = styled.View`
  flex: 1;
  backgroundColor: ${colors.white};
  alignItems: center;
`;

export const EmptyMessage = styled.Text`
	color: ${colors.secundary};
	fontSize: ${fontSize.wide}px;
	fontFamily: 'sans-serif-thin';
	paddingVertical: ${metrics.screenHeight / 3}px;
`;

export const LogoutBtnText = styled.Text`
	color: ${colors.secundary};
	fontSize: ${fontSize.wide}px;
	fontFamily: 'sans-serif-medium';
	marginBottom: ${metrics.doubleBaseSpacing}px;
`;
