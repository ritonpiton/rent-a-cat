import React from 'react';
import './Filter.css';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import {theme} from '../../theme';
import {ThemeProvider} from '@mui/material/styles';

function Filter({ activeItem = 0, onSelectItem, onLoading }) {
  const [activeItemState, setActiveItemState] = React.useState(activeItem);

  const [option, setOption] = React.useState("");

  const options = [
    "Всех",
    "Только свободных",
    "Только забронированных"
  ];

  function handleSelectChange(event) {
    const {
      target: { value },
    } = event;
    setOption(value);
  }

  function handleChange(event) {
    const selectedId = Number(event.currentTarget.id);
    setActiveItemState(selectedId);
    onSelectItem(selectedId);
    onLoading(true);
  }

  return (
    <div className="filter">
      <ThemeProvider theme={theme}>
        <FormControl sx={{ mt: 1, mb: 1, minWidth: 240 }}>
          <InputLabel id="filter-label">Показывать</InputLabel>
          <Select
            labelId="filter-label"
            id="filter-select"
            label="Показывать"
            value={option}
            onChange={handleSelectChange}
          >
            {options.map((item, index) => (
              <MenuItem key={item} value={item} id={index.toString()} onClick={handleChange}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}

export default Filter;
