import styled from "styled-components";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";

const TopDiv = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 13px;
  margin: 0;
  padding: 0;
  height: 30px;
  text-transform: uppercase;
  vertical-align: baseline;
  background-color: #dad8d9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;

  & p:first-child {
    border-top: 3px solid #ff0303;
    padding-top: 2px;
  }
`;

const Heading = styled.div`
  padding: 20px 20px 0;
  display: flex;
  justify-content: space-between;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
`;

const Icon = styled.div`
  display: flex;
  gap: 10px;

  & i {
    background-color: #1f1f1f;
    color: #efefef;
    font-size: 20px;
    padding: 8px 5px;
    width: 28px;
    border-radius: 50%;
  }
`;
const P = styled.p`
  text-align: left;
  padding-left: 5px;
`;
const SubDiv = styled.div`
  width: 20%;
`;
const BottomDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f1f1f;
  color: #fff;
  font-family: Roboto, "Fira Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 0 15px;
  & i {
    font-size: 25px;
    cursor: pointer;
  }
`;
const Category = styled.div`
  display: flex;
  gap: 5px;
  & p {
    cursor: pointer;
  }
  //   & p:hover {
  //     border-bottom: 4px solid #ff0303;
  //   }
`;

const Sub = styled.p`
  background-color: #ffc300;
  color: #000;
  width: 80px;
  border-radius: 15px;
`;

export const Header = ({ handleToggle }) => {
  const navigate = useNavigate();
  return (
    <div>
      <TopDiv>
        <p>English</p>
        <p>தமிழ்</p>
        <p>বাংলা</p>
        <p>മലയാളം</p>
        <p>हिंदी</p>
        <p>मराठी</p>
      </TopDiv>
      <Heading>
        <SubDiv>
          <div>
            <P>Follow Us:</P>
          </div>
          <Icon>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
          </Icon>
        </SubDiv>
        <div>
          <img
            onClick={() => navigate("/")}
            src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg"
            alt=""
            style={{ cursor: "pointer" }}
          />
          <p>Sunday, June 19, 2022</p>
        </div>
        <SubDiv></SubDiv>
      </Heading>

      <BottomDiv>
        <div>
          <i class="fa-solid fa-bars" onClick={handleToggle}></i>
        </div>
        <Category>
          <p onClick={() => navigate("/")}>Home</p>
          <p>Explained</p>
          <p>Political Pulse</p>
          <p onClick={() => navigate("/news/india")}>India</p>
          <p onClick={() => navigate("/cities")}>Cities</p>
          <p>Opinion</p>
          <p onClick={() => navigate("/entertainment")}>Entertainment</p>
          <p>Education</p>
          <p>Premium</p>
          <p>Sports</p>
          <p>Audio</p>
          <Sub>Subscribe</Sub>
          <p><Link to="login" target="open">Sign In</Link></p>
        </Category>
        <div>
          {/* <i class="fa-solid fa-magnifying-glass"></i> */}
          <Search />
        </div>
      </BottomDiv>
    </div>
  );
};
