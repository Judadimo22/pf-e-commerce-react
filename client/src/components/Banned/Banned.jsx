import { useAuth0 } from "@auth0/auth0-react";
import { Box, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserById } from "../../redux/actions";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";



const Banned = () => {

    const { isAuthenticated, user, logout } = useAuth0();
const [infoUser, setInfoUser] = useState({});
const userState = useSelector((state) => state.user);

useEffect(() => {
    if (user && isAuthenticated) {
      axios
        .get("https://backend-pf-uh1o.onrender.com/users")
        .then((element) => {
          const userDb = element.data.find(
            (element) => element.email === user.email
          );
          if (!userDb) {
            const newUser = {
              name: user.given_name,
              lastname: user.family_name,
              email: user.email,
            };

            console.log(newUser);
            dispatch(createUser(newUser));
          } else {
            setInfoUser(userDb);
          }
          if (!userState.length) dispatch(getUserById(userDb._id));s
        });
    }
  }, [user]);
  if (userState.active === "valid") window.location.href = "/";
    return(
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5'
          }}>
            <Typography variant="h4" align="center" style={{ marginBottom: '16px' }}>
              Oops! you have been banned.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/"
              style={{ marginTop: '16px' }}
            >
              Go to homepage
            </Button>
          </div>
    )
};

export default Banned;