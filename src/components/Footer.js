import React from 'react'

import styled, {ThemeProvider} from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const FooterContainer = styled.div(props => ({
    backgroundColor: "grey",
    display: "grid",
    alignContent: "center",
    gridTemplateColumns: "1fr 1fr",
    gridAutoFlow: "column",
    "& p": {
        color: "snow",
        margin: 0,
        fontFamily: "Saira",
        lineHeight: "40px"
    },
    "& div": {
        display: "flex",
        color: "#D9DAD5",
        margin: 0,
        justifyContent: "center"
    }
}))

const iconTheme = {
    fontSize: 40,
    marginRight: 2
}

export default function Footer({author}) {
  return (
    <FooterContainer>
        <p>{`Made by ${author}`}</p>
        <div>
            <ThemeProvider theme={iconTheme}>
                <FacebookIcon sx={iconTheme}/>
                <GitHubIcon sx={iconTheme}/>
                <GoogleIcon sx={iconTheme}/>
                <TwitterIcon sx={iconTheme}/>
            </ThemeProvider>
        </div>
        </FooterContainer>
  )
}
