import LocalStorageUtils from '../../util/LocalStorageUtils'

const signOut = () => {
  LocalStorageUtils.deleteUser()
  return (window.location = '/login')
}

export default signOut
