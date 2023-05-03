import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signupform() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setPhoneno] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    axios
      .post("http://localhost:5000/api/post", {
        username,
        email,
        password,
        phoneno,
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => history.push("/"), 500);
  };

  return (
    <div>
      <center>
        <h3>SignUp form </h3>

        {/* username */}
        <form onSubmit={handleSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type={"text"}
            required
            placeholder="User Name"
          />
          <br></br>

          {/* email */}
          <input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            type={"text"}
            placeholder="Your Email"
          />
          <br></br>

          {/* password */}
          <input
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            placeholder="Password"
          />
          <br></br>

          {/* phone number */}
          <input
            required
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
            type={"text"}
            placeholder="phone Number"
          />
          <br></br>

          <button>SignUp</button>
        </form>
        <br></br>
        <br></br>
      </center>
    </div>
  );
}

export default Signupform;
