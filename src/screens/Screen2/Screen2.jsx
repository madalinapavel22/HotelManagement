import React, { useRef } from "react";
import "./style.css";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TableS } from "../TableS/TableS";

export const Screen2 = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;
    console.log("Username:", usernameValue);
    console.log("Password:", passwordValue);

    try {
      const response = await axios.get(
        `http://localhost:8082/repartition/findidRepartition/${passwordValue}`
      );

      if (response.data) {
        const id = parseInt(response.data, 10);
        console.log("Id is:", id);
        if (id === 1) navigate("/TableS", { state: { id } });
        if (id === 2) navigate("/Departament2", { state: { id } });
        if (id === 3) navigate("/Departament3", { state: { id } });
        if (id === 4) navigate("/Departament4", { state: { id } });
      } else {
        console.log("This id does not exist");
        alert("This id does not exist");
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        console.log("Id not found");
        alert("Id not found");
      } else {
        console.error("An error occurred", err);
        alert("An error occurred");
      }
    }
  }

  return (
    <div className="screen-2">
      <div className="desktop-3">
        <div className="overlap-6">
          <div className="text-wrapper-7">LOGIN</div>
          <img className="line-2" alt="Line" src="/img/line-1.svg" />
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
                  marginBottom: "10px", // AdAdjust font size as needed
                }}
              />
              <div className="username">Username</div>
              {/* TextBoxComponent for Password */}
              <TextBoxComponent
                placeholder="********"
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
                  top: "185px", 
                  width: "595px",
                  border: "none",
                  fontSize: "40px", 
                  textAlign: "center",
                }}
                maxLength={8}
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
