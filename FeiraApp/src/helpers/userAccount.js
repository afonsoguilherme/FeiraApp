import { useSelector } from 'react-redux'

export function isAdmin () {
	const currentUser = useSelector(state => state.user.currentUser)

	return currentUser.username === 'admin'
}
