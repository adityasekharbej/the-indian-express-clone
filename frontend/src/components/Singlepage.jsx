/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Fragment } from "react";
import styles from "./singlePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
// import Ticcker from "./Ticker";
import { useSelector } from "react-redux";

function Singlepage() {
  const news = useSelector((state) => state.news);
  console.log(news);
  return (
    <Fragment>
      <div className={styles.container}>
        <br />
        <div className={styles.headnews}>
          <div className={styles.breakingti}>Must Read</div>

          <div className={styles.breakingbox}>{/* <Ticcker /> */}</div>
        </div>
        <div style={{ marginBottom: "-25px" }}>
          <h1 className={styles.heading}>{news.heading}</h1>
        </div>
        <div style={{ marginBottom: "-10px" }}>
          <h2 className={styles.sub_heading}>{news.subHeading}</h2>
        </div>
        <hr />
        <div className={styles.editor}>
          <div>
            <span>
              By:
              <a
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline black",
                }}
              >
                {news.author}
              </a>{" "}
              |
            </span>
            <p>{news.date}</p>
          </div>
          <div className={styles.social}>
            <div class={styles.socialdivf}>
              <a href="" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="3x" color="white" />
              </a>
            </div>
            <div className={styles.socialdivt}>
              <a href="" className="facebook social">
                <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
              </a>
            </div>
            <div className={styles.socialdivr}>
              <a href="" className="reddit social">
                <FontAwesomeIcon icon={faReddit} size="2x" color="white" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={news.img} alt="" className={styles.mainimg} />
        </div>
        <span className={styles.imgSrc}>{news.imgSrc}</span>
        <hr />

        <p className={styles.maincontent}>{news.description}</p>

        <br />
        <br />
        <p className={styles.maincontent}>{news.description}</p>

        <br></br>
        <div className={styles.newssection}>
          <div className={styles.newsform}>
            <img
              src="https://media-central.indianexpress.com/static/subscription/images/ie-widget-image.png"
              alt="mail logo"
              height="50"
              width="50"
            ></img>
            <p className={styles.formtitle}>
              Subscribe to receive the day's headlines from The Indian Express
              straight in your inbox
            </p>

            <input
              type={"text"}
              value=""
              className={styles.input}
              placeholder="enter your email"
            />
            <input
              type={"submit"}
              value={"Subscribe"}
              style={{ background: "#e41a2d" }}
              className={styles.inputsubmit}
            ></input>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Singlepage;
