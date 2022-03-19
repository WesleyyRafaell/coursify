import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	padding: ${RFValue(14)}px ${RFValue(17)}px;
`
export const ButtonBack = styled.TouchableOpacity`
	margin-right: ${RFValue(17)}px;
`

export const ContainerLogo = styled.View`
	flex: 1;
`
export const Logo = styled.Image`
	width: ${RFValue(169)}px;
	height: ${RFValue(50)}px;
`

export const ButtonMenu = styled.TouchableOpacity`
	background-color: #3cc6aa;
	width: ${RFValue(37)}px;
	height: ${RFValue(37)}px;
	border-radius: ${RFValue(37)}px;
	justify-content: center;
	align-items: center;
`
