import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useParams } from "react-router-dom";
import "./user.css";
const User = () => {
  const { user } = useParams();
  const [doesCreate, setdoesCreate] = useState(false);
  return (
    <div className="user-area">
      <div className="user-post"></div>
      <div className="create-post">
        <FiPlus className="fi-plus" />
      </div>
      {doesCreate ? (
        <div className="post-text">
          <textarea name="" id=""></textarea>
          <button onClick={sendPost}></button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default User;
