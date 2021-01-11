// REACT
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// COMPONENTS
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import SignPage from "./pages/sign-page/sign-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

// STYLES
import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  // DO THIS WHEN COMPONENT IS MOUNTED
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // STORE USER FROM DATABASE TO OUR STATE
      if (userAuth) {
        // CHECK IF THE DATABASE UPDATED WITH NEW DATA

        // check if there's data, if not, create user from userAuth.data()
        const userRef = await createUserProfileDocument(userAuth);

        //if there is data, retrieve snapshot
        userRef.onSnapshot((userSnapShot) => {
          setCurrentUser({
            id: userSnapShot.id,
            ...userSnapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  // DO THIS WHEN COMPONENT IS DESTROYED
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() => {
              return this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignPage />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

// we need state, hence using this
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

// we need a function, hence using this
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
