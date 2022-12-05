import { Route, Routes } from 'react-router-dom'
import { RegisterUser } from './pages/RegisterUser'

export function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/register" element={<RegisterUser />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}
