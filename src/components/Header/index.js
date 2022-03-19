import React from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as S from './styles'

import logoImage from '../../assets/images/logo.png'

const Header = ({ back }) => {
	return (
		<S.Container>
			{back ? (
				<S.ButtonBack>
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
		</S.Container>
	)
}

export default Header
