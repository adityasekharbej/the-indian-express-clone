import React from 'react';
import Ticker, { NewsTicker } from 'nice-react-ticker';
import styles from "./singlePage.module.css"
function Ticcker(props) {
    return (
        <div>
            <div className={styles.newsticker}>
          <Ticker show={true} isNewsTicker={true} backgroundColour="white" >
            <NewsTicker  id="1"  title="A Pune company helps clients increase profits by harnessing emotions of employees, customers "    />
            <NewsTicker id="2" title="Ahead of Worlds, Javelin champ Neeraj Chopra hopes to work towards Tokyo magic in much-awaited return"  />
            <NewsTicker id="3" title="Aishwarya breaks decade-old triple jump record with 14.14m"  />
            <NewsTicker id="4" title="Alia Bhatt says she has watched Brahmastra trailer 25-30 times: ‘Been so nervous, haven’t slept properly for a week’"  />
            <NewsTicker id="5"  title="Andrew Redmayne: The dancing goalie who took Australia to the 2022 World Cup"  />
            <NewsTicker id="6"  title="Anushka Sharma glows in new beach photos: ‘When the sun made me shy…’"  />
          </Ticker>
        </div> 
        </div>
    );
}

export default Ticcker;