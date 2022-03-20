import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
	margin-top: ${RFValue(43)}px;
`

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const Title = styled.Text`
	max-width: ${RFValue(250)}px;
	color: #2ab598;
	font-size: ${RFValue(22)}px;
	text-transform: uppercase;
	font-weight: bold;
`

export const Button = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`

export const TextButton = styled.Text`
	font-size: ${RFValue(17)}px;
	text-transform: uppercase;
	color: #535353;
	margin-right: ${RFValue(10)}px;
`

export const ContainerPosts = styled.ScrollView`
	padding-top: ${RFValue(28)}px;
`
