import styled from 'styled-components/native';

import { colors } from '~/styles/colors'
import { fontSize } from '~/styles/font'
import { metrics } from '~/styles/metrics'

export const Background = styled.View`
  flex: 1;
  backgroundColor: ${colors.white};
  justifyContent: center;
  alignItems: center;
`;

export const Title = styled.Text`
	color: ${colors.black};
	fontSize: ${fontSize.wide}px;
	fontFamily: 'sans-serif-thin';
`;

export const FormWrapper = styled.View`
	margin: ${metrics.doubleBaseSpacing}px;
`;

export const Input = styled.TextInput`
	borderWidth: 1px;
	borderRadius: 20px;
	borderColor: ${colors.salmon};
	width: 220px;
	margin: ${metrics.smallSpacing}px;
	padding: ${metrics.smallSpacing}px;
`;

export const SubmitButtonText = styled.Text`
	color: ${colors.secundary};
	fontFamily: 'sans-serif-medium';
	fontSize: ${fontSize.wide}px;
`;
