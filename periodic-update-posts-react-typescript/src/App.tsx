import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TableList from "./TableList";

interface objPost {
  id: number;
  title: string;
  url: string;
  created_at: Date;
  author: string;
}

export interface TablePorps {
  posts: objPost[];
}

const App = () => {
  const [lastPageNumber, setLastPageNumber] = useState<number>(0);
  const [posts, setPosts] = useState<objPost[]>([]);
  const getPosts = async () => {
    await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${lastPageNumber}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.hasOwnProperty("hits") && json.hits.length > 0) {
          json.hits.map((post: any) => {
            const tmp = {
              id: post.objectID,
              title: post.title,
              url: post.url,
              created_at: new Date(post.created_at),
              author: post.author,
            };
            setPosts((prevState) => [...prevState, tmp]);
          });
        }
      })
      .catch((error) => {
        alert("Posts Finished");
      });
  };
  useEffect(() => {
    getPosts();
    const periodic_calls = setInterval(() => {
      setLastPageNumber((prevState) => prevState + 1);
    }, 10000);
    return () => clearInterval(periodic_calls);
  }, [lastPageNumber]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TableList posts={posts} />} />
        </Routes>
      </Router>
      <div>
        <h1>Posts</h1>
      </div>
    </div>
  );
};

export default App;
