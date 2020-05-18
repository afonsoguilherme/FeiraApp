import styled from 'styled-components/native';
import { colors } from '~/styles/colors'
import { fontSize } from '~/styles/font'

export const Background = styled.View`
  flex: 1;
  backgroundColor: ${colors.salmon};
  justifyContent: center;
  alignItems: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
	fontSize: ${fontSize.wide}px;
`;