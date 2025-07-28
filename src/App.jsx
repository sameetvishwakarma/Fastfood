// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./component/Header.jsx";
// import Body from "./component/Body.jsx";
// import Menu from "./component/Menu.jsx";
import Footer from "./component/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
      {/* <Menu /> */}
      <Footer />
    </>
  );
}

export default App;
