import LocalStorageUtils from '../../util/LocalStorageUtils'

const signOut = () => {
  LocalStorageUtils.deleteUser()
  LocalStorageUtils.removeItem('role')
  return (window.location = '/login')
}

export default signOut
