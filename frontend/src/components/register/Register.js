import React, { useState } from "react";
import { useNavigate ,Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [landMark, setLandMark] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");

//   const nav = useNavigate()

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleLandmarkChange = (event) => {
    setLandMark(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const registerUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);
    formData.append("role", role);
    formData.append("address", address);
    formData.append("landMark", landMark);
    formData.append("state", state);
    formData.append("mobile", phone);

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        alert("Your are not registered Something is Wrong");
      } else {
        //seeting the name and token to localStorage
        // localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.data.name));
        localStorage.setItem("userID", JSON.stringify(data.data._id));
        // nav("/");
        alert("You are Registered succeFully")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={registerUser}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label>Role: buyer Or seller</label>
        <input placeholder="type buyer or seller" type="text" value={role} onChange={handleRoleChange} />
      </div>
      <div>
        <label>Mobile Number </label>
        <input  placeholder="type moobile" type="text" value={phone} onChange={handlePhoneChange} />
      </div>
      <div>
        <label>Address</label>
        <input type="text" value={address} onChange={handleAddressChange} />
      </div>
      <div>
        <label>LandMark</label>
        <input type="text" value={landMark} onChange={handleLandmarkChange} />
      </div>
      <div>
        <label>State</label>
        <input type="text" value={state} onChange={handleStateChange} />
      </div>
      <div>
        <label>Profile Picture</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <button type="submit">Register</button>
      <Link to={"/login"}>Go to Login</Link>
    </form>
  );
};

export default Register;
