import React, { useEffect, useState } from 'react'
import { ActivityIndicator, useWindowDimensions } from "react-native";
import RenderHtml from 'react-native-render-html';

import { getMediaPost } from '../../services/blog';
import * as S from './styles'

const Post = ({ navigation, postId, mediaId, title, content }) => {
	const [image, setImage] = useState('')
	const [loading, setLoading] = useState(true)
	const { width } = useWindowDimensions();

	useEffect(() => {
		const getData = async () => {
			setLoading(true)
			const result = await getMediaPost(mediaId)
			if(result) {
				setImage(result.data.guid.rendered)
				setLoading(false)
			}
		}

		getData()
	}, [])

	const source = {
		html: content
	};

	return (
		<S.Container>
			{loading ? (
				<S.ContainerImage>
					<ActivityIndicator size="large" color="#3CC6AA" />
				</S.ContainerImage>
			) : (
				<S.Image
					source={{
						uri: image
					}}
				/>
			)}
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
