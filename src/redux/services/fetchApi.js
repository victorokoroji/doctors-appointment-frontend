const post = async (url, data) => {
	const config = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}

	try {
		const response = await fetch(url, config)
		const datas = await response.json()
		return datas
	} catch (err) {
		return err
	}
}

const get = async url => {
	const config = {
		method: 'GET',
		headers: authHeader(url),
	}
	try {
		const response = await fetch(url, config)
		const datas = await response.json()
		return datas
	} catch (err) {
		return err
	}
}

const _delete = async (url, data) => {
	const config = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			...authHeader(url),
		},
		body: JSON.stringify(data),
	}

	try {
		const response = await fetch(url, config)
		const datas = await response.json()
		return datas
	} catch (err) {
		return err
	}
}

const put = async (url, data) => {
	const config = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			...authHeader(url),
		},
		body: JSON.stringify(data),
	}

	try {
		const response = await fetch(url, config)
		const datas = await response.json()
		return datas
	} catch (err) {
		return err
	}
}

export const fetchApi = {
	post,
	get,
	_delete,
	put,
}
