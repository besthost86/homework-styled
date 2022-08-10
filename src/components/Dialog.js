import { useState } from "react";
import { styled, InputLabel, MenuItem, FormControl, Select, InputBase, Button, Stack, Divider } from "@mui/material";

import { TECHNOLOGY, SENIORITY } from "../helpers/constants";

const BootstrapInput = styled(InputBase)`
  label + & {
    margin-top: ${props => props.theme.spacing(3)};
  }
  & .MuiIputBase-input {
    border-radius: 4;
    position: relative;
    background-color: ${props => props.theme.palette.background.paper};
    border: 1px solid #ced4d;
    font-size: 16;
    padding: 10px 26px 10px 12px;
    transition: ${props => props.theme.transitions.create(["border-color", "box-shadow"])};
    font-family: ${[
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")};
    &:focus {
      border-radius: 4;
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
`;
const DisplayedDev = styled(Stack)`
align-items: center;
& div {
  margin: 50px;
  & span {
    margin: 15px;
    width: 90px;
  }
`;

export default function Dialog() {
  const [tech, setTech] = useState(0);
  const [seniority, setSeniority] = useState(2);
  const [displayResult, setDisplayResult] = useState(false);

  const handleChange = event => {
    setDisplayResult(false);
    event.target.name === "tech" ? setTech(event.target.value) : setSeniority(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200, marginTop: 2 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native">Technology</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="tech"
          value={tech}
          label="Technology"
          onChange={e => handleChange(e)}
          input={<BootstrapInput />}>
          <MenuItem value={0}>HTML</MenuItem>
          <MenuItem value={1}>CSS</MenuItem>
          <MenuItem value={2}>Javascript</MenuItem>
          <MenuItem value={3}>React</MenuItem>
          <MenuItem value={4}>Node</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 150, marginTop: 2 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native">Seniority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="seniority"
          value={seniority}
          label="Technology"
          onChange={handleChange}
          input={<BootstrapInput />}>
          <MenuItem value={0}>junior</MenuItem>
          <MenuItem value={1}>mid</MenuItem>
          <MenuItem value={2}>senior</MenuItem>
          <MenuItem value={3}>lead</MenuItem>
        </Select>
      </FormControl>
      <DisplayedDev>
        <Button
          variant="contained"
          size="medium"
          sx={{
            maxWidth: 150,
            margin: 1
          }}
          onClick={() => setDisplayResult(true)}>
          OK
        </Button>
        <div style={{ display: displayResult ? "flex" : "none" }}>
          <span>{TECHNOLOGY[tech].toUpperCase()}</span>
          <Divider orientation="vertical" flexItem />
          <span>{SENIORITY[seniority].toUpperCase()}</span>
        </div>
      </DisplayedDev>
    </div>
  );
}
