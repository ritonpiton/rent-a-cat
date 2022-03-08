import React from "react";
import "./EditCatForm.css";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { theme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

function EditCatForm({ breeds, onAddCat, isOnEditPage }) {
  const { values, isValid, handleChange } = useFormWithValidation({});

  const breedsName = breeds.map((item) => item.nameBreed);

  const colorsArray = ["чёрный", "белый", "серый", "рыжий", "многоцветный"];

  const [color, setColor] = React.useState("");
  const [breed, setBreed] = React.useState("");

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    if ((currentCat) !== undefined ) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleSelectChange(event) {
    const {
      target: { value, name }
    } = event;
    name === "breed-select" ? setBreed(value) : setColor(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddCat({
      nameCat: values.name,
      price: values.price,
      color,
      age: values.age,
      nameBreed: breed,
    });
  }

  return (
    <form className="form">
        <TextField
          sx={{ mt: 1, mb: 1 }}
          id="standard-required"
          variant="standard"
          label="Имя"
          value={values.name || ""}
          type="text"
          name="name"
          onChange={handleChange}
          required
        />

      <TextField
        sx={{ mt: 1, mb: 1 }}
        id="standard-required"
        variant="standard"
        label="Цена за час"
        value={values.price || ""}
        type="number"
        name="price"
        onChange={handleChange}
        required
      />

      <FormControl sx={{ mt: 1, mb: 1 }} variant="standard" required>
        <InputLabel id="breed-label">Порода</InputLabel>
        <Select
          labelId="filter-breed"
          id="breed-select"
          name="breed-select"
          label="Порода"
          value={breed}
          onChange={handleSelectChange}
        >
          {breedsName.map((item) => (
            <MenuItem key={item} value={item} id="breed-select">
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ mt: 1, mb: 1 }} variant="standard" required>
        <InputLabel id="color-label">Цвет</InputLabel>
        <Select
          labelId="filter-color"
          id="color-select"
          name="color-select"
          label="Цвет"
          value={color}
          onChange={handleSelectChange}
        >
          {colorsArray.map((item) => (
            <MenuItem key={item} value={item} id="color-select">
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        sx={{ mt: 1, mb: 1 }}
        id="standard-required"
        variant="standard"
        label="Возраст"
        value={values.age || ""}
        type="number"
        name="age"
        onChange={handleChange}
        required
      />

      <ThemeProvider theme={theme}>
        {isValid ?
          <Button
            sx={{ mt: 1, mb: 1 }}
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
          >
            {isOnEditPage ? "Сохранить" : "Добавить"}
          </Button>
          :
          <Button
            sx={{ mt: 1, mb: 1 }}
            variant="contained"
            color="secondary"
            disabled
          >
            {isOnEditPage ? "Сохранить" : "Добавить"}
          </Button>
        }
      </ThemeProvider>
    </form>
  );
}

export default EditCatForm;