import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { VideoProvider } from "../contexts/VideoContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import TutorialHome from "./TutorialHome"
function App() {
  return (
    <Container
    // className="d-flex align-items-center justify-content-center"
    // style={{ minHeight: "100vh" }}
    >
      {/* <div className="w-100" style={{ maxWidth: "800px" }}> */}
      <Router>
        <AuthProvider>
          <VideoProvider>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/" component={TutorialHome} />

            </Switch>
          </VideoProvider>
        </AuthProvider>
      </Router>
      {/* </div> */}
    </Container>
  )
}

export default App
