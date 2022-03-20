import React from 'react'
import * as S from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import Post from '../Post'

const WrapperPosts = ({ navigation, title }) => {
	return (
		<S.Container>
			<S.Header>
				<S.Title>{title}</S.Title>
				<S.Button>
					<S.TextButton>Ver mais</S.TextButton>
					<Icon name="send" size={15} color="#535353" />
				</S.Button>
			</S.Header>
			<S.ContainerPosts horizontal showsHorizontalScrollIndicator={false}>
				<Post title={title } navigation={navigation} />
				<Post navigation={navigation} />
				<Post navigation={navigation} />
				<Post navigation={navigation} />
				<Post navigation={navigation} />
			</S.ContainerPosts>
		</S.Container>
	)
}

export default WrapperPosts
