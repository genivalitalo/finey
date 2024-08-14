import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Button,
  ListItemText,
} from "@mui/material";
import Logo from "../../assets/Logo/logo.png";
import BubbleChartOutlinedIcon from "@mui/icons-material/BubbleChartOutlined";
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true); // Estado para controlar se está expandido

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "tab" || event.key === "shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const toggleDrawerSize = () => {
    setIsExpanded(!isExpanded); // Alterna entre expandido e reduzido
  };

  const DrawerList = (
    <Box
      sx={{
        width: isExpanded ? 256 : 80, // Controla a largura do Drawer
        backgroundColor: "#4A44F2",
        height: "100%",
        transition: "width 0.3s", // Adiciona transição suave
        overflow: "hidden",
        position: 'relative'
      }}
      role="presentation"
    >
      <Box
        component="div"
        sx={{
          width: "100%",
          height: 60,
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          position: "relative",
        }}
        className="pt-4"
      >
        <img src={Logo} className="w-20 cursor-pointer" onClick={toggleDrawerSize} />
      </Box>
      <List component="ul" sx={{ width: "100%", margin: "0px 0px", padding: '0px', marginTop: '24px' }}>
        <ListItem
          component="li"
          sx={{ width: "100%", padding: "10px 14px", borderRadius: "10px"}}
        >
          <ListItemButton sx={ {borderRadius: '6px', '&:hover': {backgroundColor: '#4338CA'} } }>
            <ListItemIcon>
              <BubbleChartOutlinedIcon
                style={{ color: "#E7E8E9", fontSize: 24 }}
              />
            </ListItemIcon>
            <ListItemText
              className="text-base"
              primary="Dashboard"
              sx={{ display: isExpanded ? "block" : "none", color: "white" }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem component="li" sx={{ width: "100%", padding: "10px 14px" }}>
          <ListItemButton sx={ {borderRadius: '6px', '&:hover': {backgroundColor: '#4338CA'} } }>
            <ListItemIcon>
              <ContactPageOutlinedIcon
                style={{ color: "#E7E8E9", fontSize: 24 }}
              />
            </ListItemIcon>
            <ListItemText
              className="text-base"
              primary="Clientes"
              sx={{ display: isExpanded ? "block" : "none", color: "white" }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem component="li" sx={{ width: "100%", padding: "10px 14px" }}>
          <ListItemButton sx={ {borderRadius: '6px', '&:hover': {backgroundColor: '#4338CA'} } }>
            <ListItemIcon>
              <ReceiptLongOutlinedIcon
                style={{ color: "#E7E8E9", fontSize: 24 }}
              />
            </ListItemIcon>
            <ListItemText
              className="text-base"
              primary="Financeiro"
              sx={{ display: isExpanded ? "block" : "none", color: "white" }}
            />
            <ListItemIcon>
            <KeyboardArrowRightOutlinedIcon
                style={{ color: "#E7E8E9", fontSize: 24, marginLeft: '40px'  }}
              /> 
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem component="li" sx={{ width: "100%", padding: "10px 14px" }}>
          <ListItemButton sx={ {borderRadius: '6px', '&:hover': {backgroundColor: '#4338CA'} } }>
            <ListItemIcon>
              <ReceiptOutlinedIcon
                style={{ color: "#E7E8E9", fontSize: 24 }}
              />
            </ListItemIcon>
            <ListItemText
              className="text-base"
              primary="Fiscal"
              sx={{ display: isExpanded ? "block" : "none", color: "white" }}
            />
            <ListItemIcon>
            <KeyboardArrowRightOutlinedIcon
                style={{ color: "#E7E8E9", fontSize: 24, marginLeft: '40px' }}
              /> 
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

      </List>

      <ListItem component="li" sx={{ width: "100%", padding: "10px 14px", position: 'absolute', marginTop: '300px' }}>
          <ListItemButton sx={ {borderRadius: '6px', '&:hover': {backgroundColor: '#4338CA'} } }>
            <ListItemIcon>
              <SettingsOutlinedIcon
                style={{ color: "#E7E8E9", fontSize: 24 }}
              />
            </ListItemIcon>
            <ListItemText
              className="text-base"
              primary="Configurações"
              sx={{ display: isExpanded ? "block" : "none", color: "white" }}
            />
          </ListItemButton>
        </ListItem>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{ overflow: "hidden",}}
      >
        {DrawerList}
      </Drawer>
    </>
  );
}

export default Navbar;
