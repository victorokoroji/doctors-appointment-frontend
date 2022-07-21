import { fetchApi } from './fetchApi'
import {
	BASE_URL,
	SIGNUP_URL,
	LOGIN_URL,
	CREATE_DOCTOR,
	GET_DOCTORS,
	GET_DOCTOR,
	DELETE_DOCTOR,
	CREATE_APPOINTMENT,
	GET_APPOINTMENTS,
	GET_APPOINTMENT,
	DELETE_APPOINTMENT,
	LOGOUT
} from './rooEndpoints'

const register = async params => {
	const result = await fetchApi.post(`${BASE_URL}/${SIGNUP_URL}`, params)

		return result
}


const login = async params => {
	const result = await fetchApi.post(`${BASE_URL}/${LOGIN_URL}`, params)

	const container = document.querySelector('.login-success')

	if (result.code === 200) {
		container.style.display = 'block'
		localStorage.setItem('jwt-token', result.accessToken)

		setTimeout(() => {
			window.location.assign('/users.html')
			container.style.display = 'none'
		}, 2000)
	}

	if (result.code === 401) {
		const error = document.querySelector('.login-error')
		error.style.display = 'flex'
		error.textContent = 'Please enter correct login details'
		setTimeout(() => {
			error.style.display = 'none'
		}, 5000)
	}

	if (result.code === 403) {
		container.style.display = 'block'
		container.innerHTML = 'Kindly verify your email'
		setTimeout(() => {
			container.style.display = 'none'
		}, 3000)
	}

	return result
}

const adminLogin = async params => {
	const result = await fetchApi.post(`${BASE_URL}/${ADMIN_LOGIN_URL}`, params)

	const container = document.querySelector('.login-success')

	if (result.code === 200) {
		container.style.display = 'block'
		localStorage.setItem('jwt-token', result.accessToken)

		setTimeout(() => {
			window.location.assign('/dashboard.html')
			container.style.display = 'none'
		}, 5000)
	}

	if (result.code === 401) {
		const error = document.querySelector('.login-error')
		error.style.display = 'flex'
		error.textContent = 'Please enter correct login details'
		setTimeout(() => {
			error.style.display = 'none'
		}, 5000)
	}

	if (result.code === 403) {
		container.style.display = 'block'
		container.innerHTML = 'Kindly verify your email'
		setTimeout(() => {
			container.style.display = 'none'
		}, 5000)
	}
	return result
}

const forgotPassword = async params => {
	await fetchApi.post(`${BASE_URL}/${RESET_PASSWORD_URL}`, params)
}

const createStory = async params => {
	await fetchApi.post(`${BASE_URL}/${CREATE_STORY}`, params)
}

const updateDraft = async (params, id) => {
	await fetchApi.put(`${BASE_URL}/${UPDATE_DRAFT}/${id}`, params)
}

const publishStory = async params => {
	await fetchApi.post(`${BASE_URL}/${PUBLISH_STORY}`, params)
}

const getAllStoriesAdmin = async () => {
	const dataObj = await fetchApi.get(`${BASE_URL}/${GET_STORIES_ADMIN}`)
	const datas = await dataObj.data
	return datas
}

const getAllStoriesPublic = async () => {
	const dataObj = await fetchApi.get(`${BASE_URL}/${GET_STORIES_PUBLIC}`)
	const datas = await dataObj.data
	return datas
}

const manageStory = async params => {
	await fetchApi.post(`${BASE_URL}/${MANAGE_STORY}`, params)
}

const postBookmarkedStories = async id => {
	await fetchApi.post(`${BASE_URL}/${BOOKMARK_STORY}/${id}`)
}

const getBookmarkedStories = async () => {
	const dataObj = await fetchApi.get(`${BASE_URL}/${GET_BOOKMARKED_STORIES}`)
	const datas = await dataObj.data
	return datas
}

const getAuthorStories = async () => {
	const token = localStorage.getItem('jwt-token')
	const decoded = jwt_decode(token)

	const dataObj = await fetchApi.get(`${BASE_URL}/${GET_STORIES_ADMIN}/${decoded.id}`)
	const datas = await dataObj.data
	return datas
}

const getStory = async id => {
	const dataObj = await fetchApi.get(`${BASE_URL}/${GET_STORY}/${id}`)
	const datas = await dataObj.data
	return datas
}

const deleteStory = async id => {
	await fetchApi._delete(`${BASE_URL}/${DELETE_STORY}/${id}`)
}

const updateProfile = async params => {
	const token = localStorage.getItem('jwt-token')
	const decoded = jwt_decode(token)
	const result = await fetchApi.post(`${BASE_URL}/${UPDATE_PROFILE}/${decoded.id}`, params)
	return result
}

const getUser = async () => {
	const token = localStorage.getItem('jwt-token')
	const decoded = jwt_decode(token)

	const datas = await fetchApi.get(`${BASE_URL}/${GET_USER}/${decoded.id}`)
	return datas
}

const logout = async () => {
	await fetchApi.post(`${BASE_URL}/${LOGOUT}`)
}

export const userServices = {
	register,
	adminRegister,
	login,
	adminLogin,
	forgotPassword,
	createStory,
	updateDraft,
	publishStory,
	getAllStoriesAdmin,
	getAllStoriesPublic,
	manageStory,
	postBookmarkedStories,
	getBookmarkedStories,
	getAuthorStories,
	deleteStory,
	getUser,
	getStory,
	updateProfile,
	logout,
}
