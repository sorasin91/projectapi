import React, { useState } from "react";
import "./App.css";

function UserApi() {
  // State variables to handle input and user data
  const [id, setId] = useState(""); // Holds the user ID input

  const [username, setUsername] = useState(null); // Holds user data fetched from API

  // Function to fetch user data from the API
  const fetchdata = async () => {
    try {
      // Fetch data based on the entered user ID
      const response = await fetch(`https://fakestoreapi.com/users/${id}`);
      const data = await response.json();
      setUsername(data); // Set fetched user data into the state
    } catch (error) {
      console.error("Error fetching user data:", error); // Log error if data fetching fails
    }
  };
  // Render the component
  return (
    <div className="container">
      <div>
        {/* Title for the user search */}
        <h1>Search User by Id</h1>
        <div className="form">
          {/* Input field to enter the user ID */}
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)} // Update ID state with input value
          />
          {/* Button to trigger the fetchdata function */}
          <button onClick={fetchdata}>Search</button>
        </div>
          {/* Display user details if available */}
        {username && (
          <div className="user-details">
             {/* Display fetched user details */}
            <p>Id: {username.id}</p>
            <p>First Name: {username.name.firstname}</p>
            <p>Last Name: {username.name.lastname}</p>
            <p>Email: {username.email}</p>
            <p>Phone: {username.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserApi;
