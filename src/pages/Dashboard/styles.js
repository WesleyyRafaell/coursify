import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
	flex: 1;
	background-color: #ffffff;
`

export const Main = styled.ScrollView``

export const ContainerPosts = styled.ScrollView`
	padding: 0 ${RFValue(15)}px;
`

export const Text = styled.Text`
	color: red;
`
