import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from '@/pages/menu'

// zero-one
import ZeroOne from '@/pages/zero-one'
import ThreeZeroOne from '@/pages/zero-one/301'

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/menu" element={<Menu />} />

      {/* zero-one */}
      <Route path="zero-one" element={<ZeroOne />} />
      <Route path="301" element={<ThreeZeroOne />} />
    </Routes>
  )
}

export default RoutesList
