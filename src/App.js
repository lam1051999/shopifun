import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Phones from "./components/data/Phones";
import Laptops from "./components/data/Laptops";
import Watches from "./components/data/Watches";
import Accessories from "./components/data/Accessories";
import Cameras from "./components/data/Cameras";
import Sports from "./components/data/Sports";
import AllProducts from "./components/data/AllProducts";
import Footer from "./components/footer/Footer";
import ReviewItem from "./components/data/ReviewItem";
import Cart from "./components/PurchasedItems/Cart";
import Bought from "./components/PurchasedItems/Bought";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import SearchResult from "./components/healper/searchField/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <main style={{ backgroundColor: "#f5f5f5", minHeight: "100%" }}>
        <main style={{ paddingBottom: "20px" }}>
          <Header />
          <Switch>
            <Route exact path="/tranlam.shop" component={AllProducts} />
            <Route path="/phones" component={Phones} />
            <Route path="/laptops" component={Laptops} />
            <Route path="/watches" component={Watches} />
            <Route path="/accessories" component={Accessories} />
            <Route path="/cameras" component={Cameras} />
            <Route path="/sports" component={Sports} />
            <Route path="/searchresult/:keyword" component={SearchResult} />
            <Route path="/cart" component={Cart} />
            <Route path="/bought" component={Bought} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/product/:id" component={ReviewItem} />
          </Switch>
        </main>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
