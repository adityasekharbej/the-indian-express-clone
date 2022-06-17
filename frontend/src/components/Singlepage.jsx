import React from 'react';
import { Fragment } from 'react';
import Data from "../cities.json"
import styles from "./singlePage.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
    faInstagram,
    faReddit
  
} from "@fortawesome/free-brands-svg-icons";
import Ticcker from './Ticker';
function Singlepage(props) {
    return (
        <Fragment>
        <div className={styles.container}>
          <br />
          <div className={styles.headnews}>
            <div className={styles.breakingti}>Must Read</div>
            <div className={styles.breakingbox}><Ticcker/></div>
          </div>
            <div><h1 className={styles.heading} >{Data[0].heading}</h1></div>
            <div><h2 className={styles.sub_heading}>{Data[0].subHeading}</h2></div>
            <hr />
            <div className={styles.editor}>
                <div>
              <span>By:<a style={{ fontWeight: 'bold' }}>{Data[0].author }</a> |</span>
                    <p>{Data[0].date}</p>
                    </div>
                    <div className={styles.social}>
             <div class="social-container">
      <a href=""
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
                        </div>
                        <div class="social-container">
      <a href=""
        className="facebook social">
        <FontAwesomeIcon icon={faTwitter} size="3x" color='lightblue' />
      </a>
                    </div>
                    <div class="social-container">
                        
      <a href=""
        className="reddit social">
        <FontAwesomeIcon icon={faReddit} size="3x" />
      </a>
                        </div>
                        </div>
                    
                    
            </div>
            <div><img src={Data[0].img} alt="" className={styles.mainimg} /></div>
            <span className={styles.imgSrc}>{Data[0].imgSrc}</span>
            <hr />
            
          <p className={styles.maincontent}>{Data[0].description}</p>

          <br />
          <br />
          <p className={styles.maincontent}>{Data[0].description}</p>
          
          <br>
          </br>
          <div className={styles.newssection}>
            <div className={styles.newsform}>
              <img src="https://media-central.indianexpress.com/static/subscription/images/ie-widget-image.png" alt="mail logo" height="50" width="50"></img>
              <p className={styles.formtitle}>Subscribe to receive the day's headlines from The Indian Express straight in your inbox</p>
              
                <input  type={"text"} value="" className={styles.input} placeholder="enter your email"/>
                <input  type={"submit"} value={"Subscribe"} style={{ background: "#e41a2d" }} className={styles.inputsubmit}></input>
        
            </div>

          </div>
        </div>
        
            </Fragment>

    );
}

export default Singlepage;