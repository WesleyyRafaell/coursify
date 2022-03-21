import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker'

import { getCategories, getPostByCategorieId } from '../../services/blog'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WrapperPosts from '../../components/WrapperPosts'
import Loading from '../../components/Loading'
import * as S from './styles'

const Dashboard = ({ navigation }) => {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(false)
	const [selectSort, setSelectSort] = useState()

	useEffect(() => {
		const getData = async () => {
			setLoading(true)
			const response = await getCategories()
			if (response.data) {
				const arrayPosts = await Promise.all(
					response.data.map(async (item) => {
						const posts = await getPostByCategorieId(item.id)

						return {
							categorieId: item.id,
							nameCategorie: item.name,
							posts,
							totalCategoryView: calculateTotalViews(posts.data)
						}
					})
				)

				setPosts(arrayPosts)
				setLoading(false)
			}
		}

		getData()
	}, [])

	const calculateTotalViews = (array) => {
		const postViews = array.map((item) => item.page_views)
		const total = postViews.reduce(
			(previousValue, currentValue) => previousValue + currentValue,
			0
		)
		return total
	}

	const handleSort = (itemValue) => {
		setSelectSort(itemValue)

		const acceptedFilters = {
			default: SortDefault,
			asc: SortByAsc,
			desc: SortByDesc,
			moreViews: SortByMoreViews,
			lessViews: SortByLessViews
		}

		const arrayOrder = acceptedFilters[itemValue]
		setPosts(arrayOrder)
	}

	const SortDefault = () => {
		const filter = posts.sort(function (a, b) {
			return a.nameCategorie < b.nameCategorie
				? -1
				: a.nameCategorie > b.nameCategorie
				? 1
				: 0
		})
		return filter
	}

	const SortByAsc = () => {
		const filter = posts.sort(function (a, b) {
			return a.nameCategorie < b.nameCategorie
				? -1
				: a.nameCategorie > b.nameCategorie
				? 1
				: 0
		})
		return filter
	}

	const SortByDesc = () => {
		const filter = posts.sort(function (a, b) {
			return a.nameCategorie > b.nameCategorie
				? -1
				: a.nameCategorie < b.nameCategorie
				? 1
				: 0
		})
		return filter
	}

	const SortByMoreViews = () => {
		const filter = posts.sort(function (a, b) {
			return a.totalCategoryView > b.totalCategoryView
				? -1
				: a.totalCategoryView < b.totalCategoryView
				? 1
				: 0
		})
		return filter
	}

	const SortByLessViews = () => {
		const filter = posts.sort(function (a, b) {
			return a.totalCategoryView < b.totalCategoryView
				? -1
				: a.totalCategoryView > b.totalCategoryView
				? 1
				: 0
		})
		return filter
	}

	return (
		<S.Container>
			<Header navigation={navigation} />
			{loading ? (
				<Loading />
			) : (
				<S.Main showsVerticalScrollIndicator={false}>
					<S.ContainerPosts>
						<S.ContainerSort>
							<S.Title>Ordenar por:</S.Title>
							<S.ContainerPicker>
								<Picker
									selectedValue={selectSort}
									onValueChange={(itemValue) => handleSort(itemValue)}
									style={{ fontSize: 10 }}
								>
									<Picker.Item label="Padrão" value="default" />
									<Picker.Item label="A-Z" value="asc" />
									<Picker.Item label="Z-A" value="desc" />
									<Picker.Item label="Mais visualizados" value="moreViews" />
									<Picker.Item label="Menos visualizados" value="lessViews" />
								</Picker>
							</S.ContainerPicker>
						</S.ContainerSort>
						{posts.length > 0 && (
							<>
								{posts.map((item) => (
									<WrapperPosts
										key={item.categorieId}
										title={item.nameCategorie}
										posts={item.posts.data}
										navigation={navigation}
									/>
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
