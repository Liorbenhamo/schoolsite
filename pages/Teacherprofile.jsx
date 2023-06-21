import React, { useState } from "react";
import { useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser
} from "@fortawesome/free-solid-svg-icons";

function Teacherprofile() {
  const [message, setMessage] = useState();
  const location = useLocation();
  const { from } = location.state;
  function handlechange(e) {
    setMessage(e.target.value);
  }
  function handleclick() {
    if (JSON.parse(localStorage.getItem(`${from.username}`))) {
      console.log("hi");
      localStorage.setItem(
        from.username,
        JSON.stringify([
          ...JSON.parse(localStorage.getItem(`${from.username}`)),
          message,
        ])
      );
    } else {
      console.log(from.username);
      console.log(JSON.stringify([message]));
      localStorage.setItem(`${from.username}`, JSON.stringify([message]));
    }
  }
  console.log(from);
  return (
    <div>
      <div className="infoandimgstudent1">
        <div className='file-container'>
          <div>
            <img className='image-file' src={from.image} alt={from.name} />
          </div>
          
          <div className='head-file'>{from.name}</div>
          
        
        </div>
        <div className="shalom">
          <h1 ><FontAwesomeIcon icon={faChalkboardUser} />{from.name}</h1>
          <textarea
        
          onChange={(e) => handlechange(e)}
          cols="30"
          rows="10"
        ></textarea>
        <br />
         <button className="button-student" onClick={() => handleclick()}>
          send message to {from.name}
        </button>
        </div>
      </div>
      <div className='teacher-file'>
        
        <br />
       
        <a className="whatsApp" target="_blank" href="https://wa.me/+972528922034">
          <img
            style={{ height: 100 }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"
            alt="to whatapp"
          />
        </a>
      </div>
    </div>
  );
}

export default Teacherprofile;
