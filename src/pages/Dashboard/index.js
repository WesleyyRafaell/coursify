import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WrapperPosts from '../../components/WrapperPosts'
import * as S from './styles'
import { getCategories } from '../../services/blog'
import Loading from '../../components/Loading'

const Dashboard = ({ navigation }) => {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getData = async () => {
			setLoading(true)
			const response = await getCategories()
			if(response.data) {
				// console.log(`responsinn`, response)
				setCategories(response.data)
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
							{categories.length > 0 && (
								<>
									{categories.map(item => (
										<WrapperPosts key={item.id} title={item.name} navigation={navigation} />
									))}
								</>
							)}
							<WrapperPosts navigation={navigation} />
						</S.ContainerPosts>
						<Footer />
					</S.Main>
				)}
		</S.Container>
	)
}

export default Dashboard
