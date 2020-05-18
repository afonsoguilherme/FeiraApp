export const authentication = (username, password) => {
	return new Promise((resolve, reject) => {
		username === 'admin' && password === 'admin' ? resolve({ username: 'admin', displayName: 'Administrador' }) : reject(false)
	})
}
