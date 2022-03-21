import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.white};
`

export const Main = styled.ScrollView``

export const ContainerSort = styled.View`
	margin-top: ${RFValue(35)}px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.black};
	text-transform: uppercase;
	font-size: ${RFValue(17)}px;
`

export const ContainerPicker = styled.View`
	width: ${RFValue(165)}px;
	height: ${RFValue(46)}px;
	border-radius: ${RFValue(10)}px;
	border: 1px solid #e1e1e1;
	justify-content: center;
`

export const ContainerPosts = styled.ScrollView`
	padding: 0 ${RFValue(15)}px;
`
