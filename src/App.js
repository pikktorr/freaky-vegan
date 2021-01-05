// REACT
import React from "react";
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import SignPage from "./pages/sign-page/sign-page.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// STYLES
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  // DO THIS WHEN COMPONENT IS MOUNTED
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // STORE USER FROM DATABASE TO OUR STATE
      if (userAuth) {
        // CHECK IF THE DATABASE UPDATED WITH NEW DATA

        // check if there's data, if not, create user from userAuth.data()
        const userRef = await createUserProfileDocument(userAuth);

        //if there is data, retrieve snapshot
        userRef.onSnapshot((userSnapShot) => {
          this.setState({
            currentUser: {
              id: userSnapShot.id,
              ...userSnapShot.data(), //displayName: "one collider", email: "collider.one@gmail.com"
            },
          });

          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
