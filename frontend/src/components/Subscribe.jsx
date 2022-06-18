import React from 'react'
import styles from "./Subscribe.module.css"
import { FaRegEnvelope } from "react-icons/fa"
import { BsFillTelephoneForwardFill, BsStopwatch } from "react-icons/bs"
import DropDown from "./DropDown"

const Subscribe = () => {
  return (
    <>
      <div>
        <div>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/evolok/indian-express-logo-n.svg" alt="indian Express"  height="24px" width="35%"/>
            </div>
            <hr />

            <h1 style={{fontFamily:"Droid Serif, serif", fontSize:"45px", textAlign:"center", fontWeight:"700",}}>3 plans to choose from</h1>
            <p className={styles.rgab}>Subscribe to trust and journalism you can bank on</p>

            <div className={styles.adic}>
                <div>
                    <div>
                        <h2>All Access</h2>
                        <p>Digital + E-paper subscription so that you don't miss anything</p>
                        <hr style={{width: "70%"}}/>
                        <p>Plans starts from</p>
                        <h1>$87 <span style={{fontWeight:"500", fontSize:"16px"}}> /month</span></h1>
                        <button className={styles.rgacbtn}>Save up to 78%</button>
                    </div>
                    <div>
                        <h2>Digital Only</h2>
                        <p>Get unlimited access to all our journalism online</p>
                        <hr style={{width: "70%"}}/>
                        <p>Plans starts from</p>
                        <h1>$66 <span style={{fontWeight:"500", fontSize:"16px"}}> /month</span></h1>
                        <button className={styles.rgacbtn}>Save up to 66%</button>
                    </div>
                    <div>
                        <h2>ePaper Only</h2>
                        <p>Access to just daily e-replica edition</p>
                        <hr style={{width: "70%"}}/>
                        <p>Plans starts from</p>
                        <h1>$87 <span style={{fontWeight:"500", fontSize:"16px"}}> /month</span></h1>
                        <button className={styles.rgacbtn}>Save up to 66%</button>
                    </div>
                </div>
            </div>
            <div className={styles.ng}>
              <h1 style={{fontFamily:"Helvetica", fontSize:"30px", textAlign:"center", fontWeight:"600", paddingTop:"25px", color:"white"}}>Here is what you get</h1>
              <p className={styles.rgab} style={{color:"white"}}> Features will depend on your subscription package.</p>

              <div className={styles.xyz}> 
                <div>
                  <div className={styles.zxy}>

                  </div>
                  <div style={{padding:"5px", boxSizing:"border-box" }}>
                    <h3 className={styles.picka}>The best investigations, interviews and deep dive reportage</h3>
                  </div>
                </div>
                <div>
                  <div className={styles.abc}>
                   </div>
                   <div>
                    <h3 className={styles.picka}>Daily dose of explainers and unbiased news coverage</h3> 
                   </div> 
                </div>
                <div>
                  <div className={styles.def}>
                  </div>
                  <div>
                    <h3 className={styles.picka}>Ad-lite <br /> experience <br/> across platforms</h3>
                  </div>
                </div>
                <div>
                  <div className={styles.ghi}>
                  </div>
                  <div>
                    <h3 className={styles.picka}>Access to our <br/> events with thought <br/> leaders</h3>
                  </div>
                </div>
              </div>
              <h1 style={{fontFamily:"Helvetica",fontWeight:"560", textAlign:"center" , fontSize:"25px", marginTop:"40px"}}>Contact Us</h1>
              <div style={{display:"flex" , height:"80px", width:"70%", margin:"auto", border:"1px solid grey", borderRadius:"15px"}}>
                 <div style={{display:"flex", alignItems:"center", width:"20%"}}>
                    <div style={{display:"flex", fontSize:"30px", fontWeight:"400", color:"grey",marginLeft:"20px"}}>
                      <BsFillTelephoneForwardFill />
                    </div>
                    <div>
                      <p style={{marginLeft:"15px", fontFamily:"Helvetica", marginTop:"15px"}}>9289033229</p>
                    </div>
                 </div>
                 <div style={{height:"40px", width:"10%", borderRight:"1px solid gray", marginTop:"25px"}}></div>
                 <div style={{display:"flex", alignItems:"center", width:"25%"}}>
                    <div style={{display:"flex", fontSize:"35px", fontWeight:"400", color:"grey",marginLeft:"20px"}}>
                      <FaRegEnvelope />
                    </div>
                    <div>
                      <p style={{marginLeft:"15px", fontFamily:"Helvetica", marginTop:"15px"}}>subscriptions@indianexpress.com</p>
                    </div>
                 </div>
                 <div style={{height:"40px", width:"10%", borderRight:"1px solid gray", marginTop:"25px"}}></div>
                 <div style={{display:"flex", alignItems: "center"}}>
                     <div style={{display:"flex", fontSize:"30px", fontWeight:"400", color:"grey", marginLeft:"20px"}}>
                        <BsStopwatch />
                     </div>
                     <div>
                       <p style={{marginLeft:"15px", fontFamily:"Helvetica", marginTop:"15px"}}>Monday to Friday 10 am to 6 pm</p>
                     </div>
                 </div>
              </div>  
              
              <div style={{marginTop:"50px"}}>
                <DropDown />
              </div>

              <div style={{ height: "520px" , width:"100%" , backgroundColor:"#09112d", marginTop:"50px" , paddingTop:"20px"}}>

              <h1 style={{fontFamily:"Droid Serif, serif", fontSize:"45px", textAlign:"center", fontWeight:"700", color:"white"}}>3 plans to choose from</h1>
            <p style={{color:"white"}} className={styles.rgab}>Subscribe to trust and journalism you can bank on</p>

            <div className={styles.adic}>
                <div>
                    <div style={{backgroundColor:"white"}}>
                        <h2>All Access</h2>
                        <p>Digital + E-paper subscription so that you don't miss anything</p>
                        <hr style={{width: "70%"}}/>
                        <p>Plans starts from</p>
                        <h1>$87 <span style={{fontWeight:"500", fontSize:"16px"}}> /month</span></h1>
                        <button className={styles.rgacbtn}>Save up to 78%</button>
                    </div>
                    <div style={{backgroundColor:"white"}}>
                        <h2>Digital Only</h2>
                        <p>Get unlimited access to all our journalism online</p>
                        <hr style={{width: "70%"}}/>
                        <p>Plans starts from</p>
                        <h1>$66 <span style={{fontWeight:"500", fontSize:"16px"}}> /month</span></h1>
                        <button className={styles.rgacbtn}>Save up to 66%</button>
                    </div>
                    <div style={{backgroundColor:"white"}}>
                        <h2>ePaper Only</h2>
                        <p>Access to just daily e-replica edition</p>
                        <hr style={{width: "70%"}}/>
                        <p>Plans starts from</p>
                        <h1>$87 <span style={{fontWeight:"500", fontSize:"16px"}}> /month</span></h1>
                        <button className={styles.rgacbtn}>Save up to 66%</button>
                    </div>
                </div>
            </div>
              </div>

            </div>
               

        </div>
      </div>
    </>
  )
}

export default Subscribe;