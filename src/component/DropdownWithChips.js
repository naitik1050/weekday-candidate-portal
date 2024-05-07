import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import { MenuProps } from "../helper/constant";

const DropdownWithChips = ({ data, name, value, onChange }) => {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-single-chip-label">{name}</InputLabel>
        <Select
          labelId="demo-single-chip-label"
          id="demo-single-chip"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          input={<OutlinedInput id="select-single-chip" label={name} />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              <Chip
                label={
                  name === "Min Experience" ? `${selected}` : `${selected}K`
                }
                onDelete={() => onChange("")}
                sx={{ zIndex: 9999 }}
              />
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {data.map((title) => (
            <MenuItem key={title} value={title}>
              {name === "Min Experience" ? `${title}` : `${title}K`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropdownWithChips;
