import React from 'react'

import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import Login from '../page/login'
import Start from '../page/start'
import LocalStorageUtils from '../util/LocalStorageUtils'

const Switch = () => {
  const user = LocalStorageUtils.getUser()
  const privateRoutes = [
    {
      path: '/',
      element: <Start />,
    },
    {
      path: '/admin',
      // element: <Admin />,
    },
  ]

  const publicRoutes = [{ path: '/login', element: <Login /> }]

  const RenderPublicRoutes = () => {
    return <Outlet />
    // return !user || user.id?.length <= 0 ? <Outlet /> : <Navigate to="/" replace />;
  }

  const RenderPrivateRoutes = () => {
    return <Outlet />
    // return user && user.id?.length >= 0 ? <Outlet /> : <Navigate to="/login" replace />;
  }

  return (
    <Routes>
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
