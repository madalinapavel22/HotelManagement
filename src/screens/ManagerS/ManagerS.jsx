import React from "react";
// import { Component6 } from "../../components2/Component6";
import { Frame5 } from "../../components2/Frame5";
import { Frame6 } from "../../components2/Frame6";
import { Frame7 } from "../../components2/Frame7";
import { Property } from "../../components2/Property";
import React, { useEffect, useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { PropertyWrapper } from "../../components2/PropertyWrapper";
import "./style.css";
// import { CompoEmpl } from "../../components2/CompoEmpl";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ManagerS = () => {
  const [buttonState, setButtonState] = useState("default");
  const [isFrameVisible, setIsFrameVisible] = useState(false);
  const [isFrame6Visible, setIsFrame6Visible] = useState(false);
  const [isFrame7Visible, setIsFrame7Visible] = useState(false);

  const [isFrame2Visible, setIsFrame2Visible] = useState(false);
  const [isFrame3Visible, setIsFrame3Visible] = useState(false);
  const [isFrame4Visible, setIsFrame4Visible] = useState(false);
  const [isFrame5Visible, setIsFrame5Visible] = useState(false);
  const [isFrame10Visible, setIsFrame10Visible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDepartureDate, setSelectedDepartureDate] = useState(null);

  

  const [teamFirstName, setTeamFirstName] = useState('');  // Make sure this line is present
  const [teamLastName, setTeamLastName] = useState('');
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('1');

  const[clientRoomNumbers, setClientRoomNumbers]=useState([]);
  const[roomsWithoutClients, setRoomsWithoutClients]=useState([]);
  const[rooms2WithoutClients, set2RoomsWithoutClients]=useState([]);
  const[rooms3WithoutClients, set3RoomsWithoutClients]=useState([]);
  const[rooms4WithoutClients, set4RoomsWithoutClients]=useState([]);
  const [availableRoomsCount, setAvailableRoomsCount] = useState(0);
  const[arrivalsRooms, setArrRooms]=useState([]);
  const[depatureRooms, setDepRooms]=useState([]);
  const [codeValue, setCodeValue] = useState('');
  const [cameraValue, setcameraValue] = useState('');
  const [numeValue, setnumeValue] = useState('');
  const [prenumeValue, setprenumeValue] = useState('');
  const [dataCazareValue, setdataCazareValue] = useState('');
  const [dataPlecareValue, setdataPlecareValue] = useState('');
  const navigate = useNavigate();
  const [InfoRoom,setInfoRoom]=useState({
    code:0,
    nbCamera:0,
    nume:"",
    prenume:"",
    dataCazare:"",
    dataPlecare:""
    });
    
    const handleNavigation1 = () => {
      navigate("/Departament4");
    };
    const handleNavigation2 = () => {
      navigate("/Departament3");
    };
    const handleNavigation3 = () => {
      navigate("/Departament2");
    };
    const handleNavigation4 = () => {
      navigate("/TableS");
    };
    const handleInputChange = (event) => {
      const value = event.target.value;
      setCodeValue(value);
      
    };
    const handleInputChange2 = (event) => {
      const value = event.target.value;
      setcameraValue(value);
      
    };
    const handleInputChange3 = (event) => {
      const value = event.target.value;
      setnumeValue(value);
      
    };
    const handleInputChange4 = (event) => {
      const value = event.target.value;
      setprenumeValue(value);
      
    };
    const handleInputChange5 = (event) => {
      const value = event.target.value;
      setdataCazareValue(value);
      
    };

    const addTeamMemberToSelectedTeam = async (selectedTeam, teamMember) => {
      const endpoint = `http://localhost:8082/echipa${selectedTeam}/add`;
    
      try {
        const response = await axios.post(endpoint, teamMember);
        console.log(`Added to Echipa${selectedTeam}:`, response.data);
      } catch (error) {
        console.error(`Error adding to Echipa${selectedTeam}:`, error);
      }
    };
  
    const handleAddTeamMember = () => {
      // Add the team member to the list
      setTeams([...teams, { firstName: teamFirstName, lastName: teamLastName, team: selectedTeam }]);
  
      // Clear the input fields
      setTeamFirstName('');
      setTeamLastName('');
  
      // Add the team member to the selected team using the API endpoint
      addTeamMemberToSelectedTeam(selectedTeam, { firstName: teamFirstName, lastName: teamLastName });
    };

  const handleHover = () => {
    setButtonState("hover");
  };

  const handleClick = () => {
    setButtonState("clicked");
  };

  
  const handleFrameToggle = () => {
    console.log("Toggle Frame");
    setIsFrame7Visible(false);
    setIsFrame2Visible(false);
    setIsFrame3Visible(false);
    setIsFrame4Visible(false);
    setIsFrame5Visible(false);
    setIsFrame6Visible(false);
    setIsFrameVisible(!isFrameVisible);

    
  };

  const handleFrame7Toggle = () => {
    console.log("Toggle Frame7");
    setIsFrame2Visible(false);
    setIsFrame3Visible(false);
    setIsFrame4Visible(false);
    setIsFrame5Visible(false);
    setIsFrameVisible(false);
    setIsFrame6Visible(false);
    setIsFrame7Visible(!isFrame7Visible);

    
  };

  const handleFrame6Toggle = () => {
    console.log("Toggle Frame6");
    setIsFrame7Visible(false);
    setIsFrame2Visible(false);
    setIsFrame3Visible(false);
    setIsFrame4Visible(false);
    setIsFrame5Visible(false);
    setIsFrameVisible(false);
    setIsFrame6Visible(!isFrame6Visible);

  };
  const handleFrame2Toggle = () => {
    console.log("Button Clicked!");
    setIsFrame2Visible(!isFrame2Visible);
    setIsFrame4Visible(false);
    setIsFrame3Visible(false);
    setIsFrame5Visible(false);
    setIsFrameVisible(false);
    setIsFrame6Visible(false);
    setIsFrame7Visible(false);
    console.log("isFrame2Visible:", isFrame2Visible);
  };
  
  const handleFrame3Toggle = () => {
    console.log("Button Clicked!");
    setIsFrame2Visible(false);
    setIsFrame4Visible(false);
    setIsFrame5Visible(false);
    setIsFrameVisible(false);
    setIsFrame6Visible(false);
    setIsFrame7Visible(false);
    setIsFrame3Visible(!isFrame3Visible);
    console.log("isFrame3Visible:", isFrame3Visible);
  };
  

  const handleFrame4Toggle = () => {
    console.log("Button Clicked4!");
    setIsFrame2Visible(false);
    setIsFrame3Visible(false);
    setIsFrame5Visible(false);
    setIsFrame4Visible(!isFrame4Visible);
    setIsFrameVisible(false);
    setIsFrame6Visible(false);
    setIsFrame7Visible(false);
    console.log("isFrame4Visible:", isFrame4Visible);
  };

  const handleFrame5Toggle = () => {
    setIsFrame2Visible(false);
    setIsFrame3Visible(false);
    setIsFrame4Visible(false);
    setIsFrameVisible(false);
    setIsFrame6Visible(false);
    setIsFrame7Visible(false);
    console.log("Button Clicked5!");
    setIsFrame5Visible(!isFrame5Visible);
    console.log("isFrame5Visible:", isFrame5Visible);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsFrame10Visible(!isFrame10Visible);
  };

  async function handleAddButtonClick(event) {
    setdataPlecareValue(selectedDepartureDate);
    event.preventDefault();
    console.log(codeValue);
    console.log(selectedDate);
    console.log(numeValue);
    console.log(prenumeValue);
    console.log(new Date().toISOString().split('T')[0]);
    const dateString = selectedDepartureDate.toISOString();
    const splitResult = dateString.split('T');
    const datePart = splitResult[0];
    console.log(datePart);
     try {
      console.log(`Button clicked:add`);
      InfoRoom.code=codeValue;
      InfoRoom.nbCamera=selectedDate;
      InfoRoom.nume=numeValue;
      InfoRoom.prenume=prenumeValue;
      InfoRoom.dataCazare=new Date().toISOString().split('T')[0];
      const dateString = selectedDepartureDate.toISOString();
    const splitResult = dateString.split('T');
    const datePart = splitResult[0];
      InfoRoom.dataPlecare=datePart;
      console.log(InfoRoom);
       await axios.post(`http://localhost:8082/client/add`,InfoRoom);
     } catch (err) {
      
         console.error("An error occurred", err);
         alert("An error occurred");
       }
    }
    useEffect(() => {
      const fetchData = async () => {
        try {
          const clientResponse = await axios.get("http://localhost:8082/client/findRoomsByCurrentDate");
    
          console.log("Veniriiiiii:", clientResponse.data);
    
          // Assuming clientResponse.data is an array of arrivalsRooms
          setArrRooms(clientResponse.data);
        } catch (error) {
          // Handle errors here
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, []);
    
  
     
    useEffect(() => {
      const fetchData = async () => {
        try {
          const clientResponse = await axios.get("http://localhost:8082/client/findRoomsByCurrentDateDeparture");
    
          console.log("Plecariiiiii:", clientResponse.data);
    
          // Assuming clientResponse.data is an array of arrivalsRooms
          setDepRooms(clientResponse.data);
        } catch (error) {
          // Handle errors here
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, []);

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
        const response = await axios.get("http://localhost:8082/sector1/getAll");
        if (response.data && Array.isArray(response.data)) {
          const infoRoomPromises = response.data.map(async (element) => {
            if (element) {
              
            } else {
              console.log("Invalid room number:", element);
              return null;
            }
          });
  
         
          
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sectorResponse = await axios.get("http://localhost:8082/sector1/getAll");
        const clientResponse = await axios.get("http://localhost:8082/client/getAll");
  
        console.log("Sector Response:", sectorResponse.data);
        console.log("Client Response:", clientResponse.data);
  
        if (sectorResponse.data && Array.isArray(sectorResponse.data)) {
          const sectorRooms = sectorResponse.data.map(room => room.roomNumber);
  
          if (clientResponse.data && Array.isArray(clientResponse.data)) {
            const clientRooms = clientResponse.data.map(client => client.nbCamera);
  
            console.log("Sector Rooms:", sectorRooms);
            console.log("Client Rooms:", clientRooms);
  
            // Filter out the rooms that have clients
            const roomsWithoutClients = sectorResponse.data.filter(room => !clientRooms.includes(room));

            setRoomsWithoutClients(roomsWithoutClients);
  
            console.log("Rooms without clients:", roomsWithoutClients);
  
            // Now you can use roomsWithoutClients as needed
          } else {
            console.log("Clients data not available");
          }
        } else {
          console.log("Sector rooms data not available");
        }
      } catch (err) {
        // Handle errors
        if (err.response && err.response.status === 404) {
          console.log("Data not found");
        } else {
          console.error("An error occurred", err);
          alert("An error occurred");
        }
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sector2Response = await axios.get("http://localhost:8082/sector2/getAll");
        const clientResponse = await axios.get("http://localhost:8082/client/getAll");
  
        console.log("Sector Response:", sector2Response.data);
        console.log("Client Response:", clientResponse.data);
  
        if (sector2Response.data && Array.isArray(sector2Response.data)) {
          const sector2Rooms = sector2Response.data.map(room => room.roomNumber);
  
          if (clientResponse.data && Array.isArray(clientResponse.data)) {
            const clientRooms = clientResponse.data.map(client => client.nbCamera);
  
            console.log("Sector2 Rooms:", sector2Rooms);
            console.log("Client2 Rooms:", clientRooms);
  
            // Filter out the rooms that have clients
            const rooms2WithoutClients = sector2Response.data.filter(room => !clientRooms.includes(room));

            set2RoomsWithoutClients(rooms2WithoutClients);
  
            console.log("Rooms2 without clients:", rooms2WithoutClients);
  
            // Now you can use roomsWithoutClients as needed
          } else {
            console.log("Clients2 data not available");
          }
        } else {
          console.log("Sector rooms data not available");
        }
      } catch (err) {
        // Handle errors
        if (err.response && err.response.status === 404) {
          console.log("Data not found");
        } else {
          console.error("An error occurred", err);
          alert("An error occurred");
        }
      }
    };
  
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sector3Response = await axios.get("http://localhost:8082/sector3/getAll");
        const clientResponse = await axios.get("http://localhost:8082/client/getAll");
  
        console.log("Sector Response:", sector3Response.data);
        console.log("Client Response:", clientResponse.data);
  
        if (sector3Response.data && Array.isArray(sector3Response.data)) {
          const sector3Rooms = sector3Response.data.map(room => room.roomNumber);
  
          if (clientResponse.data && Array.isArray(clientResponse.data)) {
            const clientRooms = clientResponse.data.map(client => client.nbCamera);
  
            console.log("Sector2 Rooms:", sector3Rooms);
            console.log("Client2 Rooms:", clientRooms);
  
            // Filter out the rooms that have clients
            const rooms3WithoutClients = sector3Response.data.filter(room => !clientRooms.includes(room));

            set3RoomsWithoutClients(rooms3WithoutClients);
  
            console.log("Rooms3 without clients:", rooms3WithoutClients);
  
            // Now you can use roomsWithoutClients as needed
          } else {
            console.log("Clients3 data not available");
          }
        } else {
          console.log("Sector rooms data not available");
        }
      } catch (err) {
        // Handle errors
        if (err.response && err.response.status === 404) {
          console.log("Data not found");
        } else {
          console.error("An error occurred", err);
          alert("An error occurred");
        }
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sector4Response = await axios.get("http://localhost:8082/sector4/getAll");
        const clientResponse = await axios.get("http://localhost:8082/client/getAll");
  
        console.log("Sector4 Response:", sector4Response.data);
        console.log("Client Response:", clientResponse.data);
  
        if (sector4Response.data && Array.isArray(sector4Response.data)) {
          const sector4Rooms = sector4Response.data.map(room => room.roomNumber);
  
          if (clientResponse.data && Array.isArray(clientResponse.data)) {
            const clientRooms = clientResponse.data.map(client => client.nbCamera);
  
            console.log("Sector4 Rooms:", sector4Rooms);
            console.log("Client4 Rooms:", clientRooms);
  
            // Filter out the rooms that have clients
            const rooms4WithoutClients = sector4Response.data.filter(room => !clientRooms.includes(room));

            set4RoomsWithoutClients(rooms4WithoutClients);
  
            console.log("Rooms4 without clients:", rooms4WithoutClients);
  
            // Now you can use roomsWithoutClients as needed
          } else {
            console.log("Clients4 data not available");
          }
        } else {
          console.log("Sector rooms data not available");
        }
      } catch (err) {
        // Handle errors
        if (err.response && err.response.status === 404) {
          console.log("Data not found");
        } else {
          console.error("An error occurred", err);
          alert("An error occurred");
        }
      }
    };
  
    fetchData();
  }, []);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ... (your existing code)
  
        // Calculate the total count of available rooms
        const totalAvailableRoomsCount =
          roomsWithoutClients.length +
          rooms2WithoutClients.length +
          rooms3WithoutClients.length +
          rooms4WithoutClients.length;
  
        console.log("Total Available Rooms: ", totalAvailableRoomsCount);
        setAvailableRoomsCount(totalAvailableRoomsCount);
  
        // ... (your existing code for other sectors)
      } catch (err) {
        // ... (your existing error handling)
      }
    };
  
    fetchData();
  }, [roomsWithoutClients, rooms2WithoutClients, rooms3WithoutClients, rooms4WithoutClients]);
  
  

  
  
  

  return (
    <div className="managerS">
     
      

      <div className="div-2">
        <div className="overlap">
          <div className="side-menu">

         
          <button className="custom-button button1">EMPLOYEES</button>
          <button className="custom-button button2" onClick={handleNavigation4}>
  SECTOR1
</button>

<button className="custom-button button3" onClick={handleNavigation3}>
  SECTOR2
</button>

            <button className="custom-button button4" onClick={handleNavigation2}>
              SECTOR3
            </button>
            <button className="custom-button button5" onClick={handleFrame5Toggle}>
      TEAMS 
    </button>
    <button className="custom-button button6" onClick={handleNavigation1}>
      SECTOR4
    </button>
             
         
          </div>


          
          <div className="top-navigation" />
          <div className="frame-9">
            <img
              className="admin-logo"
              alt="Admin logo"
              src="https://cdn.animaapp.com/projects/658e94241e7516556beef227/releases/65a1d845755dcb3d3011c4b9/img/admin-logo-1@2x.png"
            />
            <p className="MANAGER">
              <span className="text-wrapper-8">
                {" "}
                <br />
                <br />
                &nbsp;&nbsp;
              </span>
              <span className="text-wrapper-9">MANAGER</span>
            </p>
          </div>
        </div>
        <Frame5 className="frame-5-instance" onToggleFrame={handleFrameToggle} availableRoomsCount={availableRoomsCount}/>
{isFrameVisible && (
  <div className={`custom-frame ${isFrameVisible ? 'visible' : ''}`}>
    {/* Content of the frame */}
    
    <table className="simpleTable">
      <thead>
        <tr>
          <th>SECTOR1</th>
          <th>SECTOR2</th>
          <th>SECTOR3</th>
          <th>SECTOR4</th>

          {/* Add headers for other sectors if needed */}
        </tr>
      </thead>
      <tbody>
  {Array.from({ length: Math.max(roomsWithoutClients.length, rooms2WithoutClients.length, rooms3WithoutClients.length, rooms4WithoutClients.length) }, (_, index) => (
    <tr key={index}>
      <td onClick={() => handleDateClick(roomsWithoutClients[index])}>{index < roomsWithoutClients.length ? roomsWithoutClients[index] : ''}</td>
      <td onClick={() => handleDateClick(rooms2WithoutClients[index])}>{index < rooms2WithoutClients.length ? rooms2WithoutClients[index] : ''}</td>
      <td onClick={() => handleDateClick(rooms3WithoutClients[index])}>{index < rooms3WithoutClients.length ? rooms3WithoutClients[index] : ''}</td>
      <td onClick={() => handleDateClick(rooms4WithoutClients[index])}>{index < rooms4WithoutClients.length ? rooms4WithoutClients[index] : ''}</td>
    </tr>
  ))}
</tbody>
      {/* Add similar blocks for other sectors if needed */}
    </table>
    {/* ... (rest of your component) */}
  </div>
)}

        
<Frame6 className="frame-6-instance" onToggleFrame={handleFrame6Toggle} count={arrivalsRooms.length}/>
        <Frame6 className="frame-6-instance" onToggleFrame={handleFrame6Toggle} count={arrivalsRooms.length} />
      {isFrame6Visible && (
        <div className={`custom-frame6 ${isFrame6Visible ? 'visible6' : ''}`}>
          {/* Content of the frame */
           <div className="table-container">
           <table className="simpleTable">
           <thead>
             <tr>
               <th>ARRIVALS</th>
               
     
               {/* Add headers for other sectors if needed */}
             </tr>
           </thead>
           <tbody>
           {Array.from({ length: Math.max(arrivalsRooms.length) }, (_, index) => (
       <tr key={index}>
         <td>{index < arrivalsRooms.length ? arrivalsRooms[index] : ''}</td>
        
       </tr>
     ))}
     
           </tbody>
           {/* Add similar blocks for other sectors if needed */}
         </table>
         </div>}
        </div>
      )}

<Frame7 className="frame-7-instance" onToggleFrame={handleFrame7Toggle} count={depatureRooms.length}/>
<Frame7 className="frame-7-instance" onToggleFrame={handleFrame7Toggle} count={depatureRooms.length} />

{isFrame7Visible && (
  <div className={`custom-frame6 ${isFrame7Visible ? 'visible7' : ''}`}>
    {/* Content of the frame */}
    <div className="table-container">
      <table className="simpleTable">
        <thead>
          <tr>
            <th>DEPARTURES</th>
            {/* Add headers for other sectors if needed */}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.max(depatureRooms.length) }, (_, index) => (
            <tr key={index}>
              <td>{index < depatureRooms.length ? depatureRooms[index] : ''}</td>
            </tr>
          ))}
        </tbody>
        {/* Add similar blocks for other sectors if needed */}
      </table>
    </div>
  </div>
)}

<div className={`custom-frame2 ${isFrame2Visible ? "visible2" : ""}`}>
  <p style={{ left: "12px", top: "10px" ,fontFamily: "Inter", fontSize: "24px", fontWeight: "bold" }}>
    EMPLOYEES
  </p>
</div>

<div className={`custom-frame3 ${isFrame3Visible ? "visible3" : ""}`}>
  <p style={{ left: "12px", top: "10px" ,fontFamily: "Inter", fontSize: "24px", fontWeight: "bold" }}>
    CLIENTS
  </p>
</div>


<div className={`custom-frame4 ${isFrame4Visible ? "visible4" : ""}`}>
  <p style={{ left: "12px", top: "10px" ,fontFamily: "Inter", fontSize: "24px", fontWeight: "bold" }}>
    ROOMS
  </p>
</div>

<div className={`your-add-teams-container ${isFrame5Visible ? 'visible5' : ''}`}>
      <label>
        First Name:
        <input type="text" value={teamFirstName} onChange={(e) => setTeamFirstName(e.target.value)} />
      </label>

      <label>
        Last Name:
        <input type="text" value={teamLastName} onChange={(e) => setTeamLastName(e.target.value)} />
      </label>

      <label>
        Team:
        <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
          <option value="1">Team 1</option>
          <option value="2">Team 2</option>
          <option value="3">Team 3</option>
          <option value="4">Team 4</option>
        </select>
      </label>

      <button onClick={handleAddTeamMember}>Add Team Member</button>

      {/* Display the added team members */}
      <ul>
        {teams.map((teamMember, index) => (
          <li key={index}>{`${teamMember.firstName} ${teamMember.lastName} - Team ${teamMember.team}`}</li>
        ))}
      </ul>
    </div>

<div className={`custom-frame10 ${isFrame10Visible ? "visible10" : ""}`}>
  <p style={{ left: "12px", top: "10px", fontFamily: "Inter", fontSize: "20px", fontWeight: "bold" }}>
    {selectedDate && `Selected Room: ${selectedDate}`}
  </p>
  <label htmlFor="code" style={{ left: "12px", top: "50px", fontFamily: "Inter", fontSize: "16px" }}>Code:</label>
  <input type="text" id="code" style={{ left: "100px", top: "50px", fontFamily: "Inter", fontSize: "16px",width: "100px"  }}
   value={codeValue}
   onChange={handleInputChange} />
  
  <label htmlFor="roomNumber" style={{ left: "12px", top: "90px", fontFamily: "Inter", fontSize: "16px" }}>Room Number:</label>
  <input type="text" id="roomNumber" style={{ left: "130px", top: "90px", fontFamily: "Inter", fontSize: "16px",width: "100px" }}
   value={selectedDate}
   onChange={handleInputChange2}
   />
  <label htmlFor="nume" style={{ left: "12px", top: "50px", fontFamily: "Inter", fontSize: "16px" }}>Last Name:</label>
  <input type="text" id="code" style={{ left: "100px", top: "50px", fontFamily: "Inter", fontSize: "16px",width: "120px"  }} 
  value={numeValue}
  onChange={handleInputChange3}/>

  <label htmlFor="prenume" style={{ left: "12px", top: "50px", fontFamily: "Inter", fontSize: "16px" }}>First Name:</label>
  <input type="text" id="code" style={{ left: "100px", top: "50px", fontFamily: "Inter", fontSize: "16px",width: "120px"  }} 
  value={prenumeValue}
  onChange={handleInputChange4}/>

  <label htmlFor="arrival" style={{ left: "12px", top: "210px", fontFamily: "Inter", fontSize: "16px" }}>Arrival:</label>
  <input
    type="text"
    id="arrival"
    style={{ left: "100px", top: "210px", fontFamily: "Inter", fontSize: "16px", width: "130px" }}
    value={new Date().toISOString().split('T')[0]}
    onChange={handleInputChange5}
  />

  <label htmlFor="departure" style={{ left: "12px", top: "250px", fontFamily: "Inter", fontSize: "16px" }}>Departure:</label>
  <DatePicker
        selected={selectedDepartureDate}
        onChange={(date) => setSelectedDepartureDate(date)}
        dateFormat="yyyy-MM-dd"
        minDate={new Date()} // Set the minimum selectable date to today
        style={{ left: "100px", top: "250px", fontFamily: "Inter", fontSize: "20px", width: "100px" }}
      />
  <button
        onClick={handleAddButtonClick}
        style={{ position: "absolute", right: "110px", top: "400px", fontFamily: "Inter", fontSize: "16px", padding: "8px" }}
      >
        Add
      </button>
</div>

        
    
        <button
  className={`back-button ${buttonState}`} 
  onMouseEnter={handleHover}
  onMouseLeave={() => setButtonState("default")}
  onClick={handleClick}
  style={{
    position: "fixed",
    bottom: "10px",
    right: "100px",
    zIndex: "809", // Adjust the z-index as needed
    // Add any other styles you want for the back button
  }}
>
  Back
</button>

      </div>
    </div>
  );
};
