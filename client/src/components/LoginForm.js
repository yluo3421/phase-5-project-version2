import React , {useState} from 'react'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // the <Error> is not supported by bootstrap.
  // const [errors, setErrors] = useState([]);
  // if we dont want to show loading we dont need the state and any set state within handleSubmit
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      // setIsLoading(false);
      if (r.ok) {
        // r.json().then((user) => onLogin(user));
        console.log("i work");
      } else {
        console.log("i dont work");
        // r.json().then((err) => console.log(err.errors)); //setErrors(err.errors)
      }
    });
  }

  // controlId="formBasicUsername"
  // controlId = "formBasicPassword";

  return (
    <Form as={Row} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter your username"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      {/* I pull this part in only to use the Error but it seems the formatting changes with bootstrap */}
      {/* <Form.Group>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </Form.Group> */}
    </Form>
  );
}

export default LoginForm