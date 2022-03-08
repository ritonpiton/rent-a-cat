import React from 'react';
import './Filter.css';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import {theme} from '../../theme';
import {ThemeProvider} from '@mui/material/styles';

function Filter({ activeItem = 0, onSelectItem }) {
  const [activeItemState, setActiveItemState] = React.useState(activeItem);

  const options = [
    'Всех',
    'Только свободных',
    'Только забронированных'
  ];

  function handleChange(event) {
    const selectedId = Number(event.currentTarget.id);
    setActiveItemState(selectedId);
    onSelectItem(selectedId);
  }

  return (
    <div className="filter">
      <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 1, minWidth: 320 }}>
          <InputLabel id="filter-label">Показывать</InputLabel>
          <Select
            labelId="filter-label"
            id="filter-select"
            label="Показывать"
            value=""
          >
            {options.map((item, index) => (
              <MenuItem
                key={item}
                value=""
                id={index.toString()}
                onClick={handleChange}
              >
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
