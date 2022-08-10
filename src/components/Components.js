import React, { useState } from "react";
import { styled, Button, Slider, Switch, FormControlLabel } from "@mui/material";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;
const CustomSlider = styled(Slider)`
  color: #52af77;
  height: 8px;
  & .MuiSlider-track {
    border: none;
  }
  & .MuiSlider-thumb {
    height: 24px;
    width: 24px;
    background-color: #fff;
    border: 2px solid #52af77;
    &:focus,
    &:hover,
    &.Mui-active,
    &.Mui-focusVisible {
      box-shadow: inherit;
    }
  }
  &:before {
    display: none;
  }
  & .MuiSlider-valueLabel {
    lineheight: 1.2px;
    fontsize: 12px;
    background: unset;
    padding: 0;
    width: 32px;
    height: 32px;
    border-radius: 50% 50% 50% 0;
    background-color: #1565c0;
    transform-origin: bottom left;
    transform: translate(50%, -100%) rotate(-45deg) scale(0);
    &:before {
      display: none;
    }
    &.MuiSlider-valueLabelOpen {
      transform: translate(50%, -100%) rotate(-45deg) scale(1);
    }
    & > * {
      transform: rotate(45deg);
    }
  }
`;

const CustomButton = styled(Button)`
  && {
    color: #ffe900;
    border-color: #ffe900;
    &:hover {
      border: 1px solid #ffaa1d;
      color: #ffaa1d;
    }
  }
`;

const MaterialUISwitch = styled(Switch)`
  width: 62px;
  height: 34px;
  padding: 7px;
  & .MuiSwitch-switchBase {
    margin: 1px;
    padding: 0;
    transform: translateX(6px);
    &.Mui-checked {
      color: #fff;
      transform: translateX(22px);
      & .MuiSwitch-thumb:before {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>');
      }
    }
  }
  & .MuiSwitch-thumb {
    background-color: ${props => (props.switchColor === true ? "#EBDBAC" : "#001e3c")};
    width: 32px;
    height: 32px;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>');
    }
  }
`;

export default function Components() {
  const [lightTheme, setLightTheme] = useState(true);
  return (
    <Container>
      <div>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <CustomButton variant="outlined">Outlined</CustomButton>
      </div>
      <CustomSlider sx={{ width: 400 }} aria-label="Always visible" defaultValue={100} step={10} marks min={0} max={200} valueLabelDisplay="on" />
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} switchColor={lightTheme} onChange={() => setLightTheme(!lightTheme)} />}
        label={lightTheme ? "Light" : "Dark"}
      />
    </Container>
  );
}
