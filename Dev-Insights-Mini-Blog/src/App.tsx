import React from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <h1>Latest from the team</h1>
        <PostList />
      </main>
    </div>
  );
};

export default App;
