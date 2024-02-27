import React, {useEffect,useRef,useState} from "react";
import { Component2} from "../../components/Component2";
import "./style.css";
import { useLocation }  from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { PropertyDefault } from "../../components/PropertyDefault";
export const MyRoom = () => {
  const navigate = useNavigate();
  const [timerDays,setTimerDays]=useState('00');
  const [timerHours,setTimerHours]=useState('00');
  const [timerMinutes,setTimerMinutes]=useState('00');
  const [timerSeconds,setTimerSeconds]=useState('00');
  const location=useLocation();
  const [InfoRoom,setInfoRoom]=useState({
  roomNb:0,
  alertHousekeeping:"",
  dnd:0,
  toiletPaper:0,
  soap:0,
  towels:0,
  valueTips:0.0,
  review:""
  });

  const [Housekeeping,setHousekeeping]=useState({
    roomNb:0,
    cleanDone:0,
    poolDone:0,
    miniBarDone:0,
    extraThingsDone:0
  });

  const {roomNb,alertHousekeeping,dnd,toiletPaper,soap,towels,valueTips,review}=InfoRoom;
  //acum in location.state.code avem codul clientului
  let interval =useRef();


  const startTimer=()=>{
  const response=axios.get(`http://localhost:8082/client/findDate/${parseInt(location.state.code, 10)}`)
  .then(response => {
    console.log("Data este: " + response.data);
    countdownDate =new Date( response.data).getTime();
    interval=setInterval(()=>{
      const now= new Date().getTime();
      const distance=countdownDate-now;
      const days=Math.floor(distance/(1000*60*60*24));
      const hours=Math.floor((distance%(1000*60*60*24)/(1000*60*60)));
      const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
      const seconds=Math.floor((distance%(1000*60))/1000);
      const elapsedMinutes = Math.floor((1 * 60 * 1000 - distance) / (1000 * 60)); // Calculate elapsed minutes
      if(distance<0)
      {
          clearInterval(interval.current);
      }
      else
      {
       setTimerDays(days);
       setTimerHours(hours);
       setTimerMinutes(minutes);
       setTimerSeconds(seconds);
      }
        },1000);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
   
  
  };
  useEffect(()=>{
    startTimer();
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/client/findRoom/${parseInt(location.state.code, 10)}`);

        const roomNumber = parseInt(response.data, 10);
        
        Housekeeping.roomNb=roomNumber;
        Housekeeping.cleanDone=0;
        Housekeeping.poolDone=0;
        Housekeeping.cleanDone=0;
        Housekeeping.extraThingsDone=0;
        const response2 = await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
        console.log(response2.data);

        setInfoRoom({ ...InfoRoom, [`roomNb`]: roomNumber });
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchData();
    return()=>{  
      clearInterval(interval.current);
    };
  });

  useEffect(() => {
    // Add event listener when the component mounts
    const plusButton = document.querySelector(".plus");
    const boxElement = document.querySelector(".box");

    const handleClick = (e) => {
      boxElement.classList.toggle("box-active");
      plusButton.classList.toggle("plus-active");
    };

    plusButton.addEventListener("click", handleClick);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      plusButton.removeEventListener("click", handleClick);
    };
  }, []);

  // const handleClickdnd = () => {
  //   console.log(`Button clicked:dnd`);
  //   InfoRoom.dnd=1;
  // };

  async function handleClickdnd(event) {

    event.preventDefault();
    console.log(InfoRoom);
     try {
      console.log(`Button clicked:dnd`);
      InfoRoom.dnd=1;
       await axios.post(`http://localhost:8082/inforoom/add`,InfoRoom);
     } catch (err) {
      
         console.error("An error occurred", err);
         alert("An error occurred");
       }
    }

  // const handleClickpaper = () => {
  //   console.log(`Button clicked:toiletPaper`);
  //   InfoRoom.toiletPaper=1;
  // };

  async function handleClickpaper(event) {

    event.preventDefault();
    console.log(InfoRoom);
     try {
      console.log(`Button clicked:toiletPaper`);
      InfoRoom.toiletPaper=1;
       await axios.post(`http://localhost:8082/inforoom/add`,InfoRoom);
      //  alert("Successfully added");
     } catch (err) {
      
         console.error("An error occurred", err);
         alert("An error occurred");
       }
    }

  // const handleClicksoap = () => {
  //   console.log(`Button clicked:soap`);
  //   InfoRoom.soap=1;

  // };

  async function handleClicksoap(event) {

    event.preventDefault();
    console.log(InfoRoom);
     try {
      console.log(`Button clicked:soap`);
      InfoRoom.soap=1;
       await axios.post(`http://localhost:8082/inforoom/add`,InfoRoom);
     } catch (err) {
      
         console.error("An error occurred", err);
         alert("An error occurred");
       }
    }
  

  // const handleClicktowels = () => {
  //   console.log(`Button clicked:towels`);
  //   InfoRoom.towels=1;

  // };

  async function handleClicktowels(event) {

    event.preventDefault();
    console.log(InfoRoom);
     try {
      console.log(`Button clicked:towels`);
    InfoRoom.towels=1;
       await axios.post(`http://localhost:8082/inforoom/add`,InfoRoom);
     } catch (err) {
      
         console.error("An error occurred", err);
         alert("An error occurred");
       }
    }

  // const handleClickalert = () => {
  //   console.log(`Button clicked:alertHousekeeping`);
  //   const now = new Date();

  //     let hours = now.getHours();
  //     let minutes = now.getMinutes() + 15;
  //     const seconds = now.getSeconds();
      
  //     if (minutes >= 60) {
  //       hours += Math.floor(minutes / 60);
  //       minutes %= 60;
  //     }
      
  //     hours = String(hours).padStart(2, '0');
  //     minutes = String(minutes).padStart(2, '0');
  //     InfoRoom.alertHousekeeping=`${hours}:${minutes}`;

  // };

  async function handleClickalert(event) {

    event.preventDefault();
    console.log(InfoRoom);
     try {
      console.log(`Button clicked:alertHousekeeping`);
      const now = new Date();
  
        let hours = now.getHours();
        let minutes = now.getMinutes() + 15;
        const seconds = now.getSeconds();
        
        if (minutes >= 60) {
          hours += Math.floor(minutes / 60);
          minutes %= 60;
        }
        
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        InfoRoom.alertHousekeeping=`${hours}:${minutes}`;
       await axios.post(`http://localhost:8082/inforoom/add`,InfoRoom);
     } catch (err) {
      
         console.error("An error occurred", err);
         alert("An error occurred");
       }
    }
    
   
    
  
  
  // const handleTipsSubmit=(amount)=>
  // {
   
  //   // setInfoRoom({ ...InfoRoom,[`alertHousekeeping`]: InfoRoom.alertHousekeeping,[`dnd`]:InfoRoom.dnd,[`soap`]:InfoRoom.soap,[`toiletPaper`]:InfoRoom.toiletPaper,[`towels`]:InfoRoom.towels,[`roomNb`]:InfoRoom.roomNb,[`valueTips`]:amount,[`review`]:InfoRoom.review});
  //   console.log('Am primit tips de la copil:',amount);
  //   InfoRoom.valueTips = amount;
    
  // };

  async function handleTipsSubmit(amount) {

    console.log(InfoRoom);
     try {
      console.log('Am primit tips de la copil:',amount);
    InfoRoom.valueTips = amount;
       await axios.post(`http://localhost:8082/inforoom/add`,InfoRoom);
     } catch (err) {
      
         console.error("An error occurred", err);
         alert("An error occurred");
       }
    
  };

  // const handleClockSubmit=(hour,minutes)=>
  // {
   
  //   // setInfoRoom({ ...InfoRoom,[`alertHousekeeping`]: `${hour}:${minutes}`,[`dnd`]:InfoRoom.dnd,[`soap`]:InfoRoom.soap,[`toiletPaper`]:InfoRoom.toiletPaper,[`towels`]:InfoRoom.towels,[`roomNb`]:InfoRoom.roomNb,[`valueTips`]:InfoRoom.valueTips,[`review`]:InfoRoom.review});
  //   console.log('Curatenia e programata la ora:',`${hour}:${minutes}`);
  //   InfoRoom.alertHousekeeping=`${hour}:${minutes}`
  // };

  async function handleClockSubmit(hour,minutes) {

    console.log(InfoRoom);
     try {
      console.log('Curatenia e programata la ora:',`${hour}:${minutes}`);
    InfoRoom.alertHousekeeping=`${hour}:${minutes}`;
       await axios.post(`http://localhost:8082/inforoom/add`,InfoRoom);
     } catch (err) {
      
         console.error("An error occurred", err);
         alert("An error occurred");
       }
    
  };

  // const handleReviewSubmit=(review)=>
  // {
   
  //   // setInfoRoom({ ...InfoRoom,[`alertHousekeeping`]:InfoRoom.alertHousekeeping,[`dnd`]:InfoRoom.dnd,[`soap`]:InfoRoom.soap,[`toiletPaper`]:InfoRoom.toiletPaper,[`towels`]:InfoRoom.towels,[`roomNb`]:InfoRoom.roomNb,[`valueTips`]:InfoRoom.valueTips,[`review`]:review});
  //   console.log('A fost lasat urmatorul review:',review);
  //   InfoRoom.review = review;
    
  // };

  async function handleReviewSubmit(review) {

    console.log(InfoRoom);
     try {
      console.log('A fost lasat urmatorul review:',review);
    InfoRoom.review = review;
       await axios.post(`http://localhost:8082/inforoom/add`,InfoRoom);
     } catch (err) {
      
         console.error("An error occurred", err);
         alert("An error occurred");
       }
    
  };


// async function handleSubmit(event) {

//   event.preventDefault();
//   console.log(InfoRoom);
//    try {
//      console.log("Submit clicked");
//      await axios.post(`http://localhost:8082/inforoom/add`,InfoRoom);
//    } catch (err) {
    
//        console.error("An error occurred", err);
//        alert("An error occurred");
//      }
//   }

  return (
    <div className="MyRoom">
          <section className="timer">
            <div>
              <section>
                <p>{timerDays}</p>
                <p><small>Days</small></p>
              </section>
              <span>:</span>
              <section>
                <p>{timerHours}</p>
                <p><small>Hours</small></p>
              </section>
              <span>:</span>
              <section>
                <p>{timerMinutes}</p>
                <p><small>Minutes</small></p>
              </section>
              <span>:</span>
              <section>
                <p>{timerSeconds}</p>
                <p><small>Seconds</small></p>
              </section>
            </div>
        </section>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
             <div className="component-2"> 
        <Component2  className="component-1" property1="frame-11" onTipsSubmit={handleTipsSubmit} onClockSubmit={handleClockSubmit} onReviewSubmit={handleReviewSubmit}/>
        
       </div> 
            </div>
          </div>
          <div className="text-wrapper">HOUSEKEEPING DEPARTMENT</div>
          <div className="do-not-disturb">
            <button className="ellipsednd" onClick={handleClickdnd}>
            <div className="do-not-disturb-text">Do not disturb</div>
            <img className="vector" alt="Vector" src="/img/image.png"/></button>
          </div>
          <div className="alert">
          <button className="ellipsealert" onClick={handleClickalert}>
          <div className="alert-text">Emergency</div>
            <img className="vector" alt="Vector" src="/img/warning.png"/></button>
          </div>
          
          <div className="plus">
             <button className="ellipseplus">
             <div className="plus-text">More</div>
            <img className="vector" alt="Vector" src="/img/add.png"/></button>
          </div>
          {/* <div className="close">
             <button className="ellipse">
            <img className="vector" alt="Vector" src="/img/close.png"/></button>
          </div> */}
          <div className="box">
            <a className="paper">
            <button className="ellipsepaper" onClick={handleClickpaper}>
            <img className="vector" alt="Vector" src="/img/paper.jpeg"/></button>
            </a>
            <a className="towel">
            <button className="ellipsetowels" onClick={handleClicktowels}>
            <img className="vector" alt="Vector" src="/img/towel.jpeg"/></button>
            </a>
            <a className="liquid">
            <button className="ellipsesoap" onClick={handleClicksoap}>
            <img className="vector" alt="Vector" src="/img/soap2.jpeg"/></button>
            </a>
           
          </div>
      
         
         <button className="btn-back" onClick={() => navigate(-1)}>
           {" "}
           BACK{" "}
         </button>
             
        </div>
      </div>
    </div>
    
  );
  
};