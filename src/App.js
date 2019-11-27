import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom";

import login from "./assets/1.svg"
import main from "./assets/2.svg"

const appStyle = {
  maxWidth: 360,
  margin: "64px auto"
}

const pageStyle = {
  minHeight: 640,
  background: "#FDFFFC",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: 8,
  width: "100%",
}

const imgStyle = {
  maxWidth: 500
}

const pageVariants = {
  exit: {
    opacity: 0,
    scale: 0.8,
  },
  enter: {
    opacity: 1,
    scale: 1,
  }
}

function App() {
  return (
    <div style={appStyle}>
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Login} />
                <Route exact path="/main" component={Main} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
}



const Login = () => (
  <motion.div 
    initial="exit"
    animate="enter"
    exit="exit"
    variants={pageVariants}
    style={pageStyle} 
  >
    <img style={imgStyle} src={login} alt="1" />
    <Link to="/main">
      To Main
    </Link>
  </motion.div>
)

const Main = () => (
  <motion.div 
    initial="exit"
    animate="enter"
    exit="exit"
    variants={pageVariants}
    style={pageStyle} 
  >
    <img style={imgStyle} src={main} alt="2" />
    <Link to="/">
      To Login
    </Link>
  </motion.div>
)

export default App
