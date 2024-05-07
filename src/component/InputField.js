import React from "react";
import TextField from "@mui/material/TextField";

export default function InputField({ label, value, onChange }) {
  return (
    <TextField
      sx={{ m: 1, width: 200 }}
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
      fullWidth
    />
  );
}
