import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username required.");
      return;
    }
    if (!email) {
      setErrors("Emailrequired.");
      return;
    }
    if (!password) {
      setErrors("Password is required.");
      return;
    }
    setErrors("");

    console.log("Form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Name...."
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email...."
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password...."
      />
      {error && <p style={{ color: "red" }}>{errors}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
