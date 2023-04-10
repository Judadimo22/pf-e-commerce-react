/*import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../NavBar/NavBar";

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
    <NavBar/>
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
}*/

import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import {
  putUser,
} from "../../redux/actions/index"
import Swal from "sweetalert2";
import { TbUserCircle } from "react-icons/tb";


export default function MyProfile() {
  const dispatch = useDispatch();
  const userDB = useSelector((state) => state.allUsers);
  //const userIdRender = useSelector(state => state.userRender);
  const { user, isAuthenticated } = useAuth0();

  const [selectedFile, setSelectedFile] = useState(null);

  //const [render, setRender] = useState([]);

  // useEffect(() => {
  //   if (isAuthenticated && userDB.length > 0) {
  //     dispatch(userRender(user.email));
  //   }
  // }, [!userIdRender.length]);

  // const userId = userIdRender._id;

  if (isAuthenticated && userDB.length > 0) {
    var aux = userDB.find((e) => e.email === user.email);
    console.log(aux);
    var userid = aux._id;
    var userName = aux.name;
    var userLastname = aux.lastname;
    var userLocation = aux.location;
    var userDni = aux.dni;
    var userKingofperson = aux.kindOfPerson;
    var userTelephone = aux.telephone;
    var userImage = aux.image;
    var userEmail = aux.email;
  }

  const [users, setUsers] = useState({
    image: "" || userImage,
    name: "" || userName,
    lastname: "" || userLastname,
    kindOfPerson: "natural" || userKingofperson,
    email: userEmail,
    location: "" || userLocation,
    dni: "" || userDni,
    telephone: "" || userTelephone,
    active: "",
    rol: "",
  });

  function handleOnClick(e) {
    e.preventDefault;
    setUsers({
      [e.target.name]: e.target.value,
    });
  }

  function handleFileSelect(files) {
    setSelectedFile(files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Aquí puedes enviar el archivo a tu servidor utilizando fetch, axios, etc.
  }

  function handleInputChange(e) {
    e.preventDefault();
    setUsers({
      ...users,

      [e.target.name]: e.target.value,
    });
  }

  function onbottonClick(e) {
    e.preventDefault();
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setUsers({
      name: users.name,
      email: users.email,
      image: selectedFile,
      dni: users.dni,
      lastname: users.lastname,
      telephone: users.telephone,
      location: users.location,
      kindOfPerson: users.kindOfPerson,
      active: "valid",
      roll: "user",
    });
    // const infoUsertopost = {

    // }
    // console.log(infoUsertopost)
    console.log(users);
    dispatch(putUser(userid, users));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your profile has been updated",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  return (
    <div>
{/*       {isAuthenticated ? (
 */}        <div>
          <form className="ml-40 mr-20 text-white  " onSubmit={handleSubmit}>
            <div>
              <img
                src={user?.picture ? user?.picture : TbUserCircle}
                width="100px"
                height="100px"
                alt="img not fuound"
              />
              <input
                className="text-primary mt-2"
                onChange={handleInputChange}
                type="file"
                id={user?.picture}
                name={user?.picture}
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
                  placeholder={users.name}
                  name="name"
                  value={users.name}
                />
              </div>
              &nbsp;&nbsp;
              <div className="mb-4">
                <label
                  className="block text-white-700 font-bold mb-2"
                  htmlFor="lastname"
                >
                  Lastname
                </label>
                <input
                  className="shadow appearance-none border rounded  py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
                  key="lastname"
                  id="lastname"
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  value={users.lastname}
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
                  value={users.email}
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
                  placeholder={users.location}
                  name="location"
                  value={users.location}
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
                  placeholder={users.dni}
                  name="dni"
                  value={users.dni}
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
                  placeholder={users.telephone}
                  name="telephone"
                  value={users.telephone}
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
{/*       ) : (
        <p> there is not information to show</p>
      )}
 */}    </div>
  );
}

