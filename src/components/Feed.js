import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
import { collection, doc, getDocs, orderBy } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const querySnapshot = await getDocs(
      collection(db, "posts"),
      orderBy("timestamp", "desc")
    );
    querySnapshot.forEach((doc) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          timestamp={post.data.timestamp}
          image={post.data.image}
          message={post.data.message}
        />
      ))}
      ;
    </div>
  );
}

export default Feed;
