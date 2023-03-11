import React from "react";
import Navbar from "../../components/navbar/Navbar";
import AddBook from "../../components/AddBook";

function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="px-8 py-5 text-lg">Keep track of borrowed library books by adding them to your book roster!</h1>
      <div className="grid grid-cols-4 gap-4 overflow-y-auto">
        <AddBook/>
      </div>
    </div>
  )
}

export default Home;
