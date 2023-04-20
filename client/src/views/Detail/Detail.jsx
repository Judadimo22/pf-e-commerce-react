import React from "react";
import {
  DriveFileRenameOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  capitalize,
  Card,
  CardActions,
  CardMedia,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  ListItem,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { AdminLayout } from "../../components/Layout/AdminLayout";

import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import axios from "axios";
import { getUserById } from "../../redux/actions";

const validTypes = ["shirts", "pants", "hoodies", "hats"];
const validGender = ["men", "women", "kid"];
const validSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

const ProductAdminPage = (props, { product }) => {
  const [pay, setPay] = useState(false);

  function handlerPay() {
    setPay(true);
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "You need a login",
      showConfirmButton: true,
      //timer: 3000,
    });
  }

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
    if (userState.active === "invalid") window.location.href = "/banned";
  return (
    <AdminLayout
      title={"Creacion de producto"}
      /* subTitle={`Editando: ${product ? product.title : "producto"}`}
         icon={<DriveFileRenameOutline/>} */
    >
      <form>
        <Box display="flex" justifyContent="end" sx={{ mb: 1 }}>
          <Button
            color="secondary"
            startIcon={<SaveOutlined />}
            sx={{ width: "150px" }}
            type="submit"
          >
            Create
          </Button>
        </Box>

        <Grid container spacing={2}>
          {/* Data */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
              // { ...register('name', {
              //     required: 'Este campo es requerido',
              //     minLength: { value: 2, message: 'Mínimo 2 caracteres' }
              // })}
              // error={ !!errors.name }
              // helperText={ errors.name?.message }
            />

            <TextField
              label="Description"
              variant="filled"
              fullWidth
              multiline
              sx={{ mb: 1 }}
            />

            <TextField
              label="Stock"
              type="number"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
            />

            <TextField
              label="Price"
              type="number"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
            />

            <Divider sx={{ my: 1 }} />

            <FormControl sx={{ mb: 1, display: "flex" }}>
              <FormLabel>Type</FormLabel>
              <RadioGroup
                row
                sx={{ alignSelf: "flex-start" }}
                // value={ status }
                // onChange={ onStatusChanged }
              >
                {validTypes.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio color="secondary" />}
                    label={capitalize(option)}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <FormControl sx={{ mb: 1, display: "flex" }}>
              <FormLabel>Categorie</FormLabel>
              <RadioGroup
                row
                sx={{ alignSelf: "flex-start" }}
                // value={ status }
                // onChange={ onStatusChanged }
              >
                {validGender.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio color="secondary" />}
                    label={capitalize(option)}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <FormGroup>
              <FormLabel>Size</FormLabel>
              <FormGroup row>
                {validSizes.map((size) => (
                  <FormControlLabel
                    key={size}
                    control={<Checkbox />}
                    label={size}
                  />
                ))}
              </FormGroup>
            </FormGroup>
          </Grid>

          {/* Tags e imagenes */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Trademark"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
            />

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                listStyle: "none",
                p: 0,
                m: 0,
              }}
              component="ul"
            >
              {product?.tags.map((tag) => {
                return (
                  <Chip
                    key={tag}
                    label="tag"
                    onDelete={() => onDeleteTag(tag)}
                    color="primary"
                    size="small"
                    sx={{ ml: 1, mt: 1 }}
                  />
                );
              })}
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box display="flex" flexDirection="column">
              <FormLabel sx={{ mb: 1 }}>Image</FormLabel>
              <Button
                color="secondary"
                fullWidth
                startIcon={<UploadOutlined />}
                sx={{ mb: 3 }}
              >
                Load Image
              </Button>

              <Chip
                label="Es necesario al 2 imagenes"
                color="error"
                variant="outlined"
              />

              <Grid container spacing={2}>
                {product?.images.map((img) => (
                  <Grid item xs={4} sm={3} key={img}>
                    <Card>
                      <CardMedia
                        component="img"
                        className="fadeIn"
                        image={`/products/${img}`}
                        alt={img}
                      />
                      <CardActions>
                        <Button fullWidth color="error">
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
    </AdminLayout>
  );
};

export default ProductAdminPage;
