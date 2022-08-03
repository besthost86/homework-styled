import { useState } from 'react';
import {Link} from 'react-router-dom'

import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';  
import HomeIcon from '@mui/icons-material/Home';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{display: "grid", justifyContent:  "center", alignSelf: "end"}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link} to="/dialog" label="Dialog" icon={<OpenInNewIcon />} />
        <BottomNavigationAction component={Link} to="/components" label="Components" icon={<AppsIcon />} />
      </BottomNavigation>
    </Box>
  );
}
