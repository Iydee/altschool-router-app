import "./App.css";
import { Route, Routes } from "react-router-dom";
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
      Click{" "}
      <a className="Nav" href="/about">
        About Page
      </a>{" "}
      to go to the About Page. You can also click{" "}
      <a className="Nav" href="/User">
        User Page
      </a>{" "}
      to go to the User Page.
    </section>
  );
}

function About() {
  return (
    <section className="about-container">
      <h1>About Page</h1>
      <p>This is the About Page</p>
      Click{" "}
      <a className="Nav" href="/">
        Home Page
      </a>{" "}
      to go to the HomePage. You can also click{" "}
      <a className="Nav" href="/User">
        User Page
      </a>{" "}
      to go to the User Page.
    </section>
  );
}

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   // componentDidCatch(error, errorInfo) {
//   //   logErrorToMyService(error, errorInfo);
//   // }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children;
//   }
// }

function User() {
  const [users, setUsers] = useState();
  const [data, setData] = useState(0);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=3&results=10&seed=abc")
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  const handleNext = (event) => {
    event.preventDefault();
  };

  const handlePrevious = (event) => {
    event.preventDefault();
  };

  // const UsingFetch = () => {

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => {
        // console.log(response.json());
        return response.json();
      })
      .then((response) => {
        // console.log(response.results);
        setUsers(response.results);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="card">
      <h1>User Page</h1>
      <p>This is the User Page</p>
      Click
      <a className="Nav" href="/about">
        About Page
      </a>{" "}
      to go to the About Page. You can also click here to go to the
      <a className="Nav" href="/">
        Home Page
      </a>{" "}
      to go to the HomePage.
      {users.length > 0 && (
        <div class="container">
          {users.map((user) => (
            <div className="box" key={user.id.name}>
              <b>
                Name: {user.name.title} {user.name.first} {user.name.last}
              </b>
              <p>
                {" "}
                DOB: {user.dob.age} Gender: {user.gender}
              </p>
              <p>Email: {user.email}</p>
              <p>Phone No: {user.phone}</p>
            </div>
          ))}
        </div>
      )}
      <button className="Nav" onClick={handlePrevious}>
        Previous
      </button>
      <button className="Nav" conclick={handleNext}>
        Next
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <ErrorBoundary> */}
            <Route path="/user" element={<User />} />
          {/* </ErrorBoundary> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
