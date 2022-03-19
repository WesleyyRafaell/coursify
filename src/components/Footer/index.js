import React from 'react'
import * as S from './styles'

import LogoWhite from '../../assets/images/logo-white.png'

const Footer = () => {
	return (
		<S.Container>
			<S.LogoFooter source={LogoWhite} />
			<S.Text>
				O Coursify.me é uma plataforma de ensino a distância, onde qualquer
				pessoa ou empresa pode construir seu EAD e vender cursos pela internet.
			</S.Text>
			<S.Button>
				<S.Text>Quero conhecer a plataforma!</S.Text>
			</S.Button>
		</S.Container>
	)
}

export default Footer
