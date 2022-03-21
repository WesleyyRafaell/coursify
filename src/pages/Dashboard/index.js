import React, { useEffect, useState } from 'react'

import { getCategories, getPostByCategorieId } from '../../services/blog'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WrapperPosts from '../../components/WrapperPosts'
import Loading from '../../components/Loading'
import * as S from './styles'

const Dashboard = ({ navigation }) => {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getData = async () => {
			setLoading(true)
			const response = await getCategories()
			if(response.data) {
				const arrayPosts = await Promise.all(response.data.map(async item => {
					const posts = await getPostByCategorieId(item.id)

					return {
						categorieId: item.id,
						nameCategorie: item.name,
						posts
					}
				}))

				setPosts(arrayPosts)
				setLoading(false)
			}
		}

		getData()
	}, [])


	return (
		<S.Container>
			<Header navigation={navigation} />
				{loading ? (
					<Loading />
				) : (
					<S.Main showsVerticalScrollIndicator={false}>
						<S.ContainerPosts>
							{posts.length > 0 && (
								<>
									{posts.map(item => (
										<WrapperPosts key={item.categorieId} title={item.nameCategorie} posts={item.posts.data} navigation={navigation} />
									))}
								</>
							)}
						</S.ContainerPosts>
						<Footer />
					</S.Main>
				)}
		</S.Container>
	)
}

export default Dashboard
