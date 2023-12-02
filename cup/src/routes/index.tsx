import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from '@/pages/menu'

// zero-one
import ZeroOne from '@/pages/zero-one'
import ZeroOneGame from '@/pages/zero-one/game'
import ThreeZeroOne from '@/pages/zero-one/301'

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/menu" element={<Menu />} />

      {/* zero-one */}
      <Route path="/zero-one" element={<ZeroOne />} />
      <Route path="/zero-one/game" element={<ZeroOneGame />} />
      <Route path="/301" element={<ThreeZeroOne />} />
    </Routes>
  )
}

export default RoutesList
