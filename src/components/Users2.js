import React, { useState, useEffect } from "react";
import './Users2.css';

const User2 = () => {
  const [data, setData] = useState([]);
  //array.slice(begin, end);
  const newData = data.slice(0, 12);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    fetch("https://localhost/FakeDB")
      .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((json) => setData(json));
  }, []);

  const onClickhandler = () => {
    setShowData(!showData);
  };
  
  return (
    <div>
      <h1>FakeDB</h1>
      <ul>
        {newData.map((item) => {
          return showData ? (
            <li style={{ listStyle: "none", marginTop: "10px" }} 
            key={item.id}>
              Username: {item.username}
            </li>
          ) : (
            ""
          );
        })}
      </ul>
      <button className="Button" onClick = {onClickhandler}>
        show
        {/* {showData ? "Hide" : "Show"} */}
      </button>
    </div>
  );
};

export default User2;