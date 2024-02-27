import React, { useState } from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Screen3 = () => {

//   const express = require("express");
// const cors = require("cors");
// const app = express();


// app.use(cors());

// const PORT = 1234;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
  const [code, setCode] = useState("");
  const navigate =useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8082/client/getById/${parseInt(code, 10)}`);
  
      if (response.data && Object.keys(response.data).length > 0) {
         console.log("Employee exists:", response.data);
         alert("Employee exists");
         //query daca in tabelul de InfoRoom exista camera cu codul de sus
        navigate("/MyRoom",{state:{code}});
        
      } else {
        console.log("Employee does not exist");
        alert("Employee does not exist");
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        console.log("Employee not found");
        alert("Employee not found");
      } else {
        console.error("An error occurred", err);
        alert("An error occurred");
      }
    }
  }
  

  return (
    <div className="screen-3">
      <div className="desktop-4">
        <div className="overlap-9">
          <div className="text-wrapper-9">LOGIN</div>
          <img className="line-3" alt="Line" src="/img/line-1.svg" />
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-4">
            <form onSubmit={handleSubmit}>
              <TextBoxComponent
                placeholder="****"
                cssClass="custom-textbox"
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                pattern="\d{4}"
                inputMode="numeric"
                maxLength={4}
                style={{
                  backgroundColor: "#d9d9d9",
                  borderRadius: "40px",
                  boxShadow: "0px 4px 4px #00000040",
                  height: "99px",
                  left: "0",
                  mixBlendMode: "hard-light",
                  position: "absolute",
                  top: "31px",
                  width: "595px",
                  border: "none",
                }}
              />
              <div className="security-code">Security Code</div>
              <button className="btn" type="submit" >
                {" "}
                LOGIN{" "}
              </button>
            
            </form>
            <button className="btn-back" onClick={() => navigate(-1)}>
                {" "}
                BACK{" "}
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};
