import "./App.css";
import PageRouter from "./Routes/PageRouter";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import User from "./components/user/User";
import Topbar from "./components/topbar/Topbar";
// import Store from './pages/Store/Store'

const drawerWidth = 250;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//       flexGrow: 1,
//       padding: theme.spacing(3),
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       marginLeft: `-${drawerWidth}px`,
//       ...(open && {
//         transition: theme.transitions.create('margin', {
//           easing: theme.transitions.easing.easeOut,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//       }),
//     }),
//   );

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
     <div className="container" style={{ width: "1330px", margin: "0 auto" }}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open} className="appbar">
            <Toolbar sx={{ ...(!open && { padding: "2px 60px" }) }}>
              <IconButton
                className="c-close-btns"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                <IconButton
                  onClick={handleDrawerClose}
                  className="c-close-btn"
                  sx={{ mr: 2, ...(!open && { display: "none" }) }}
                >
                  <i class="bx bx-left-arrow-alt c-icons"></i>
                </IconButton>
              </Typography>
              <Topbar open={open} />
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader className="c-drower-btn">
              <IconButton onClick={handleDrawerClose}>
                <MenuIcon className="c-menu-icon" />
              </IconButton>
              <h1 className="c-drower-title">GMarket</h1>
            </DrawerHeader>
            <User />
          </Drawer>
          {/* <Main open={open}>
          <Store/>
        </Main> */}
        </Box>
      </div>
      <PageRouter open={open}/>
    </>
  );
}

export default App;
