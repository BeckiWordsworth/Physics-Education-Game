import React, { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newUserAdded, setNewUserAdded] = useState(false);

  const handleFormUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();

    const userDetails = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.created === true) {
          console.log("Success:", JSON.stringify(result));
          this.setState({
            newUserAdded: true,
          });
        } else {
          console.log("Failure:", JSON.stringify(result));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h4>CREATE A NEW ACCOUNT</h4>
      <form className="signupForm" onSubmit={submitForm}>
        <label htmlFor="username">Username: </label>
        <input name="username" type="text" onChange={handleFormUpdate} />
        <br />
        <label htmlFor="emal">Email address: </label>
        <input name="email" type="text" onChange={handleFormUpdate} />
        <br />
        <label htmlFor="password">Password: </label>
        <input name="password" type="password" onChange={handleFormUpdate} />
        <br />
        <button type="submit">Submit</button>
      </form>
      {this.state.newUserAdded ? <p>New user added. Welcome! Please check your email.</p> : <p />}
    </div>
  );
};

export default SignUpForm;
