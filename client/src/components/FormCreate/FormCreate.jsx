import React, { useState, useEffect } from "react";
import styles from "./formCreate.css/?inline"
import {Link} from "react-router-dom"
import {
  DriveFileRenameOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import {
  Box,
  Typography,
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
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const validTypes = ["shirts", "pants", "hoodies", "hats"];
const validGender = ["men", "women", "kid"];
const validSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

const ProductAdminPage = (props, { product }) => {
  const [errorName, setErrorName] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorStock, setErrorStock] = useState("");
  const [errorPrice, setErrorPrice] = useState("");
  const [errorType, setErrorType] = useState("");
  const [errorCategorie, setErrorCategorie] = useState("");
  const [errorSize, setErrorSize] = useState("");
  const [errorTrademark, setErrorTrademark] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [categorie, setCategorie] = useState("");
  const [size, setSize] = useState("");
  const [trademark, setTrademark] = useState("");
  const [touched, setTouched] = useState(false);
  const regexTrademark = /^[A-Za-z0-9\s.-]+$/g;
  const regex = /^[a-zA-Z ]+$/;

  //    NAME VALIDATE
  const validateName = () => {
    setTouched(true);
    if (name.trim().length === 0) {
      setErrorName("Este campo es requerido");
      setIsValid(false);
    } else if (!regex.test(name)) {
      setErrorName("El nombre solo puede contener letras y espacios");
      setIsValid(false);
    } else if (name.length < 3) {
      setErrorName("El nombre debe tener al menos 3 caracteres");
      setIsValid(false);
    } else {
      setErrorName("");
      setIsValid(true);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.trim().length === 0) {
      setErrorName("Este campo es requerido");
      setIsValid(false);
    } else if (event.target.value.trim().length < 3) {
      setErrorName("El nombre debe tener al menos 3 caracteres");
      setIsValid(false);
    } else {
      setErrorName("");
      setIsValid(true);
    }
  };

  //    DESCRIPTION VALIDATE
  const validateDescription = () => {
    setTouched(true);
    if (description.trim().length === 0) {
      setErrorDescription("Este campo es requerido");
      setIsValid(false);
    } else if (description.length < 5) {
      setErrorDescription("La descripción debe tener al menos 5 caracteres");
      setIsValid(false);
    } else {
      setErrorDescription("");
      setIsValid(true);
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    if (event.target.value.trim().length === 0) {
      setErrorDescription("Este campo es requerido");
      setIsValid(false);
    } else if (event.target.value.trim().length < 5) {
      setErrorDescription("La descripción debe tener al menos 5 caracteres");
      setIsValid(false);
    } else {
      setErrorDescription("");
      setIsValid(true);
    }
  };

  //    STOCK VALIDATE
  const validateStock = () => {
    setTouched(true);
    if (stock.trim().length === 0) {
      setErrorStock("Este campo es requerido");
      setIsValid(false);
    } else if (stock == 0) {
      setErrorStock("El stock debe ser mayor a cero");
      setIsValid(false);
    } else if (stock > 1000) {
      setErrorStock("El stock no puede superar 1000 unidades");
      setIsValid(false);
    } else {
      setErrorStock("");
      setIsValid(true);
    }
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
    if (event.target.value.trim().length === 0) {
      setErrorStock("Este campo es requerido");
      setIsValid(false);
    } else if (event.target.value == 0) {
      setErrorStock("El stock debe ser mayor a cero");
      setIsValid(false);
    } else if (event.target.value > 1000) {
      setErrorStock("El stock no puede superar 1000 unidades");
      setIsValid(false);
    } else {
      setErrorStock("");
      setIsValid(true);
    }
  };

  //    PRICE VALIDATE
  const validatePrice = () => {
    setTouched(true);
    if (price.trim().length === 0) {
      setErrorPrice("Este campo es requerido");
      setIsValid(false);
    } else if (price == 0) {
      setErrorPrice("El precio debe ser mayor a cero");
      setIsValid(false);
    } else if (price > 999999) {
      setErrorPrice("El precio no puede superar un valor de $999999");
      setIsValid(false);
    } else {
      setErrorPrice("");
      setIsValid(true);
    }
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    if (event.target.value.trim().length === 0) {
      setErrorPrice("Este campo es requerido");
      setIsValid(false);
    } else if (event.target.value == 0) {
      setErrorPrice("El precio debe ser mayor a cero");
      setIsValid(false);
    } else if (event.target.value > 999999) {
      setErrorPrice("El precio no puede superar un valor de $999999");
      setIsValid(false);
    } else {
      setErrorPrice("");
      setIsValid(true);
    }
  };

  //  TRADEMARK VALIDATION
  const validateTrademark = () => {
    setTouched(true);
    if (trademark.trim().length === 0) {
      setErrorTrademark("Este campo es requerido");
      setIsValid(false);
    } else if (!regexTrademark.test(trademark)) {
      setErrorTrademark("Introduzca una marca de ropa válida");
      setIsValid(false);
    } else if (trademark.length <= 1) {
      setErrorTrademark("El nombre debe tener al menos 1 caracter");
      setIsValid(false);
    } else {
      setErrorTrademark("");
      setIsValid(true);
    }
  };

  const handleTrademarkChange = (event) => {
    setTrademark(event.target.value);
    if (event.target.value.trim().length === 0) {
      setErrorTrademark("Este campo es requerido");
      setIsValid(false);
    } else if (event.target.value.trim().length <= 1) {
      setErrorTrademark("El nombre debe tener al menos 1 caracter");
      setIsValid(false);
    } else {
      setErrorTrademark("");
      setIsValid(true);
    }
  };

  //  IMAGE VALIDATION
  const validateImages = () => {
    if (product?.images.length < 2) {
      return "Debe subir al menos 2 imágenes";
    }
  };

  //SUBMIT VALIDATION
  const handleSubmit = (event) => {
    event.preventDefault();
    const error = validateImages();
    // Validar text
    if(!name) {
      setErrorName("Este campo es requerido")
      return
    }
    if(!description) {
      setErrorDescription("Este campo es requerido")
      return
    }
    if(!stock) {
      setErrorStock("Este campo es requerido")
      return
    }
    if(!price) {
      setErrorPrice("Este campo es requerido")
      return
    }
    // Validar checks
    if (!type) {
      setErrorType("Debe seleccionar un tipo");
      return;
    }
    if (!categorie) {
      setErrorCategorie("Debe de seleccionar una categoria");
      return;
    }
    if (!size) {
      setErrorSize("Debe de seleccionar un talle");
      return;
    }
    // Validar image
    if (error) {
      setErrorImages(error);
      return;
    }
    // Enviar formulario
    // ...
  };

  return (
    <AdminLayout
      title={"Creacion de producto"}
      /* subTitle={`Editando: ${product ? product.title : "producto"}`}
         icon={<DriveFileRenameOutline/>} */
    >
      <form onSubmit={handleSubmit}>
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
              onBlur={validateName}
              onChange={handleNameChange}
              value={name}
              error={errorName !== "" && touched}
              helperText={touched ? errorName : ""}
              autoComplete="off"
              required
              // { ...register('name', {
              //     required: 'Este campo es requerido',
              //     minLength: { value: 2, message: 'MÃ­nimo 2 caracteres' }
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
              onBlur={validateDescription}
              onChange={handleDescriptionChange}
              value={description}
              error={errorDescription !== "" && touched}
              helperText={touched ? errorDescription : ""}
              autoComplete="off"
              required
            />

            <TextField
              label="Stock"
              type="number"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
              inputProps={{ min: 1 }}
              onBlur={validateStock}
              onChange={handleStockChange}
              value={stock}
              error={errorStock !== "" && touched}
              helperText={touched ? errorStock : ""}
              autoComplete="off"
              required
            />

            <TextField
              label="Price"
              type="number"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
              inputProps={{ min: 1 }}
              onBlur={validatePrice}
              onChange={handlePriceChange}
              value={price}
              error={errorPrice !== "" && touched}
              helperText={touched ? errorPrice : ""}
              autoComplete="off"
              required
            />

            <Divider sx={{ my: 1 }} />

            <FormControl sx={{ mb: 1, display: "flex" }}>
              <FormLabel>Type</FormLabel>
              <RadioGroup
                row
                sx={{ alignSelf: "flex-start" }}
                value={type}
                onChange={(event) => {
                  setType(event.target.value);
                  setErrorType(null); // restablecer errorType cuando se selecciona una opción válida
                }}
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
              {errorType && (
                <Typography color="error" sx={{ mb: 1 }}>
                  {errorType}
                </Typography>
              )}
            </FormControl>

            <FormControl sx={{ mb: 1, display: "flex" }}>
              <FormLabel>Categorie</FormLabel>
              <RadioGroup
                row
                sx={{ alignSelf: "flex-start" }}
                value={categorie}
                onChange={(event) => {
                  setCategorie(event.target.value);
                  setErrorCategorie(null);
                }}
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
              {errorCategorie && (
                <Typography color="error" sx={{ mb: 1 }}>
                  {errorCategorie}
                </Typography>
              )}
            </FormControl>

            <FormGroup>
              <FormLabel>Size</FormLabel>
              <FormGroup
                row
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                  setErrorSize(null);
                }}
              >
                {validSizes.map((size) => (
                  <FormControlLabel
                    key={size}
                    control={<Checkbox />}
                    label={size}
                  />
                ))}
              </FormGroup>
            </FormGroup>
            {errorSize && (
              <Typography color="error" sx={{ mb: 1 }}>
                {errorSize}
              </Typography>
            )}
          </Grid>

          {/* Tags e imagenes */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Trademark"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
              onBlur={validateTrademark}
              onChange={handleTrademarkChange}
              value={trademark}
              error={errorTrademark !== "" && touched}
              helperText={touched ? errorTrademark : ""}
              autoComplete="off"
              required
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
                  <Grid2 item xs={4} sm={3} key={img}>
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
                  </Grid2>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
      <div className={styles.button_back}>
                    <Link to={`/home`}> 
                        <button>
                          <span className={styles.icon}>
                            ⬅️
                          </span>
                          <span className={styles.label}>atras</span>
                        </button>
                    </Link>
                </div>
    </AdminLayout>
  );
};

export default ProductAdminPage;
