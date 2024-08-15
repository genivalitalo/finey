import { AppBar, Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box width="100dvw">
      <AppBar
        component="header"
        sx={{
          height: "60px",
          position: "static",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          padding: "14px 40px",
          backgroundColor: 'white'
        }}
      >
        <Typography fontSize='large' fontWeight='500' color='black'>Olá, Italo Silva 👋</Typography>
      </AppBar>
    </Box>
  );
}

export default Header;
