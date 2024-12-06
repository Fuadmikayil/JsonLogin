import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useParams } from "react-router-dom";
import "./user.css";
import axios from "axios";
const User = () => {
  const { user } = useParams();
  const [doesCreate, setdoesCreate] = useState(false);
  const createPost = () => {
    setdoesCreate(!doesCreate);
  };
  const sendPost = async() => {
    const userPost = {
        userName:user,
        userPost:document.getElementsByTagName("textarea")[0].value
    }
    await(await axios.post("http://localhost:3000/userPosts",userPost)).data
  };
  return (
    <div className="user-area">
      <div className="user-post"></div>
      <div className="create-post">
        <FiPlus className="fi-plus" onClick={createPost} />
      </div>
      {doesCreate ?  <div className="post-text">
          <textarea name="" id=""></textarea>
          <button onClick={sendPost}>Post</button>
        </div>
       : 
        <></>
      }
    </div>
  );
};

export default User;
