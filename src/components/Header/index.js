import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import DropShadow from 'react-native-drop-shadow'
import * as S from './styles'

import logoImage from '../../assets/images/logo.png'

const Header = ({ back, navigation }) => {
	return (
		<S.Container>
			<S.Wrapper>
				{back ? (
					<S.ButtonBack onPress={() => navigation.goBack()}>
						<Icon name="arrow-back-outline" size={25} color="#000" />
					</S.ButtonBack>
				) : (
					<Text />
				)}
				<S.ContainerLogo>
					<S.Logo source={logoImage} />
				</S.ContainerLogo>
				<S.ButtonMenu>
					<Icon name="menu" size={25} color="#fff" />
				</S.ButtonMenu>
			</S.Wrapper>
			<DropShadow style={styles.shadowProp}>
				<S.Border></S.Border>
			</DropShadow>
		</S.Container>
	)
}

const styles = StyleSheet.create({
	shadowProp: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.0,

		elevation: 1
	}
})

export default Header
