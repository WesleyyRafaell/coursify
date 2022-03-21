import React from 'react'
import * as S from './styles'
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

const HZ_MARGIN = 10;

const Post = ({ navigation, postId, title, content }) => {
	const { width } = useWindowDimensions();

	const source = {
		html: content
	};

	return (
		<S.Container>
			<S.Image
				source={{
					uri: 'https://media.discordapp.net/attachments/855429663677087805/955068683523354665/landing-page-blog-1.jpg'
				}}
			/>
			<S.Main>
				<S.Title>{title.length > 55 ? `${title.substring(0, 55)} ...` : title}</S.Title>
				<S.ContainerContent>
					<RenderHtml
						contentWidth={width}
						source={source}
					/>
				</S.ContainerContent>
				<S.Button onPress={() => navigation.navigate('DetailPost', {id: postId})}>
					<S.TextButton>Leia mais</S.TextButton>
				</S.Button>
			</S.Main>
		</S.Container>
	)
}

export default Post
