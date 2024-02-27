import React, { useRef } from "react";
import "./style.css";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Desktop = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;
    console.log("Username:", usernameValue);
    console.log("Password:", passwordValue);
    const apiUrl = 'http://localhost:8082/manager/getByPass';
  
    try {
      const response = await axios.get(apiUrl, {
        params: {
          password: passwordValue
        }
      });
  
      if (response.data && Object.keys(response.data).length > 0) {
        navigate("/ManagerS");
         console.log("Manager exists:", response.data);
         alert("Manager exists");
        
        
      } else {
        navigate("/ManagerS");
        console.log("Manager does not exist");
        alert("Manager does not exist");
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        console.log("Manager not found");
        alert("Manager not found");
      } else {
        navigate("/ManagerS");
        console.error("An error occurred", err);
        alert("An error occurred");
      }
    }
  };
  return (
    <div className="desktop">
      <div className="div-2">
        <div className="overlap-group-2">
          <div className="text-wrapper-3">LOGIN</div>
          <img className="line" alt="Line" src="/img/line-1.svg" />
        </div>
       
        <div className="overlap-group-wrapper">
          <div className="overlap-group-4">
            <form onSubmit={handleSubmit}>
              {/* TextBoxComponent for Username */}
              <TextBoxComponent
                placeholder=""
                cssClass="custom-textbox"
                ref={usernameRef}
                style={{
                  backgroundColor: "#d9d9d9",
                  borderRadius: "40px",
                  boxShadow: "0px 4px 4px #00000040",
                  height: "99px",
                  left: "0",
                  mixBlendMode: "hard-light",
                  position: "absolute",
                  top: "11px",
                  width: "595px",
                  border: "none",
                  fontSize:"40px",
                  textAlign: "center",
                  marginBottom: "10px", // Adjust margin as needed
                }}
              />
 <div className="username">Username</div>
              {/* TextBoxComponent for Password */}
              <TextBoxComponent
                placeholder="**"
                cssClass="custom-textbox"
                type="password"
                ref={passwordRef}
                style={{
                  backgroundColor: "#d9d9d9",
                  borderRadius: "40px",
                  boxShadow: "0px 4px 4px #00000040",
                  height: "99px",
                  left: "0",
                  mixBlendMode: "hard-light",
                  position: "absolute",
                  top: "185px", // Adjust top position based on your layout
                  width: "595px",
                  border: "none",
                  fontSize:"40px",
                  textAlign: "center",
                }}
              />
              <div className="password">Password</div>

              <button className="btn" type="submit">
                LOGIN
              </button>
            </form>
             <button className="btn-back" onClick={() => navigate(-1)}>
                BACK
              </button> 
          </div>
        </div>
      </div>
    </div>
  );
};