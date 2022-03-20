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
