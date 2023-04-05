import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function MyProfile() {
  const { user, isAuthenticated } = useAuth0();
  console.log(user)
  const [selectedFile, setSelectedFile] = useState(null);

  function handleOnClick(e) {
    e.preventDefault;
    setuser({
      [e.target.name]: e.target.value,
    });
  }

  function handleFileSelect(files) {
    setSelectedFile(files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(e) {
    e.preventDefault();
    setuser({
      ...user,

      [e.target.name]: e.target.value,
    });
  }

  function onbottonClick(e) {
    e.preventDefault();
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setuser({
      name: user.name,
      email: user.email,
      image: selectedFile,
      lastname: user.lastname,
      active: "valid",
      roll: "user",
    });
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <form className="ml-40 mr-20 text-white  " onSubmit={handleSubmit}>
            <div>
              <img
                src={user.picture}
                width="100px"
                height="100px"
                alt="img not fuound"
              />
              <input
                className="text-primary mt-2"
                onChange={handleInputChange}
                type="file"
                id={user.image}
                name={user.name}
              />
            </div>
            <div className="flex  row space-rounded">
              <div className="mb-4">
                <label
                  className="block text-white-700 font-bold mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded  py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                  key="name"
                  type="text"
                  placeholder={user.given_name}
                  name="name"
                  value={user.given_name}
                />
              </div>
              &nbsp;&nbsp;
              <div className="mb-4">
                <label
                  className="block text-white-700 font-bold mb-2"
                  htmlFor="family_name"
                >
                  Lastname
                </label>
                <input
                  className="shadow appearance-none border rounded  py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
                  key="family_name"
                  id="family_name"
                  type="text"
                  placeholder="family_name"
                  name="family_name"
                  value={user.family_name}
                  onChange={handleInputChange}
                />
              </div>
              &nbsp;&nbsp;
              <div className="mb-4">
                <label
                  className="block text-white-700 font-bold mb-2"
                  for="mail"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded  py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
                  readOnly={true}
                  key="email"
                  type="email"
                  placeholder={user.email}
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex  row space-rounded">
              <div className="mb-4">
                <label
                  className="block text-white-700 font-bold mb-2"
                  for="Kingofperson"
                >
                  Type of person
                </label>
                <select
                  name="kindOfPerson"
                  className=" border rounded  py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                >
                  <option value="natural">natural</option>
                  <option value="business">business</option>
                </select>
              </div>
              &nbsp;&nbsp;&nbsp;
              <div className="mb-4">
                <label
                  className="block text-white-700 font-bold mb-2"
                  for="location"
                >
                  Location
                </label>
                <input
                  className="shadow appearance-none border rounded  py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
                  key="location"
                  id="location"
                  type="text"
                  placeholder={user.location}
                  name="location"
                  value={user.location}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex  row space-rounded">
              <div className="mb-4">
                <label
                  className="block text-white-700 font-bold mb-2"
                  for="document"
                >
                  D.N.I
                </label>
                <input
                  className="shadow appearance-none border rounded py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
                  key="dni"
                  type="number"
                  placeholder={user.dni}
                  name="dni"
                  value={user.dni}
                  onChange={handleInputChange}
                />
              </div>
              &nbsp;&nbsp;
              <div className="mb-4">
                <label
                  className="block text-white-700 font-bold mb-2"
                  for="Phone"
                >
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded  py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
                  id="telephone"
                  type="tel"
                  placeholder={user.telephone}
                  name="telephone"
                  value={user.telephone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="bg-primary" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      ) : (
        <p> there is not information to show</p>
      )}
    </div>
  );
}
