import React, { createContext, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar'
import AppBar from './components/AppBar'
import Main from './components/Main'
import TopRated from './components/TopRated'
import FindLawyers from './components/FindLawyers'
import LegalAnswer from './components/LegalAnswer'
import LegalServices from './components/LegalServices'
import LawGuides from './components/LawGuides'
import Brand from './components/Brand'
import Client from './components/Client';
import About from './components/About';
import Footer from './components/Footer';
import SidebarRND from './components/SidebarRND';
import SinglePage from './components/SinglePage';
import UserSignUp from './components/UserSignUp';
import IndianKanoon from './components/IndianKanoon';
import TalkToLawyer from './components/TalkToLawyer';
import UpdateProfile from './components/UpdateProfile';
import ResultNotFound from './components/ResultNotFound';
import Login from './components/Login';
import Logout from './components/Logout';
// import { Context } from "./components/context/Context";
import { INITIAL_STATE, Reducer } from "./components/context/Reducer"


export const UserContext = createContext();
const Routing = () => {
  return (<>
    <Routes>
      <Route exact path="/signup" element={[<TopBar />, <AppBar />, <UserSignUp />]} />
    </Routes>
    <Routes>
      <Route exact path="/login" element={[<TopBar />, <AppBar />, <Login />]} />
    </Routes>
    <Routes>
      <Route exact path="/logout" element={[<TopBar />, <AppBar />, <Logout />]} />
    </Routes>
    <Routes>
      <Route path="/signup/:id" element={[<TopBar />, <AppBar />, <UpdateProfile />]} />
    </Routes>
    <Routes>
      <Route target="_blank" exact path="/indiankanoon" element={[<TopBar />, <AppBar />, <IndianKanoon />]} />
    </Routes>
    <Routes>
      <Route target="_blank" exact path="/talktolawyer" element={[<TopBar />, <AppBar />, <TalkToLawyer />]} />
    </Routes>

    <Routes>
      <Route exact path="/lawyers/search" element={[<TopBar />, <AppBar />,
        <SidebarRND />]} />
    </Routes>
    <Routes>
      <Route exact path="/not_found" element={[
        <TopBar />, <AppBar />, <ResultNotFound />]} />
    </Routes>
  </>
  )
};

const App = () => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
  return (<>
    <UserContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/" element={[<TopBar />, <AppBar />, <Main />, <LegalAnswer />, <TopRated />, <FindLawyers />, <Brand />, <Client />, <About />, <Footer />]} />
      </Routes>
      <Routing />
    </UserContext.Provider>
  </>
  )
};

export default App;
