import React from 'react'
import styles from './footer.module.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaAndroid,
  FaApple
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={styles.GrandFather}>
        <div className={styles.father}>
          
          <h3 className={styles.rgh3}>TOP CATEGORIES</h3>
          <div className={styles.rghr}></div>
          <div className={styles.acfooter}>
            <div>
                <ul className={styles.rgul}>
                    <li><a href="#">Explained News</a></li>
                    <li><a href="#">Delhi News</a></li>
                    <li><a href="#">Health News</a></li>
                </ul>
            </div>
            <div>
                <ul className={styles.rgul}>
                    <li><a href="#">Political Pulse</a></li>
                    <li><a href="#">Pune News</a></li>
                    <li><a href="#">India News</a></li>
                </ul>
            </div>
            <div>
                <ul className={styles.rgul}>
                    <li><a href="#">Latest Openion</a></li>
                    <li><a href="#">Bangalore News</a></li>
                    <li><a href="#">Sports News</a></li>
                </ul>
            </div>
            <div>
                <ul className={styles.rgul}>
                    <li><a href="#">Mumbai News</a></li>
                    <li><a href="#">Bollywood News</a></li>
                    <li><a href="#">Lifestyle News</a></li>
                </ul>
            </div>
          </div>

          <h3 className={styles.rgh3}>TRENDING NEWS</h3>
          <div className={styles.rghr}></div>
          <div className={styles.rgfooter}>
            <div>
                <ul className={styles.rgul}>
                    <li><a href="#">Horoscope</a></li>
                    <li><a href="#">Dance Classes For Kids</a></li>
                    <li><a href="#">Buy-All-Access Pass</a></li>
                    <li><a href="#">KK Funeral Live</a></li>
                </ul>
            </div>
            <div>
                <ul className={styles.rgul}>
                    <li><a href="#">Indian News</a></li>
                    <li><a href="#">Entertainment News</a></li>
                    <li><a href="#">Suscribe to the Indian Express</a></li>
                    <li><a href="#">Bengaluru News Live</a></li>
                </ul>
            </div>
            <div>
                <ul className={styles.rgul}>
                    <li><a href="#">Art & Craft Classes For Kids</a></li>
                    <li><a href="#">UPSC News</a></li>
                    <li><a href="#">Buy Digital Premium</a></li>
                    <li><a href="#">Mumbai News Live</a></li>
                </ul>
            </div>
            <div>
                <ul className={styles.rgul}>
                    <li><a href="#">Fitness Classes For Kids</a></li>
                    <li><a href="#">IPL 2022 News</a></li>
                    <li><a href="#">Buy Indian Express E-paper</a></li>
                    <li><a href="#">Chennai News Live</a></li>
                </ul>
            </div>
          </div>

          <h3 className={styles.rgh3}>LATEST STORIES</h3>
          <div className={styles.rghr}></div>
          <div className={styles.rgfooter}>
            <div>
                <ul className={styles.rgul}>
                    <li><a href="#">Naresh Patel Likely To Decide On Joining Politics At Thursday Meet</a></li>
                    <li><a href="#">Agnipath Scheme: Army Veterans Point Out Flaws, Make Suggestions</a></li>
                </ul>
            </div>
            <div>
                <ul className={styles.rgul}>
                    <li><a href="#">Watch: Brutal Bairstow Smashes England To Series Win Over New Zealand</a></li>
                    <li><a href="#">Agnipath Scheme: Capt Amarinder, Cong CMs Question Logic, Intention</a></li>
                </ul>
            </div>
            <div>
                <ul className={styles.rgul}>
                    <li><a href="#">Covid-19: Gujarat Records 165 New Cases, Ahmedabad City Reports Highest Numbers Since Feb</a></li>
                    <li><a href="#">The Flying Dutchman: Eight Years Since ‘That’ Robin Van Persie World Cup Goal Vs Spain</a></li>
                </ul>
            </div>
            <div>
                <ul className={styles.rgul}>
                    <li><a href="#">June 15,1982, Forty Years Ago: Forty Israel Besieges Beirut</a></li>
                    <li><a href="#">AAP Slams Kiran Bedi Over Her ‘Joke On Sikhs’</a></li>
                </ul>
            </div>
          </div>
        <div className={styles.rghr}></div>

          
             {/* Bottom Section */}

          <div style={{display: 'flex', height:"30%", width:"100%", marginTop:"20px"}}>
            <div style={{width:"28%"}}>
                <h3 style= {{paddingLeft:"10px" , color:"rgb(99, 96,96)"}}>FOLLOW US</h3>
                  <div style={{display:"flex"}}>
                     <div className={styles.mn} >
                        <a href="https://www.facebook.com/indianexpress"> <FaFacebookF /> </a>
                     </div>
                     <div className={styles.mn}>
                        <a href="https://twitter.com/indianexpress" style={{marginLeft:"10px"}}> <FaTwitter /></a> 
                     </div>
                     <div className={styles.mn}>
                        <a href="https://www.instagram.com/indianexpress/" style={{marginLeft:"10px"}}> <FaInstagram /> </a>
                     </div>
                     <div className={styles.mn}>
                        <a href="https://www.linkedin.com/company/indian-express/" style={{marginLeft:"10px"}}> <FaLinkedin /> </a>
                     </div>
                  </div>
                <h3 style={{paddingLeft:"10px" , color:"rgb(99, 96,96)"}}>DOWNLOAD APPS</h3>  
                  
                     <div style={{display:"flex", marginTop:"-10px"}}>
                       <div className={styles.mn} style={{marginLeft:"10px"}}> 
                          <a href="https://play.google.com/store/apps/details?id=com.indianexpress.android&hl=en"> <FaAndroid /> </a>
                       </div>
                       <div className={styles.mn}>
                          <a href="https://itunes.apple.com/us/app/the-indian-express/id506351833?mt=8" style={{marginLeft:"10px"}}> <FaApple /></a> 
                       </div>
                     </div>
                  <div style={{borderBottom: "2px solid rgb(99, 96, 96)", width:"95%", margin: "auto"}}></div>
                  <div>
                    <h3 style={{paddingLeft:"10px" , color:"rgb(99, 96, 96)"}}>NEWS GUARD</h3>
                    <div>
                        <p style= {{color:"rgb(99, 96, 96)", padding:"10px", boxSizing: "border-box" , marginTop: "-15px"}}>
                        The Indian Express website has been rated GREEN for its credibility and trustworthiness by Newsguard.
                        </p>
                    </div>
                  </div>

            </div>
            <div style={{borderRight: "2px solid rgb(99, 96, 96)", height:"90%", marginTop:"12px"}}></div>
            <div style={{width:"44%"}}>
               <h3 className={styles.rgh3}>EXPRESS GROUP</h3>
               <div style={{display:"flex"}}>
                  <div style={{width:"50%"}} className={styles.raj}>
                    <p>The Indian Express</p>
                    <p>The Financial Express</p>
                    <p>Loksatta</p>
                    <p>Jansatta</p>
                    <p>The Express Group</p>
                    <p>News Letters</p>
                    <p>Ramnath Goenka Excellence in Journalism Award</p>
                    <p>Light House Journalism</p>
                  </div>
                  <div style={{width:"50%"}} className={styles.raj}>
                    <p>ieTamil.com</p>
                    <p>ieBangla.com</p>
                    <p>ieMalayalam.com</p>
                    <p>ieUth</p>
                    <p>ieMyInsuranceClub</p>
                    <p>26/11 Stories of Strength</p>
                    <p>Online Classes for Kids</p>
                  </div>
               </div>
            </div>
            <div style={{borderRight: "2px solid rgb(99, 96, 96)", height:"90%", marginTop:"12px"}}></div>
            <div>
              <h3 className={styles.rgh3}>QUICK LINKS</h3>
                   <div className={styles.raj}>
                    <p  styles={{marginTop: "10px"}}>T&C</p>
                    <p>Privacy Policy</p>
                    <p>Advertise with Us</p>
                    <p>Brand Solutions</p>
                    <p>Contact Us</p>
                    <p>Subscribe</p>
                    <p>Statutory provisions on reporting (sexual offenses)</p>
                    <p>This website follows the DNPA’s code of conduct</p>
                    <p>CSR</p>
                  </div>
            </div>
          </div>
          <div className={styles.rghr} style={{marginTop: "50px"}}></div>
          
          <div style= {{display:"flex", justifyContent:"space-between"}}>
            <div>
               <h3 className={styles.rgh3}>Copyright © 2022 The Indian Express [P] Ltd. All Rights Reserved</h3>
            </div>
            <div>
               <h3 className={styles.rgh3}>PoweredBy : WordPress.com</h3>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer;



//npm install --save @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons