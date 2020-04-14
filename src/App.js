/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import data from "./dummy-data"
import PostsPage from "./components/PostsContainer/PostsPage"
import SearchBar from "./components/SearchBar/SearchBarContainer"
import CommentSection from "./components/CommentSection/CommentSectionContainer"
// import the PostsPage and SearchBar and add them to the App

const App = () => {

  const comments = [data[0].comments, data[1].comments]
  console.log(data)

  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar />
      <PostsPage comments={comments}/>
      <CommentSection />

    </div>
  );
};

export default App;
