import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import Admin from '../page/admin'
import AddProblem from '../page/admin/addProblem'
import AdminLogin from '../page/admin/adminLogin'
import RoundFour from '../page/admin/roundFour'
import RoundOne from '../page/admin/roundOne'
import RoundThree from '../page/admin/roundThree'
import RoundTwo from '../page/admin/roundTwo'
import Login from '../page/login'
import Start from '../page/start'
import LocalStorageUtils from '../util/LocalStorageUtils'

const Switch = () => {
  const value = LocalStorageUtils.getItem('alegale')
  const user = LocalStorageUtils.getUser()
  const privateRoutes = [
    {
      path: '/',
      element: <Start />,
    },
  ]

  const publicRoutes = [
    { path: '/login', element: <Login /> },
    { path: '/login/admin', element: <AdminLogin /> },
  ]

  const adminRoutes = [
    { path: '/admin', element: <Admin /> },
    { path: '/admin/roundOne', element: <RoundOne /> },
    { path: '/admin/roundTwo', element: <RoundTwo /> },
    { path: '/admin/roundThree', element: <RoundThree /> },
    { path: '/admin/roundFour', element: <RoundFour /> },
    { path: '/admin/manageProblem', element: <AddProblem /> },
  ]

  const RenderPublicRoutes = () => {
    return !user || user.sub.name?.length <= 0 ? (
      <Outlet />
    ) : value === 'h4w4VjKcv6mEYkTeWquwH2Cn' ? (
      <Navigate to="/admin" replace />
    ) : (
      <Navigate to="/" replace />
    )
  }

  const RenderPrivateRoutes = () => {
    return user && user.sub.name?.length >= 0 ? <Outlet /> : <Navigate to="/login" replace />
  }

  const RenderAdminRoutes = () => {
    return value === 'h4w4VjKcv6mEYkTeWquwH2Cn' ? <Outlet /> : <Navigate to="/" replace />
  }

  return (
    <Routes>
      <Route element={<RenderAdminRoutes />}>
        {adminRoutes.map((route, idx) => (
          <Route path={route.path} element={route.element} key={idx}></Route>
        ))}
      </Route>
      <Route element={<RenderPrivateRoutes />}>
        {privateRoutes.map((route, idx) => (
          <Route path={route.path} element={route.element} key={idx}></Route>
        ))}
      </Route>
      <Route element={<RenderPublicRoutes />}>
        {publicRoutes.map((route, idx) => (
          <Route path={route.path} element={route.element} key={idx}></Route>
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
  )
}

export default Switch
