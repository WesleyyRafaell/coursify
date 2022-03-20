import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
	flex: 1;
	background-color: #ffffff;
`

export const Main = styled.ScrollView`
	margin-top: ${RFValue(46)}px;
`

export const BoxContent = styled.ScrollView`
	padding: 0 ${RFValue(26)}px;
`

export const Title = styled.Text`
	color: #2ab598;
	font-size: ${RFValue(24)}px;
	font-weight: bold;
	line-height: ${RFValue(34)}px;
`

export const Text = styled.Text`
	margin-top: ${RFValue(25)}px;
	line-height: ${RFValue(26)}px;
`
