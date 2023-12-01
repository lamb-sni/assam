import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from '@/pages/menu'
import ZeroOne from '@/pages/zero-one'

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/menu" element={<Menu />} />
      <Route path="zero-one" element={<ZeroOne />} />
    </Routes>
  )
}

export default RoutesList
