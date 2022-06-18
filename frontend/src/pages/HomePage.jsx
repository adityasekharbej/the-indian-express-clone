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
      <FlexWrapper>
        <div>
          <TopComponents />
          <Home />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/india" element={<India />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/entertainment" element={<Entertainment />} />
          </Routes>
        </div>
        <div>
          <Blog />
          <Best />
        </div>
      </FlexWrapper>
      <Footer />
      {/* <Ticker /> */}
    </>
  );
}

export default HomePage;
