import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import { MenuProps } from "../helper/constant";

const MultiselectWithChips = ({ data, name, value, onChange }) => {
  const handleDelete = (dataToDelete) => {
    const newValue = value.filter((v) => v !== dataToDelete);
    onChange(newValue);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-chip-label">{name}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={value}
          onChange={(e) => onChange(e.target.value)}
          input={<OutlinedInput id="select-multiple-chip" label={name} />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
              {selected.map((data) => (
                <Chip
                  key={data}
                  label={data}
                  onDelete={() => handleDelete(data)}
                  sx={{ zIndex: 9999 }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {data
            .filter((title) => !value.includes(title))
            .map((title) => (
              <MenuItem key={title} value={title}>
                {title}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultiselectWithChips;
