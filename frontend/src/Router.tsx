import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { RegisterUser } from './pages/RegisterUser'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegisterUser />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}
