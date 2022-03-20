import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WrapperPosts from '../../components/WrapperPosts'
import * as S from './styles'
import { getCategories, getPostByCategorieId } from '../../services/blog'
import Loading from '../../components/Loading'

const Dashboard = ({ navigation }) => {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getData = async () => {
			setLoading(true)
			const response = await getCategories()
			if(response.data) {
				// console.log(`responsinn`, response)
				const arrayPosts = await Promise.all(response.data.map(async item => {
					const result = await getPostByCategorieId(item.id)
					const object = {
						categorieId: item.id,
						nameCategorie: item.name,
						posts: result
					}
					return object
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
