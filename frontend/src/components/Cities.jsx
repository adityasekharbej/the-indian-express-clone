import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/action";
import { News } from "./News";

export const Cities = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://indianexpresscloneunit.herokuapp.com/news/cities")
      .then((d) => d.json())
      .then((d) => dispatch(getData(d.data)))
      .catch((e) => console.log(e));
  }, [dispatch]);

  return (
    <div>
      <News />
    </div>
  );
};
