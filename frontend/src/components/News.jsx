import React from "react";
import { useSelector } from "react-redux";

export const News = () => {
  const data = useSelector((state) => state.data);

  return (
    <>
      {data
        ? data.map((e) => (
            <div key={e.id}>
              <div>
                <img src={e.img} alt="" />
              </div>
              <div>
                <h3>{e.heading}</h3>
                <p>{e.date}</p>
                <p>{e.subHeading}</p>
              </div>
            </div>
          ))
        : ""}
    </>
  );
};
