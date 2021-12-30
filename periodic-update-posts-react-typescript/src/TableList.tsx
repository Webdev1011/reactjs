import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
const TableList: React.FC = () => {
  interface objPost {
    id: number;
    title: string;
    url: string;
    created_at: Date;
    author: string;
  }
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
    const interval = setInterval(() => {
      setLastPageNumber((prevState) => prevState + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [lastPageNumber]);
  const columns = [
    { field: "title", headerName: "TITLE", width: 350 },
    {
      field: "url",
      headerName: "URL",
      width: 350,
    },
    {
      field: "created_at",
      headerName: "CREATED AT",
      width: 200,
    },
    {
      field: "author",
      headerName: "Author",
      width: 150,
    },
  ];
  const navigate = useNavigate();
  return posts.length > 0 ? (
    <div style={{ height: "60vh", width: "70%" }}>
      <h1>Posts</h1>
      <DataGrid
        rows={posts}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        onRowClick={(params) => {
          navigate(`/show/row/json/${params.id}`, { state: params.row });
        }}
      />
    </div>
  ) : (
    <h1>Loading</h1>
  );
};

export default TableList;
