import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  width: 300px;
  text-align: left;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid #c4c4c4;
  padding: 10px;
  margin-bottom: 20px;

  & > div {
    border-bottom: 1px solid #c4c4c4;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
    padding: 0 0 10px;
    margin: 0 0 10px;
    max-height: 100px;

    & p {
      padding: 0;
      margin: 0;
      border-left: 4px solid #a32020;
      padding-left: 5px;
      cursor: pointer;
    }
    & p:last-child {
        padding-top: 12px;
        font-size: 10px;
        color: #7a7a7a;    
    }
    & p:first-child:hover{
        color: #3385d0;
    }
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  font-weight: 600;
  font-family: "Fira Sans", sans-serif;
  & p:nth-child(2) {
    color: #a32020;
  }
  & i {
    font-size: 10px;
    color: #a32020;
  }
`;

export const Blog = () => {
  let blg = [
    {
      title:
        "IND vs SA 4th T20 Live Score Updates: Ruturaj Gaikwad, Ishan Kishan start for India",
      time: "13 minutes ago",
    },
    {
      title:
        "Russia Ukraine War News Live Updates: EU Commission backs Ukraine's candidacy status, Zelenskyy says first step towards membership",
      time: "35 minutes ago",
    },
    {
      title:
        "Agnipath Protests Live Updates: One dead, trains torched as stir intensifies in several states",
      time: "1 hour ago",
    },
    {
      title:
        "Delhi Live News Updates: ED conducts raids in money laundering case against Satyendar Jain",
      time: "2 hour ago",
    },
  ];

  return (
    <Outer>
      <Head>
        <i class="fa-solid fa-circle"></i>
        <p>LIVE</p>
        <p>BLOG</p>
      </Head>
      <Wrapper>
        {blg.map((el) => (
          <div>
            <p>{el.title}</p>
            <p>{el.time}</p>
          </div>
        ))}
      </Wrapper>
    </Outer>
  );
};
