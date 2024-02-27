import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "../../components/Checkbox";
import { ColumnVariant } from "../../components/ColumnVariant";
import { Table } from "../../components/Table";
import axios from "axios";  // Import axios
import "./style.css";

export const Departament4 = () => {
  const [infoRoomData, setInfoRoomData] = useState([]);
  const navigate = useNavigate();
  let [cont1, setCont1] = useState(0);
  let [cont2, setCont2] = useState(0);
  let [cont3, setCont3] = useState(0);
  let [cont4, setCont4] = useState(0);
  let [cont5, setCont5] = useState(0);
  let [cont6, setCont6] = useState(0);
  let [cont7, setCont7] = useState(0);
  const [clientRoomNumbers, setClientRoomNumbers] = useState([]);
  const [Housekeeping,setHousekeeping]=useState({
    roomNb:0,
    cleanDone:0,
    poolDone:0,
    miniBarDone:0,
    extraThingsDone:0
  });

  useEffect(() => {
    console.log("cont1:", cont1);
  }, [cont1]);

  
  const handleCheckboxChange = async(index, status) => {
  console.log(`Checkbox ${index} status changed to ${status}`);
   if (index===1)
   { Housekeeping.roomNb=510; 
    Housekeeping.cleanDone=status;
    if (status === 1) {
      setCont1((prevCont1) => {
        console.log(prevCont1 + 1);
        return prevCont1 + 1;
      });
    } else {
      setCont1((prevCont1) => {
        if (prevCont1 > 0) {
          console.log(prevCont1 - 1);
          return prevCont1 - 1;
        }
        return prevCont1;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===2)
   { Housekeeping.roomNb=510; 
    Housekeeping.poolDone=status;
    if (status === 1) {
      setCont1((prevCont1) => {
        console.log(prevCont1 + 1);
        return prevCont1 + 1;
      });
    } else {
      setCont1((prevCont1) => {
        if (prevCont1 > 0) {
          console.log(prevCont1 - 1);
          return prevCont1 - 1;
        }
        return prevCont1;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===3)
   { Housekeeping.roomNb=510; 
    Housekeeping.miniBarDone=status;
    if (status === 1) {
      setCont1((prevCont1) => {
        console.log(prevCont1 + 1);
        return prevCont1 + 1;
      });
    } else {
      setCont1((prevCont1) => {
        if (prevCont1 > 0) {
          console.log(prevCont1 - 1);
          return prevCont1 - 1;
        }
        return prevCont1;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===4)
   { Housekeeping.roomNb=510; 
    Housekeeping.extraThingsDone=status;
    if (status === 1) {
      setCont1((prevCont1) => {
        console.log(prevCont1 + 1);
        return prevCont1 + 1;
      });
    } else {
      setCont1((prevCont1) => {
        if (prevCont1 > 0) {
          console.log(prevCont1 - 1);
          return prevCont1 - 1;
        }
        return prevCont1;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===5)
   { Housekeeping.roomNb=514; 
    Housekeeping.cleanDone=status;
    if (status === 1) {
      setCont2((prevCont2) => {
        console.log(prevCont2 + 1);
        return prevCont2 + 1;
      });
    } else {
      setCont2((prevCont2) => {
        if (prevCont2 > 0) {
          console.log(prevCont2 - 1);
          return prevCont2 - 1;
        }
        return prevCont2;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===6)
   { Housekeeping.roomNb=514; 
    Housekeeping.poolDone=status;
    if (status === 1) {
      setCont2((prevCont2) => {
        console.log(prevCont2 + 1);
        return prevCont2 + 1;
      });
    } else {
      setCont2((prevCont2) => {
        if (prevCont2 > 0) {
          console.log(prevCont2 - 1);
          return prevCont2 - 1;
        }
        return prevCont2;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===7)
   { Housekeeping.roomNb=514; 
    Housekeeping.miniBarDone=status;
    if (status === 1) {
      setCont2((prevCont2) => {
        console.log(prevCont2 + 1);
        return prevCont2 + 1;
      });
    } else {
      setCont2((prevCont2) => {
        if (prevCont2 > 0) {
          console.log(prevCont2 - 1);
          return prevCont2 - 1;
        }
        return prevCont2;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===8)
   { Housekeeping.roomNb=514; 
    Housekeeping.extraThingsDone=status;
    if (status === 1) {
      setCont2((prevCont2) => {
        console.log(prevCont2 + 1);
        return prevCont2 + 1;
      });
    } else {
      setCont2((prevCont2) => {
        if (prevCont2 > 0) {
          console.log(prevCont2 - 1);
          return prevCont2 - 1;
        }
        return prevCont2;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===9)
   { Housekeeping.roomNb=517; 
    Housekeeping.cleanDone=status;
    if (status === 1) {
      setCont3((prevCont3) => {
        console.log(prevCont3 + 1);
        return prevCont3 + 1;
      });
    } else {
      setCont3((prevCont3) => {
        if (prevCont3 > 0) {
          console.log(prevCont3 - 1);
          return prevCont3 - 1;
        }
        return prevCont3;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===10)
   { Housekeeping.roomNb=517; 
    Housekeeping.poolDone=status;
    if (status === 1) {
      setCont3((prevCont3) => {
        console.log(prevCont3 + 1);
        return prevCont3 + 1;
      });
    } else {
      setCont3((prevCont3) => {
        if (prevCont3 > 0) {
          console.log(prevCont3 - 1);
          return prevCont3 - 1;
        }
        return prevCont3;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===11)
   { Housekeeping.roomNb=517; 
    Housekeeping.miniBarDone=status;
    if (status === 1) {
      setCont3((prevCont3) => {
        console.log(prevCont3 + 1);
        return prevCont3 + 1;
      });
    } else {
      setCont3((prevCont3) => {
        if (prevCont3 > 0) {
          console.log(prevCont3 - 1);
          return prevCont3 - 1;
        }
        return prevCont3;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===12)
   { Housekeeping.roomNb=517; 
    Housekeeping.extraThingsDone=status;
    if (status === 1) {
      setCont3((prevCont3) => {
        console.log(prevCont3 + 1);
        return prevCont3 + 1;
      });
    } else {
      setCont3((prevCont3) => {
        if (prevCont3 > 0) {
          console.log(prevCont3 - 1);
          return prevCont3 - 1;
        }
        return prevCont3;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===13)
   { Housekeeping.roomNb=521; 
    Housekeeping.cleanDone=status;
    if (status === 1) {
      setCont4((prevCont4) => {
        console.log(prevCont4 + 1);
        return prevCont4 + 1;
      });
    } else {
      setCont4((prevCont4) => {
        if (prevCont4 > 0) {
          console.log(prevCont4 - 1);
          return prevCont4 - 1;
        }
        return prevCont4;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===14)
   { Housekeeping.roomNb=521; 
    Housekeeping.poolDone=status;
    if (status === 1) {
      setCont4((prevCont4) => {
        console.log(prevCont4 + 1);
        return prevCont4 + 1;
      });
    } else {
      setCont4((prevCont4) => {
        if (prevCont4 > 0) {
          console.log(prevCont4 - 1);
          return prevCont4 - 1;
        }
        return prevCont4;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===15)
   { Housekeeping.roomNb=521; 
    Housekeeping.miniBarDone=status;
    if (status === 1) {
      setCont4((prevCont4) => {
        console.log(prevCont4 + 1);
        return prevCont4 + 1;
      });
    } else {
      setCont4((prevCont4) => {
        if (prevCont4 > 0) {
          console.log(prevCont4 - 1);
          return prevCont4 - 1;
        }
        return prevCont4;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===16)
   { Housekeeping.roomNb=521; 
    Housekeeping.extraThingsDone=status;
    if (status === 1) {
      setCont4((prevCont4) => {
        console.log(prevCont4 + 1);
        return prevCont4 + 1;
      });
    } else {
      setCont4((prevCont4) => {
        if (prevCont4 > 0) {
          console.log(prevCont4 - 1);
          return prevCont4 - 1;
        }
        return prevCont4;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===17)
   { Housekeeping.roomNb=522; 
    Housekeeping.cleanDone=status;
    if (status === 1) {
      setCont5((prevCont5) => {
        console.log(prevCont5 + 1);
        return prevCont5 + 1;
      });
    } else {
      setCont5((prevCont5) => {
        if (prevCont5 > 0) {
          console.log(prevCont5 - 1);
          return prevCont5 - 1;
        }
        return prevCont5;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===18)
   { Housekeeping.roomNb=522; 
    Housekeeping.poolDone=status;
    if (status === 1) {
      setCont5((prevCont5) => {
        console.log(prevCont5 + 1);
        return prevCont5 + 1;
      });
    } else {
      setCont5((prevCont5) => {
        if (prevCont5 > 0) {
          console.log(prevCont5 - 1);
          return prevCont5 - 1;
        }
        return prevCont5;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===19)
   { Housekeeping.roomNb=522; 
    Housekeeping.miniBarDone=status;
    if (status === 1) {
      setCont5((prevCont5) => {
        console.log(prevCont5 + 1);
        return prevCont5 + 1;
      });
    } else {
      setCont5((prevCont5) => {
        if (prevCont5 > 0) {
          console.log(prevCont5 - 1);
          return prevCont5 - 1;
        }
        return prevCont5;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===20)
   { Housekeeping.roomNb=522; 
    Housekeeping.extraThingsDone=status;
    if (status === 1) {
      setCont5((prevCont5) => {
        console.log(prevCont5 + 1);
        return prevCont5 + 1;
      });
    } else {
      setCont5((prevCont5) => {
        if (prevCont5 > 0) {
          console.log(prevCont5 - 1);
          return prevCont5 - 1;
        }
        return prevCont5;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===21)
   { Housekeeping.roomNb=530; 
    Housekeeping.cleanDone=status;
    if (status === 1) {
      setCont6((prevCont6) => {
        console.log(prevCont6 + 1);
        return prevCont6 + 1;
      });
    } else {
      setCont6((prevCont6) => {
        if (prevCont6 > 0) {
          console.log(prevCont6 - 1);
          return prevCont6 - 1;
        }
        return prevCont6;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===22)
   { Housekeeping.roomNb=530; 
    Housekeeping.poolDone=status;
    if (status === 1) {
      setCont6((prevCont6) => {
        console.log(prevCont6 + 1);
        return prevCont6 + 1;
      });
    } else {
      setCont6((prevCont6) => {
        if (prevCont6 > 0) {
          console.log(prevCont6 - 1);
          return prevCont6 - 1;
        }
        return prevCont6;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===23)
   { Housekeeping.roomNb=530; 
    Housekeeping.miniBarDone=status;
    if (status === 1) {
      setCont6((prevCont6) => {
        console.log(prevCont6 + 1);
        return prevCont6 + 1;
      });
    } else {
      setCont6((prevCont6) => {
        if (prevCont6 > 0) {
          console.log(prevCont6 - 1);
          return prevCont6 - 1;
        }
        return prevCont6;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===24)
   { Housekeeping.roomNb=530; 
    Housekeeping.extraThingsDone=status;
    if (status === 1) {
      setCont6((prevCont6) => {
        console.log(prevCont6 + 1);
        return prevCont6 + 1;
      });
    } else {
      setCont6((prevCont6) => {
        if (prevCont6 > 0) {
          console.log(prevCont6 - 1);
          return prevCont6 - 1;
        }
        return prevCont6;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===25)
   { Housekeeping.roomNb=531; 
    Housekeeping.cleanDone=status;
    if (status === 1) {
      setCont7((prevCont7) => {
        console.log(prevCont7 + 1);
        return prevCont7 + 1;
      });
    } else {
      setCont7((prevCont7) => {
        if (prevCont7 > 0) {
          console.log(prevCont7 - 1);
          return prevCont7 - 1;
        }
        return prevCont7;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
   }

   if (index===26)
   { Housekeeping.roomNb=531; 
    Housekeeping.poolDone=status;
    if (status === 1) {
      setCont7((prevCont7) => {
        console.log(prevCont7 + 1);
        return prevCont7 + 1;
      });
    } else {
      setCont7((prevCont7) => {
        if (prevCont7 > 0) {
          console.log(prevCont7 - 1);
          return prevCont7 - 1;
        }
        return prevCont7;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
    }
   

   if (index===27)
   { Housekeeping.roomNb=531; 
    Housekeeping.miniBarDone=status;
    if (status === 1) {
      setCont7((prevCont7) => {
        console.log(prevCont7 + 1);
        return prevCont7 + 1;
      });
    } else {
      setCont7((prevCont7) => {
        if (prevCont7 > 0) {
          console.log(prevCont7 - 1);
          return prevCont7 - 1;
        }
        return prevCont7;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
    }
   

   if (index===28)
   { Housekeeping.roomNb=531; 
    Housekeeping.extraThingsDone=status;
    if (status === 1) {
      setCont7((prevCont7) => {
        console.log(prevCont7 + 1);
        return prevCont7 + 1;
      });
    } else {
      setCont7((prevCont7) => {
        if (prevCont7 > 0) {
          console.log(prevCont7 - 1);
          return prevCont7 - 1;
        }
        return prevCont7;
      });
    }
    try {
     
      console.log(Housekeeping);
       await axios.post(`http://localhost:8082/housekeeping/addHDetails`,Housekeeping);
     } catch (err) {
         console.error("An error occurred", err);
         alert("An error occurred");
       }
    }
   
    }
   


  const checkboxCallbacks = Array.from({ length: 28 }, (_, index) => {
    return (status) => handleCheckboxChange(index + 1, status);
  });

  useEffect(() => {
  
    const fetchClientData = async () => {
      try {
        const clientResponse = await axios.get("http://localhost:8082/client/getAll");
        if (clientResponse.data && Array.isArray(clientResponse.data)) {
          const roomNumbers = clientResponse.data.map(room => room.nbCamera);
          setClientRoomNumbers(roomNumbers);
        }
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };
  
    fetchClientData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8082/sector4/getAll");
        if (response.data && Array.isArray(response.data)) {
          const infoRoomPromises = response.data.map(async (element) => {
            if (element) {
              try {
                const response2 = await axios.get(`http://localhost:8082/inforoom/getInfoRoom/${parseInt(element, 10)}`);
                
                if (response2.data) {
                  // New query to get the date
                  const dateResponse = await axios.get(`http://localhost:8082/client/findDateRoom/${parseInt(element, 10)}`);
                  const currentDate = new Date();
                  console.log(dateResponse.data);
                 const elementDate = new Date(dateResponse.data);
                 
                  console.log("InfoRoom for room number", element, ":", response2.data);
  
                  // Check if the date is equal to the current date
                  const isCurrentDate = currentDate.toDateString() === elementDate.toDateString();
  
                  return { ...response2.data, isCurrentDate };
                } else {
                  console.log("No InfoRoom data for room number", element);
                  return null;
                }
              } catch (error) {
                // Handle errors
                if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
                  console.log("No InfoRoom data found for room number", element);
                } else {
                  console.error("Error fetching InfoRoom for room number", element, ":", error);
                }
              }
            } else {
              console.log("Invalid room number:", element);
              return null;
            }
          });
  
          const infoRoomData = await Promise.all(infoRoomPromises);
          setInfoRoomData(infoRoomData);
          console.log("All InfoRoom data:", infoRoomData);
          setTimeout(async () => {
            console.log("Before reset request");
            try {
              const response = await axios.post(`http://localhost:8082/inforoom/reset`);
              console.log("Entire tables reset", response);
            } catch (error) {
              console.error("Error resetting entire tables:", error);
            }
            console.log("After reset request");
          }, 9 * 60 * 60 * 1000);
          
        } else {
          console.log("Rooms do not exist");
        }
      } catch (err) {
        // Handle errors
        if (err.response && err.response.status === 404) {
          console.log("Rooms not found");
        } else {
          console.error("An error occurred", err);
          alert("An error occurred");
        }
      }
    };
  
    fetchData();
  }, []);





  
  
  return (
   
    <div className="tables">
       <button className="emergency-rectangle">
       <div className="top-rectangle-text">Emergency</div>
       </button>
       <button className="free-rectangle">
       <div className="free-rectangle-text">Fresh</div>
       </button>
       <button className="done-rectangle">
       <div className="done-rectangle-text">Done</div>
       </button>
      <div className="div">
        <div className="frame">
          <div className="overlap-group">
            <div className="frame-2">
            <table className="simple-table">
            
              
      <thead>
        <tr>
          <th>RoomNb</th>
          <th>Emergency</th>
          <th>DND</th>
          <th>Toilet paper</th>
          <th>Soap</th>
          <th>Towels</th>
          <th>Tips</th>
        </tr>
      </thead>
      <tbody>
      {infoRoomData.map((roomData, index) => {
  // Get the current time
  const currentTime = new Date();

  // Get the alertHousekeeping time as a Date object
  const alertTimeParts = roomData.alertHousekeeping.split(":");
  const alertTime = new Date();
  alertTime.setHours(parseInt(alertTimeParts[0], 10));
  alertTime.setMinutes(parseInt(alertTimeParts[1], 10));

  // Calculate the difference in minutes
  const timeDifference = (alertTime - currentTime) / (1000 * 60);

  // Check if the alertHousekeeping time is less than 20 minutes from the current time
  isWithin20Minutes=timeDifference <=20 && timeDifference>0 
  
  const rowStyle = {
    backgroundColor:
      (roomData.roomNb === 510 && cont1 === 4? 'rgba(0, 255, 0, 0.41)' :
      roomData.roomNb === 514 && cont2 === 4 ? 'rgba(0, 255, 0, 0.41)' :
      roomData.roomNb === 517 && cont3 === 4 ? 'rgba(0, 255, 0, 0.41)' :
      roomData.roomNb === 521 && cont4 === 4 ? 'rgba(0, 255, 0, 0.41)' :
      roomData.roomNb === 522 && cont5 === 4 ? 'rgba(0, 255, 0, 0.41)' :
      roomData.roomNb === 530 && cont6 === 4 ? 'rgba(0, 255, 0, 0.41)' :
      roomData.roomNb === 531 && cont7 === 4 ? 'rgba(0, 255, 0, 0.41)' :
      !clientRoomNumbers.includes(roomData.roomNb) ? 'rgba(0, 0, 255, 0.41)' :
      isWithin20Minutes ? 'rgba(255, 0, 0, 0.41)' :
      roomData.isCurrentDate ? 'rgba(255, 0, 0,0.41)' :
      'rgba(0, 0, 0, 0.03)'),
  };
  
  
   console.log(roomData.isCurrentDate);
   console.log(roomData.roomNb);
    
    return (
      
      <tr key={index} style={rowStyle}>
      <td>{roomData.roomNb}</td>
      <td>{roomData.alertHousekeeping === "" ? 'No' : roomData.alertHousekeeping}</td>
      <td>{roomData.dnd === 0 ? 'No' : 'Yes'}</td>
      <td>{roomData.toiletPaper === 0 ? 'No' : 'Yes'}</td>
      <td>{roomData.soap === 0 ? 'No' : 'Yes'}</td>
      <td>{roomData.towels === 0 ? 'No' : 'Yes'}</td>
      <td>{roomData.valueTips === 0 ? 'No' : roomData.valueTips}</td>
    </tr>
        );
  })}
</tbody>


    </table>
             
              {/* <ColumnVariant className="column1-variant2" />
              <ColumnVariant className="column-variant-instance" /> */}
            </div>
         
            {/* <ColumnVariant className="column1-variant2-instance" /> */}
          </div>
          {/* <ColumnVariant className="column-variant-2" />
          <ColumnVariant className="column-variant-3" />
          <ColumnVariant className="column-variant-4" />
          <ColumnVariant className="column-variant-5" />
          <ColumnVariant className="column-variant-6" />
          <ColumnVariant className="column-variant-7" /> */}
          
         
          <Table
            property1="head-prop"
            propertyHeadpropClassName="table-9"
            tableHeadClassName="table-10"
            text="Room"
          />
          <Table
            property1="head-prop"
            propertyHeadpropClassName="table-11"
            tableHeadClassName="table-10"
            text="Pool"
          />
          <Table
            property1="head-prop"
            propertyHeadpropClassName="table-12"
            tableHeadClassName="table-10"
            text="MiniBar"
          />
          <Table
            property1="head-prop"
            propertyHeadpropClassName="table-13"
            tableHeadClassName="table-10"
            text="Extra"
          />
          <div>
          
        {checkboxCallbacks.map((callback, index) => (
          <Checkbox
            key={index}
            index={index}
            className={`checkbox-${index + 1}`}
            onStatusChange={callback}
          />
        ))}
       
      </div>
        </div>
        
        <img
          className="TODAYS-WORK-PLAN"
          alt="Todays WORK PLAN"
          src="https://cdn.animaapp.com/projects/658e94241e7516556beef227/releases/65a02ef35a3c8b68edb5582e/img/today-s-work-plan.png"
               />
                
<button className="btn-back" onClick={() => navigate(-1)}>
                {" "}
                BACK{" "}
              </button>
      </div>
      </div>
     
  );
};