import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const { isAuthenticated, user } = useAuth0();
// aqui se recibe el body
const email = user.email;