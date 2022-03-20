import React from 'react'
import * as S from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import Post from '../Post'

const WrapperPosts = () => {
	return (
		<S.Container>
			<S.Header>
				<S.Title>Cursos online</S.Title>
				<S.Button>
					<S.TextButton>Ver mais</S.TextButton>
					<Icon name="send" size={15} color="#535353" />
				</S.Button>
			</S.Header>
			<S.ContainerPosts horizontal showsHorizontalScrollIndicator={false}>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</S.ContainerPosts>
		</S.Container>
	)
}

export default WrapperPosts
