import AppLayout from "./layout/AppLayout"
import Landing from "./pages/Landing"
import Settings from "./pages/Settings"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="landing" />} />
          <Route path="landing" element={<Landing />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App
