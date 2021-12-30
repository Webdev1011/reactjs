import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@mui/material";
const PostData = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>Post Data</h1>
      {JSON.stringify(state)}
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" sx={{ marginTop: "20px" }}>
          Back to table
        </Button>
      </Link>
    </div>
  );
};

export default PostData;
