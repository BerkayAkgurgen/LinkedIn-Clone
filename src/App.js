import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/Header";
import { selectUser } from "./features/userSlice";
import "./styles/App.scss";
import { login, logout } from "./features/userSlice";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Home from "./components/home/Home";
import LoginFooter from "./components/login/LoginFooter";
import RedirectLoad from "./components/RedirectLoad";
import { auth } from "./firebase/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [preLoad, setPreLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreLoad(false);
    }, 800);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth && isMounted) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else if (!userAuth && isMounted) {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Router basename="/">
      <div className="app">
        {preLoad ? (
          <RedirectLoad />
        ) : (
          <Switch>
            <Route exact path="/login">
              <Login />
              <LoginFooter />
              <Redirect from="/login" to={!user ? "/login" : "/home"} />
            </Route>
            <Route exact path="/home">
              <Header />
              <Home />
              <Redirect from="/home" to={!user ? "/login" : "/home"} />
            </Route>
            <Route exact path="/register">
              <Register />
              <LoginFooter />
              <Redirect from="/register" to={!user ? "/register" : "/home"} />
            </Route>
            <Route>
              <Redirect exact from="/" to={user ? "/home" : "/login"} />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
