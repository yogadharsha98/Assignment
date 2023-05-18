import { Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import AddTicket from "./components/AddTicket";
import Tickets from "./components/Ticket/Tickets";
import Login from "./components/Login";

function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add' element={<AddTicket />} exact />
          <Route path='/tickets' element={<Tickets />} exact />
          <Route path='/login' element={<Login />} exact />
        </Routes>
      </main>
      
    </Fragment>
  );
}

export default App;
