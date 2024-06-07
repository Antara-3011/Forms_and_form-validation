import { useState, useRef } from "react";
import "./app.css";
import FormInput from "./Componenet/FormInput";
function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phonenumber: "",
    country: "",
    city: "",
    pannumber: "",
    adharnumber: "",
  });
  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First name",
      errorMessage: "Put the first name",
      label: "First name",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last name",
      errorMessage: "Put the last name",
      label: "Last name",
      required: true,
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Put the username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "put the email",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage: "Put the Password",
      label: "Password",
      // pattern: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
      required: true,
    },
    {
      id: 6,
      name: "phonenumber",
      type: "text",
      placeholder: "Phone Number",
      errorMessage: "put the phone number",
      label: "Phone Number",
      required: true,
    },
    {
      id: 7,
      name: "country",
      type: "select",
      placeholder: "Country",
      errorMessage: "Put the country",
      label: "Country",
      required: true,
      options: ["USA", "Canada", "India"],
    },
    {
      id: 8,
      name: "city",
      type: "select",
      placeholder: "City",
      errorMessage: "Put the city",
      label: "City",
      required: true,
      options: ["New York", "Toronto", "Mumbai"],
    },
    {
      id: 9,
      name: "pannumber",
      type: "text",
      placeholder: "Pan number",
      errorMessage: "Put the Pan number",
      label: "Pan number",
      required: true,
    },
    {
      id: 10,
      name: "adharnumber",
      type: "text",
      placeholder: "Adhar number",
      errorMessage: "Put the Adhar number",
      label: "Adhar number",
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="app">
      <form>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
