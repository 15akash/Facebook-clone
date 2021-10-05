import React, { useState, useEffect } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import { useStateValue } from "../StateProvider";
import db from "./firebase";
import {
  collection,
  addDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const docRef = await addDoc(collection(db, "posts"), {
      message: input,
      timestamp: serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender-top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="messageSender-input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender-bottom">
        <div className="messageSender-option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender-option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender-option">
          <InsertEmoticonIcon style={{ color: "yellow" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
