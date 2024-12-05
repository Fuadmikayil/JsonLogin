import React from "react";
import { FiPlus } from "react-icons/fi";
import { useParams } from "react-router-dom";
import "./user.css"
const User = () => {
  const { user } = useParams();

  return (
    <div className="user-area">
      <div className="user-post">

      </div>
      <div className="create-post">
        <FiPlus className="fi-plus"/>
      </div>
    </div>
  );
};

export default User;
