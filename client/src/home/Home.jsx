import React from "react";
import Navbar from "../navbar/Navbar";
import AddBook from "./AddBook";

function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="px-8 py-5 text-lg">Keep track of borrowed library books by adding them to your book roster!</h1>
      <div className="grid grid-columns-4 grid-flow-col gap-4">
        <AddBook/>
      </div>
    </div>
  )
}

export default Home;
