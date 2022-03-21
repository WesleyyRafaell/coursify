import React, { useEffect, useState } from 'react'
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { getPostById } from '../../services/blog'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
import * as S from './styles'

const DetailPost = ({ route, navigation }) => {
	const { id } = route.params;
	const { width } = useWindowDimensions();
	const [loading, setLoading] = useState(false)
	const [post, setPost] = useState({title: '', content: ''})


	useEffect(() => {
		const getData = async () => {
			setLoading(true)
			const result = await getPostById(id)
			if(result){
				setPost({title: result.data.title.rendered, content: result.data.content.rendered})
				setLoading(false)
			}
		}

		getData()
	}, [])

	const source = {
		html: post.content
	};

	return (
		<S.Container>
			<Header back navigation={navigation} />
			{loading ? (
				<Loading />
			) : (
				<S.Main>
					<S.BoxContent>
						<S.Title>
							{post.title}
						</S.Title>
						<RenderHtml
							contentWidth={width}
							source={source}
						/>
					</S.BoxContent>
					<Footer />
				</S.Main>
			)}
		</S.Container>
	)
}

export default DetailPost
