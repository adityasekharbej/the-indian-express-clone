import React from 'react'
// import { BsChevronDown } from "react-icons/bs"
import Accordion from 'react-bootstrap/Accordion'

const DropDown = () => {
  return (
    <>

    <h2 style={{textAlign: 'center', fontFamily: 'Helvetica' , fontWeight: 'bold', margin:"20px"}}>FAQ's</h2>
  
  <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0" style={{width:"70%", margin: "auto",}}>
    <Accordion.Header> <h2 style={{fontSize:"20px", fontWeight:"bold", fontFamily:"Helvetica" , border: "0", color:"black"}}>Do I need to create an account to buy a subscription?</h2> </Accordion.Header>
    <Accordion.Body style={{backgroundColor:"white", border: "0px"}}>

    <p>We have three subscription plans you can choose from: 1) E-paper Only 2) Digital Only 3) All Access.</p>

    <p>The E-paper Only plan gives you access to the E-paper (print edition replica) and archives for a single-city edition. A subscription to Digital Only provides you unlimited access on our website to all the journalism done by us. The All Access plan is a combination of the above two plans.</p>
        
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0" style={{width:"70%", margin: "auto",}}>
    <Accordion.Header> <h2 style={{fontSize:"20px", fontWeight:"bold", fontFamily:"Helvetica" , border: "0", color:"black"}}>Can I subscribe for access only to the desktop site or just the App?</h2> </Accordion.Header>
    <Accordion.Body style={{backgroundColor:"white", border: "0px"}}>

        <p>Yes, you will need to create an account with The Indian Express to subscribe. You can either sign up using your Google/Facebook account, log in via Apple or alternatively use your email ID to create one.</p>
        
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0" style={{width:"70%", margin: "auto",}}>
    <Accordion.Header> <h2 style={{fontSize:"20px", fontWeight:"bold", fontFamily:"Helvetica" , border: "0", color:"black"}}>Do I get a physical copy of The Indian Express newspaper delivered to my <br /> house along with my digital membership?</h2> </Accordion.Header>
    <Accordion.Body style={{backgroundColor:"white", border: "0px"}}>

        <p>All our subscription plans allow you access across platforms - desktop, mobile web and App.</p>
        
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0" style={{width:"70%", margin: "auto",}}>
    <Accordion.Header> <h2 style={{fontSize:"20px", fontWeight:"bold", fontFamily:"Helvetica" , border: "0", color:"black"}}>What are the different subscription plans offered by The Indian Express?</h2> </Accordion.Header>
    <Accordion.Body style={{backgroundColor:"white", border: "0px"}}>

        <p>No, this is only a digital subscription to The Indian Express. You can read all The Indian Express articles on our website and App.</p>
        
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0" style={{width:"70%", margin: "auto",}}>
    <Accordion.Header> <h2 style={{fontSize:"20px", fontWeight:"bold", fontFamily:"Helvetica" ,  border: "0", color:"black"}}>What payment modes do you accept?</h2> </Accordion.Header>
    <Accordion.Body style={{backgroundColor:"white", border: "0px"}}>

        <p>You can subscribe to The Indian Express using credit cards VISA/MasterCard/Amex and most debit cards, net banking and UPI.</p>
        
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0" style={{width:"70%", margin: "auto",}}>
    <Accordion.Header> <h2 style={{fontSize:"20px", fontWeight:"bold", fontFamily:"Helvetica" ,  border: "0", color:"black"}}>How do I get an invoice for my payment?</h2> </Accordion.Header>
    <Accordion.Body style={{backgroundColor:"white", border: "0px"}}>

        <p>You will get an invoice of your payment via an email as soon as your payment is authenticated.</p>
        
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0" style={{width:"70%", margin: "auto",}}>
    <Accordion.Header> <h2 style={{fontSize:"20px", fontWeight:"bold", fontFamily:"Helvetica" ,  border: "0", color:"black"}}>How can I check the status of my subscription?</h2> </Accordion.Header>
    <Accordion.Body style={{backgroundColor:"white", border: "0px"}}>

        <p>You can check your subscription status by going to the 'My Accounts' page, on the website.</p>
        
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0" style={{width:"70%", margin: "auto",}}>
    <Accordion.Header> <h2 style={{fontSize:"20px", fontWeight:"bold", fontFamily:"Helvetica" ,   border: "0", color:"black"}}>What are the different subscription plans offered by The Indian Express?</h2> </Accordion.Header>
    <Accordion.Body style={{backgroundColor:"white", border: "0px"}}>

        <p>As of now, new subscribers do not have an auto-renewal option.</p>
        
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0" style={{width:"70%", margin: "auto",}}>
    <Accordion.Header> <h2 style={{fontSize:"20px", fontWeight:"bold", fontFamily:"Helvetica" ,   border: "0", color:"black"}}>Will my subscription renew automatically?</h2> </Accordion.Header>
    <Accordion.Body style={{backgroundColor:"white", border: "0px"}}>

        <p>Yes. The Indian Express subscription is available across the globe.</p>
        
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0" style={{width:"70%", margin: "auto",}}>
    <Accordion.Header> <h2 style={{fontSize:"20px", fontWeight:"bold", fontFamily:"Helvetica" ,  border: "0", color:"black"}}>I do not live in India, can I still subscribe?</h2> </Accordion.Header>
    <Accordion.Body style={{backgroundColor:"white", border: "0px"}}>

        <p> You can subscribe from any country.</p>
        
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0" style={{width:"70%", margin: "auto",}}>
    <Accordion.Header> <h2 style={{fontSize:"20px", fontWeight:"bold", fontFamily:"Helvetica" ,  border: "0", color:"black"}}>What is your refund policy?</h2> </Accordion.Header>
    <Accordion.Body style={{backgroundColor:"white", border: "0px"}}>

        <p>We have a no refund policy.</p>
        
    </Accordion.Body>
  </Accordion.Item>
</Accordion>


      
    </>
  )
}

export default DropDown

// {/* <div className="dropdown">
//         <div className="dropdown-btn" onClick={(e) => {
//             setIsActive(!isActive)
//         }}>
//             What are the different subscription plans offered by The Indian Express?
//             <span style={{fontWeight: 'bold'}}><BsChevronDown /></span>
//             </div>
//         { isActive && 
//           <div className="dropdown-content">
//             <div className="dropdown-item">
//                <p>We have three subscription plans you can choose from: 1) E-paper Only 2) Digital Only 3) All Access.</p>

//                <p>The E-paper Only plan gives you access to the E-paper (print edition replica) and archives for a single-city edition. A subscription to <br /> Digital Only provides you unlimited access on our website to all the journalism done by us. The All Access plan is a combination of the <br /> above two plans.</p>
//             </div>
//           </div>
//         }
//       </div>

//      <div className="dropdown">
//         <div className="dropdown-btn" onClick={(e) => {
//             setIsActive(!isActive)
//         }}>
//             Choose One
//             <span style={{fontWeight: 'bold'}}><BsChevronDown /></span>
//             </div>
//         { isActive && 
//           <div className="dropdown-content">
//             <div className="dropdown-item">
//                 React
//             </div>
//             <div className="dropdown-item">
//                 Angular
//             </div>
//           </div>
//         }
//       </div> */}

//       { /* <div className="dropdown">
//         <div className="dropdown-btn" onClick={(e) => {
//             setIsActive(!isActive)
//         }}>
//             Choose One
//             <span style={{fontWeight: 'bold'}}><BsChevronDown /></span>
//             </div>
//         { isActive && 
//           <div className="dropdown-content">
//             <div className="dropdown-item">
//                 React
//             </div>
//             <div className="dropdown-item">
//                 Angular
//             </div>
//           </div>
//         }
//       </div>

//       <div className="dropdown">
//         <div className="dropdown-btn" onClick={(e) => {
//             setIsActive(!isActive)
//         }}>
//             Choose One
//             <span style={{fontWeight: 'bold'}}><BsChevronDown /></span>
//             </div>
//         { isActive && 
//           <div className="dropdown-content">
//             <div className="dropdown-item">
//                 React
//             </div>
//             <div className="dropdown-item">
//                 Angular
//             </div>
//           </div>
//         }
//       </div>

//       <div className="dropdown">
//         <div className="dropdown-btn" onClick={(e) => {
//             setIsActive(!isActive)
//         }}>
//             Choose One
//             <span style={{fontWeight: 'bold'}}><BsChevronDown /></span>
//             </div>
//         { isActive && 
//           <div className="dropdown-content">
//             <div className="dropdown-item">
//                 React
//             </div>
//             <div className="dropdown-item">
//                 Angular
//             </div>
//           </div>
//         }
//       </div>

//       <div className="dropdown">
//         <div className="dropdown-btn" onClick={(e) => {
//             setIsActive(!isActive)
//         }}>
//             Choose One
//             <span style={{fontWeight: 'bold'}}><BsChevronDown /></span>
//             </div>
//         { isActive && 
//           <div className="dropdown-content">
//             <div className="dropdown-item">
//                 React
//             </div>
//             <div className="dropdown-item">
//                 Angular
//             </div>
//           </div>
//         }
//       </div>

//       <div className="dropdown">
//         <div className="dropdown-btn" onClick={(e) => {
//             setIsActive(!isActive)
//         }}>
//             Choose One
//             <span style={{fontWeight: 'bold'}}><BsChevronDown /></span>
//             </div>
//         { isActive && 
//           <div className="dropdown-content">
//             <div className="dropdown-item">
//                 React
//             </div>
//             <div className="dropdown-item">
//                 Angular
//             </div>
//           </div>
//         }
//       </div>

//       <div className="dropdown">
//         <div className="dropdown-btn" onClick={(e) => {
//             setIsActive(!isActive)
//         }}>
//             Choose One
//             <span style={{fontWeight: 'bold'}}><BsChevronDown /></span>
//             </div>
//         { isActive && 
//           <div className="dropdown-content">
//             <div className="dropdown-item">
//                 React
//             </div>
//             <div className="dropdown-item">
//                 Angular
//             </div>
//           </div>
//         }
//       </div>

//       <div className="dropdown">
//         <div className="dropdown-btn" onClick={(e) => {
//             setIsActive(!isActive)
//         }}>
//             Choose One
//             <span style={{fontWeight: 'bold'}}><BsChevronDown /></span>
//             </div>
//         { isActive && 
//           <div className="dropdown-content">
//             <div className="dropdown-item">
//                 React
//             </div>
//             <div className="dropdown-item">
//                 Angular
//             </div>
//           </div>
//         }
//       </div>

//       <div className="dropdown">
//         <div className="dropdown-btn" onClick={(e) => {
//             setIsActive(!isActive)
//         }}>
//             Choose One
//             <span style={{fontWeight: 'bold'}}><BsChevronDown /></span>
//             </div>
//         { isActive && 
//           <div className="dropdown-content">
//             <div className="dropdown-item">
//                 React
//             </div>
//             <div className="dropdown-item">
//                 Angular
//             </div>
//           </div>
//         }
//       </div> 