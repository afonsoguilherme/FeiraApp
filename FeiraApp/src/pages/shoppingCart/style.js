import styled from 'styled-components/native';

import { colors } from '~/styles/colors'
import { fontSize } from '~/styles/font'
import { metrics } from '~/styles/metrics'

export const Container = styled.View`
  flex: 1;
  backgroundColor: ${colors.white};
  alignItems: center;
`;

export const TextTotal = styled.Text`
	color: ${colors.white};
	padding: ${metrics.baseSpacing}px;
	fontSize: ${fontSize.medium}px;
	fontFamily: 'sans-serif';
	backgroundColor: ${colors.salmon};
	textAlign: center;
	width: ${metrics.screenWidth}px;
`;

export const ListWrapper = styled.View`
	justifyContent: space-around;
	flexWrap: wrap;
	padding: ${metrics.baseSpacing}px;
	flexDirection: row;
	flex: 1;
`;
