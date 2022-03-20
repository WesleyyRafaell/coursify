import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WrapperPosts from '../../components/WrapperPosts'
import * as S from './styles'

const Dashboard = () => {
	return (
		<S.Container>
			<Header />
			<S.Main showsVerticalScrollIndicator={false}>
				<S.ContainerPosts>
					<WrapperPosts />
					<WrapperPosts />
				</S.ContainerPosts>
				<Footer />
			</S.Main>
		</S.Container>
	)
}

export default Dashboard
