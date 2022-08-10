import styled, { ThemeProvider } from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

const FooterContainer = styled.div`
  background-color: grey;
  display: grid;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  & p {
    color: snow;
    margin: 0;
    font-family: Saira;
    line-height: 40px;
  }
  & div {
    display: flex;
    color: #d9dad5;
    margin: 0;
    justify-content: center;
  }
`;

const iconTheme = {
  fontSize: 40,
  marginRight: 2
};

export default function Footer({ author }) {
  return (
    <FooterContainer>
      <p>{`Made by ${author}`}</p>
      <div>
        <ThemeProvider theme={iconTheme}>
          <FacebookIcon sx={iconTheme} />
          <GitHubIcon sx={iconTheme} />
          <GoogleIcon sx={iconTheme} />
          <TwitterIcon sx={iconTheme} />
        </ThemeProvider>
      </div>
    </FooterContainer>
  );
}
