import styled from "styled-components";
import Footer from "../components/Footer";
// import Ticker from "./components/Ticker";
import { Blog } from "../components/Blog";
import { Best } from "../components/Best";
import { Home } from "../components/Home";
import TopComponents from "../components/TopComponent";
import { Header } from "./../components/Header";
import { Route, Routes } from "react-router-dom";
import { India } from "./../components/India";
import { Cities } from "./../components/Cities";
import { Entertainment } from "./../components/Entertainment";
import { Login } from "./Login";
import { Register } from "./Register";
import Singlepage from "../components/Singlepage";
import Subscribe from './../components/Subscribe';
import Ticcker from "../components/Ticker";


const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2%;
  margin: auto;
  width: 70%;
  & > div:first-child {
    width: 70%;
  }

  & > div:last-child {
    width: 28%;
  }
`;

function HomePage({ handleToggle }) {
  return (
    <>
      <Header handleToggle={handleToggle} />
      <Routes>
        <Route
          path="/"
          element={
            <FlexWrapper>
              <div>
                <TopComponents />
                <Home />
              </div>
              <div>
                <Blog />
                <Best />
              </div>
            </FlexWrapper>
          }
        />
        <Route
          path="/news/india"
          element={
            <FlexWrapper>
              <div>
                <TopComponents />
                <India />
              </div>
              <div>
                <Blog />
                <Best />
              </div>
            </FlexWrapper>
          }
        />
        <Route
          path="/cities"
          element={
            <FlexWrapper>
              <div>
                <TopComponents />
                <Cities />
              </div>
              <div>
                <Blog />
                <Best />
              </div>
            </FlexWrapper>
          }
        />
        <Route
          path="/entertainment"
          element={
            <FlexWrapper>
              <div>
                <TopComponents />
                <Entertainment />
              </div>
              <div>
                <Blog />
                <Best />
              </div>
            </FlexWrapper>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article" element={<Singlepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default HomePage;
