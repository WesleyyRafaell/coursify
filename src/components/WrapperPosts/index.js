import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import Post from '../Post'
import * as S from './styles'

const WrapperPosts = ({ navigation, title, posts }) => {
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
				{posts.length > 0 && (
					<>
						{posts.map(item => (
							<Post
								key={item.id}
								postId={item.id}
								mediaId={item.featured_media}
								title={item.title.rendered}
								content={item.excerpt.rendered}
								navigation={navigation}
							/>
						))}
					</>
				)}
			</S.ContainerPosts>
		</S.Container>
	)
}

export default WrapperPosts
