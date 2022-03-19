import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
	background-color: #1abc9c;
	/* height: 222px; */
	height: ${RFValue(310)}px;
	margin-top: ${RFValue(71)}px;
	padding-top: ${RFValue(19)}px;
	padding-bottom: ${RFValue(24)}px;
	align-items: center;
`
export const LogoFooter = styled.Image`
	margin-bottom: ${RFValue(11)}px;
`

export const Text = styled.Text`
	color: #ffffff;
	font-size: ${RFValue(12)}px;
	width: ${RFValue(290)}px;
	text-align: center;
`
export const Button = styled.TouchableOpacity`
	width: ${RFValue(216)}px;
	height: ${RFValue(44)}px;
	justify-content: center;
	align-items: center;
	border-radius: ${RFValue(60)}px;
	margin-top: ${RFValue(28)}px;
	background-color: #ffa900;
`
