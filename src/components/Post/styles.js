import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
	overflow: hidden;
	width: ${RFValue(235)}px;
	border: 1px solid #0000001f;
	border-radius: ${RFValue(12)}px;
	margin-right: ${RFValue(38)}px;
`

export const Image = styled.Image`
	width: ${RFValue(235)}px;
	height: ${RFValue(103)}px;
	border-top-left-radius: ${RFValue(12)}px;
	border-top-right-radius: ${RFValue(12)}px;
`

export const Main = styled.View`
	padding: 0 ${RFValue(10)}px ${RFValue(35)}px ${RFValue(10)}px;
`

export const ContainerImage = styled.View`
	padding-top: ${RFValue(10)}px;
`

export const ContainerContent = styled.View`
	height: ${RFValue(110)}px;
`

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.lightGreen};
	font-size: ${RFValue(17)}px;
	font-weight: bold;
	margin-top: ${RFValue(15)}px;
	margin-bottom: ${RFValue(16)}px;
	line-height: ${RFValue(25)}px;
`

export const Text = styled.Text`
	color: ${({ theme }) => theme.colors.gray};
	font-size: ${RFValue(15)}px;
`

export const Button = styled.TouchableOpacity``

export const TextButton = styled.Text`
	color: ${({ theme }) => theme.colors.orange};
	font-size: ${RFValue(16)}px;
	font-weight: bold;
	margin-top: ${RFValue(15)}px;
`
