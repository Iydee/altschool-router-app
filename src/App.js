import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function NotFound() {
  return (
    <section>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <a className="Nav" href="/">
        Home
      </a>
      <a className="Nav" href="/about">
        About Page
      </a>
      <a className="Nav" href="/user">
        User Page
      </a>
    </section>
  );
}

function Home() {
  return (
    <section className="home-container">
      <h1>Home Page</h1>
      <p>This is the Home Page</p>
      Click below to go to the{" "}
      <a className="Nav" href="/about">
        About Page
      </a>
      You can also click here to go to the{" "}
      <a className="Nav" href="/User">
        User Page
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="about-container">
      <h1>About Page</h1>
      <p>This is the About Page</p>
      Click below to go to the{" "}
      <a className="Nav" href="/">
        Home Page
      </a>
      You can also click here to go to the{" "}
      <a className="Nav" href="/User">
        User Page
      </a>
    </section>
  );
}

function User() {
  // const request = new XMLHttpRequest();
  // request.open("GET", "https://randomuser.me/api/?page=3&results=10&seed=abc");
  // request.send();
  // request.onload = () => {
  //   if (request.status === 200) {
  //     console.log(JSON.parse(request.response));
  //   } else {
  //     console.log("error ${request.response}");
  //   }
  // };

  // var users = request.response;
  // console.log(users);

  // const UsingFetch = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?page=3&results=10&seed=abc")
      .then((response) => {
        // console.log(response.json());
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name[0]}</li>
          ))}
        </ul>
      )}
    </div>
  );
  // }

  // return (
  //   <section className="user-container">
  //     <h1>User Page</h1>
  //     <p>This is the User Page</p>
  //     <div>
  //       {users.length > 0 && (
  //         <ul>
  //           {users.map((user) => (
  //             <li key={user.id}>{user.name}</li>
  //           ))}
  //         </ul>
  //       )}
  //     </div>
  //     Click below to go to the{" "}
  //     <a className="Nav" href="/about">
  //       About Page
  //     </a>
  //     You can also click here to go to the{" "}
  //     <a className="Nav" href="/">
  //       Home Page
  //     </a>
  //   </section>
  // );
}

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
