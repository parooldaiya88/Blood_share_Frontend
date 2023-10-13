import { useContext } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/pages/Home.jsx";
import Login from "./Components/pages/Login.jsx";
import RegistrationForm from "./Components/pages/Registration.jsx";
import ProtectPage from "./Components/ProtectPage.jsx";
import Navigation from "./Components/pages/Navbar.jsx";
import Spinner from "./Components/Spinner.jsx";
import Profile from "./Components/pages/Profile/Profile.jsx";
import { DataContext } from "./reducer/context.js";
import ContactPage from "./Components/pages/ContactPage.jsx";
//  import Footer from "./Components/pages/Footer.jsx";
import Appointment from "./Components/Appointment";
import AboutPage from "./Components/pages/AboutPage";
import ForgetPasswordComponent from "./Components/pages/ForgetPasswordComponent.jsx";
import ResetPasswordComponent from "./Components/pages/ResetPasswordComponent.jsx";

function App() {
  const { loaderState } = useContext(DataContext);
  const location = useLocation();

  const isProfilePage = location.pathname === "/profile";
  return (
    <div>
      {loaderState.loading && <Spinner />}

      {!isProfilePage && <Navigation />}
      {/* {!isProfilePage && <Footer />} */}

      <div>
        <Routes>
          <Route
            path='/profile'
            element={
              <ProtectPage>
                <Profile />
              </ProtectPage>
            }
          />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgetPasswordComponent/>} />
          <Route path='/reset-password/:id/:token' element={<ResetPasswordComponent />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/contactpage' element={<ContactPage />} />
          <Route path='/appointment' element={<Appointment />} />
          
        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
