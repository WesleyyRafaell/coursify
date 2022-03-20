import api from './api'

export const getCategories = async () => {
	try {
		const response = await api.get('categories')
		if (response) {
			return response
		}
	} catch (error) {
		console.log('error', error)
	}
}

export const getPostByCategorieId = async (id) => {
	try {
		const response = await api.get(`posts?categories=${id}&per_page=5`)
		if (response) {
			return response
		}
	} catch (error) {
		console.log('error', error)
	}
}

export const getPostById = async (id) => {
	try {
		const response = await api.get(`posts/${id}`)
		if (response) {
			return response
		}
	} catch (error) {
		console.log('error', error)
	}
}

