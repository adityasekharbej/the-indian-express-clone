import React from 'react';
import Ticker, { NewsTicker } from 'nice-react-ticker';
import styles from "./singlePage.module.css"
function Ticcker(props) {
    return (
        <div>
            <div className={styles.newsticker}>
          <Ticker show={true} isNewsTicker={true} backgrounColour="white" >
            <NewsTicker  id="1"  title="Blue passports to be issued to Brits for the first time in decades next "    />
            <NewsTicker id="2" title="Blue passports to be issued to Brits for the first time in decades next month"  />
            <NewsTicker id="3" title="Blue passports to be issued to Brits for the first time in decades next month"  />
            <NewsTicker id="4" title="Blue passports to be issued to Brits for the first time in decades next month"  />
            <NewsTicker id="5"  title="Blue passports to be issued to Brits for the first time in decades next month"  />
            <NewsTicker id="6"  title="Blue passports to be issued to Brits for the first time in decades next month"  />
          </Ticker>
        </div> 
        </div>
    );
}

export default Ticcker;