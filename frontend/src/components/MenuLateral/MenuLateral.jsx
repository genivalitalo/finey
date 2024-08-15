import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import Logo from "../../assets/Logo/logo.png";
import {
  BookUser,
  ChartArea,
  WalletMinimal,
  ChevronRight,
  Receipt,
  Bolt,
} from "lucide-react";

function MenuLateral() {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "100%" }}>
      <List component="div" sx={{ width: "100%" }}>
        <ListItem component="li">
          <ListItemButton
            sx={{
              color: "white",
              borderRadius: "6px",
              "&:hover": { backgroundColor: "#4338CA" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, marginRight: "14px" }}>
              <ChartArea color="white" />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              sx={{
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
              }}
              color="#343434"
            />
          </ListItemButton>
        </ListItem>
        <ListItem component="li">
          <ListItemButton
            sx={{
              color: "white",
              borderRadius: "6px",
              "&:hover": { backgroundColor: "#4338CA" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, marginRight: "14px" }}>
              <BookUser color="white" />
            </ListItemIcon>
            <ListItemText
              primary="Clientes"
              sx={{
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem component="li">
          <ListItemButton
            sx={{
              color: "white",
              borderRadius: "6px",
              "&:hover": { backgroundColor: "#4338CA" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, marginRight: "14px" }}>
              <WalletMinimal color="white" />
            </ListItemIcon>
            <ListItemText
              primary="Financeiro"
              sx={{
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
              }}
            />
            <ListItemIcon
              sx={{
                minWidth: 0,
                marginLeft: "20px",
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
              }}
            >
              <ChevronRight color="white" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem component="li">
          <ListItemButton
            sx={{
              color: "white",
              borderRadius: "6px",
              "&:hover": { backgroundColor: "#4338CA" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, marginRight: "14px" }}>
              <Receipt color="white" />
            </ListItemIcon>
            <ListItemText
              primary="Fiscal"
              sx={{
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
              }}
            />
            <ListItemIcon
              sx={{
                minWidth: 0,
                marginLeft: "20px",
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
              }}
            >
              <ChevronRight color="white" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <ListItem component="li" sx={{ marginTop: "320px" }}>
        <ListItemButton
          sx={{
            color: "white",
            borderRadius: "6px",
            "&:hover": { backgroundColor: "#4338CA" },
          }}
        >
          <ListItemIcon sx={{ minWidth: 0, marginRight: "14px" }}>
            <Bolt color="white"  />
          </ListItemIcon>
          <ListItemText
            primary="Configurações"
            sx={{
              opacity: isOpen ? 1 : 0,
              visibility: isOpen ? 'visible' : 'hidden',
              transition: 'opacity 0.3s ease, visibility 0.3s ease',
            }}
          />
          <ListItemIcon
            sx={{
              minWidth: 0,
              marginLeft: "20px",
              opacity: isOpen ? 1 : 0,
              visibility: isOpen ? 'visible' : 'hidden',
              transition: 'opacity 0.3s ease, visibility 0.3s ease',
            }}
          >
            <ChevronRight color="white" />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </Box>
  );

  return (
    <Box
      width={isOpen ? 256 : 88}
      component="nav"
      sx={{ backgroundColor: "#4A44F2", zIndex: 2, transition: "width 0.4s",}}
    >
      <Box
        component="div"
        className="container_logo flex flex-initial"
        width="80px"
        marginTop="10px"
      >
        <img src={Logo} alt="logo" onClick={toggleMenu} />
      </Box>
      {DrawerList}
    </Box>
  );
}

export default MenuLateral;
