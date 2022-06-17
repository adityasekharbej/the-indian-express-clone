import React from 'react'
import styles from "./Subscribe.module.css"

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
                    <div></div>
                    <div></div>
                </div>
            </div>


        </div>
      </div>
    </>
  )
}

export default Subscribe