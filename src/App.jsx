import Home from "./pages/webPages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/screens/NotFound";
import Login from "./pages/webPages/Login";
import Signup from "./pages/webPages/Signup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import WebTemplate from "./components/template/WebTemplate";
import DashboardTemplate from "./components/template/DashboardTemplate";
import Dashboard from "./pages/dashboardPages/Dashboard";
import Profile from "./pages/dashboardPages/Profile";
// import Blank from "./components/screens/Blank";
import Auctions from "./pages/dashboardPages/Auctions";
// import AuctionItem from "./pages/dashboardPages/AuctionItem";
import MyAuctions from "./pages/dashboardPages/MyAuctions";
import CreateAuction from "./pages/dashboardPages/CreateAuction";
import MyBids from "./pages/dashboardPages/MyBids";
import AuctionItemComp from "./pages/dashboardPages/AuctionItemComp";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      console.log("user:", localStorage.getItem("user"));
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <Router>
      <main className="mx-auto flex min-h-screen flex-col">
        <div className="">
          <Routes>
            {/* / */}
            <Route
              exact
              path="/"
              element={
                <WebTemplate frame={<Home />} user={user} setUser={setUser} />
              }
            ></Route>
            {/* /home */}
            <Route
              exact
              path="/home"
              element={
                <WebTemplate frame={<Home />} user={user} setUser={setUser} />
              }
            ></Route>
            {/* /login */}
            <Route
              exact
              path="/login"
              element={
                <WebTemplate
                  frame={<Login user={user} setUser={setUser} />}
                  user={user}
                  setUser={setUser}
                />
              }
            ></Route>
            {/* /signup */}
            <Route
              exact
              path="/signup"
              element={
                <WebTemplate
                  frame={<Signup user={user} setUser={setUser} />}
                  user={user}
                  setUser={setUser}
                />
              }
            ></Route>
            {/* /dashboard */}
            <Route
              exact
              path="/dashboard"
              element={
                <DashboardTemplate
                  user={user}
                  setUser={setUser}
                  title={"Dashboard"}
                  frame={<Dashboard />}
                />
              }
            ></Route>
            {/* Profile */}
            <Route
              exact
              path="/profile"
              element={
                <DashboardTemplate
                  user={user}
                  setUser={setUser}
                  title={"Profile"}
                  frame={<Profile user={user} setUser={setUser} />}
                />
              }
            ></Route>
            {/* Auctions */}
            <Route
              exact
              path="/auctions"
              element={
                <DashboardTemplate
                  user={user}
                  setUser={setUser}
                  title={"Auctions"}
                  frame={<Auctions />}
                />
              }
            ></Route>
            {/* Auctions by id */}
            <Route
              exact
              path="/auction/:id"
              element={
                <DashboardTemplate
                  user={user}
                  setUser={setUser}
                  title={"Auctions"}
                  frame={<AuctionItemComp />}
                />
              }
            ></Route>
            {/* My Auctions */}
            <Route
              exact
              path="/myauctions"
              element={
                <DashboardTemplate
                  user={user}
                  setUser={setUser}
                  title={"My Auctions"}
                  frame={<MyAuctions />}
                />
              }
            ></Route>
            {/* My Bids */}
            <Route
              exact
              path="/mybids"
              element={
                <DashboardTemplate
                  user={user}
                  setUser={setUser}
                  title={"My Bids"}
                  frame={<MyBids />}
                />
              }
            ></Route>
            {/* Create Auctions */}
            <Route
              exact
              path="/create-auction"
              element={
                <DashboardTemplate
                  user={user}
                  setUser={setUser}
                  title={"Create New Auction"}
                  frame={<CreateAuction />}
                />
              }
            ></Route>

            {/* <Route exact path="/home/:id" element={<Home />}></Route> */}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
