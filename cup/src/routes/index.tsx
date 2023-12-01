import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from '@/pages/menu'

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/menu" element={<Menu />} />
    </Routes>
  )
}

export default RoutesList
