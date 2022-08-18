import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import Admin from '../page/admin'
import AddProblem from '../page/admin/addProblem'
import AdminLogin from '../page/admin/adminLogin'
import ManageAlgo from '../page/admin/manageAlgo'
import ManageCss from '../page/admin/manageCss'
import Algorithm from '../page/algorithm'
import Arena from '../page/arena'
import Login from '../page/login'
import AlgorithmLogin from '../page/login/algorithm'
import Start from '../page/start'
import StartAlgorithm from '../page/start/startAlgorithm'
import LocalStorageUtils from '../util/LocalStorageUtils'

const Switch = () => {
  const user = LocalStorageUtils.getUser()
  const privateRoutes = [
    {
      path: '/css',
      element: <Start />,
    },
    {
      path: '/algorithm',
      element: <StartAlgorithm />,
    },
    { path: '/algorithm/start', element: <Algorithm /> },
  ]
  const arenaRoutes = [{ path: '/arena', element: <Arena /> }]
  const publicRoutes = [
    { path: '/login/css', element: <Login /> },
    { path: '/login/admin', element: <AdminLogin /> },
    { path: '/login/algorithm', element: <AlgorithmLogin /> },
  ]

  const adminRoutes = [
    { path: '/admin', element: <Admin /> },
    { path: '/admin/manageProblem', element: <AddProblem /> },
    { path: '/admin/manageAlgo', element: <ManageAlgo /> },
    { path: '/admin/manageCss', element: <ManageCss /> },
  ]

  const RenderPublicRoutes = () => {
    return !user || user?.sub.name.length <= 0 ? (
      <Outlet />
    ) : user?.sub.userData.role === 'admin' ? (
      <Navigate to="/admin" replace />
    ) : (
      <Navigate to="/" replace />
    )
  }

  const RenderPrivateRoutes = () => {
    return user && user?.sub.name.length >= 0 ? <Outlet /> : <Navigate to="/login/css" replace />
  }
  const RenderArenaRoutes = () => {
    if (user && user?.sub.name.length >= 0) {
      return <Outlet />
    } else {
      return <Navigate to="/" replace />
    }
  }

  const RenderAdminRoutes = () => {
    return user?.sub.userData.role === 'admin' ? <Outlet /> : <Navigate to="/css" replace />
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

      <Route element={<RenderArenaRoutes />}>
        {arenaRoutes.map((route, idx) => (
          <Route path={route.path} element={route.element} key={idx}></Route>
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/css" replace />}></Route>
    </Routes>
  )
}

export default Switch
