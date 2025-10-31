import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
  Collapse,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../assets/orkhan_trans.png";

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery("(max-width: 900px)");

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
    if (!open) setSupportOpen(false); 
  };

  const handleSupportToggle = () => setSupportOpen((prev) => !prev);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => setAnchorEl(null);

  const navLinks = [
    { label: "Solutions", to: "/" },
    { label: "Products", to: "/" },
    { label: "Pricing", to: "/" },
    { label: "Client Stories", to: "/" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#cf2e2e",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
        }}
      >
        {/* Logo */}
        <NavLink
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "white",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Orkan ELD"
            sx={{
              width: 100,
              height: "auto",
              objectFit: "contain",
              mb: '20px'
            }}
          />
          <Box
            component="span"
            sx={{
              fontWeight: 700,
              fontSize: "1.5rem",
              ml: 1,
            }}
          >
            Orkan ELD
          </Box>
        </NavLink>

        {/* Desktop Nav */}
        {!isMobile && (
          <Box>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                component={Link}
                to={link.to}
                sx={{ mx: 1 }}
              >
                {link.label}
              </Button>
            ))}

            {/* Support Dropdown for Desktop */}
            <Button
              color="inherit"
              endIcon={<ArrowDropDownIcon />}
              onMouseEnter={handleOpenMenu}
              onClick={handleOpenMenu}
            >
              Support
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              MenuListProps={{
                onMouseLeave: handleCloseMenu,
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem
                component="a"
                href="/pdfs/manual-for-drivers.pdf"
                target="_blank"
                onClick={handleCloseMenu}
              >
                Manual for Drivers
              </MenuItem>
              <MenuItem
                component="a"
                href="/pdfs/dot-reference-card.pdf"
                target="_blank"
                onClick={handleCloseMenu}
              >
                DOT Reference Card
              </MenuItem>
              <MenuItem
                component="a"
                href="/pdfs/malfunction-manual.pdf"
                target="_blank"
                onClick={handleCloseMenu}
              >
                Malfunction Manual
              </MenuItem>
            </Menu>
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#cf2e2e",
            color: "white",
            width: "100%",
            height: "100%",
            textAlign: "center",
          },
        }}
      >
        {/* Close Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <IconButton color="inherit" onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Mobile Nav Links */}
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                component={Link}
                to={link.to}
                onClick={toggleDrawer(false)}
                sx={{
                  justifyContent: "center",
                  py: 2,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontSize: "1.4rem",
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          {/* Support Dropdown for Mobile */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleSupportToggle}
              sx={{
                justifyContent: "center",
                py: 2,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              <ListItemText
                primary="Support"
                primaryTypographyProps={{
                  fontSize: "1.4rem",
                  fontWeight: 500,
                }}
              />
              {supportOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>

          <Collapse in={supportOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="/pdfs/manual-for-drivers.pdf"
                  target="_blank"
                  onClick={toggleDrawer(false)}
                  sx={{ justifyContent: "center", py: 1 }}
                >
                  <ListItemText primary="Manual for Drivers" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="/pdfs/dot-reference-card.pdf"
                  target="_blank"
                  onClick={toggleDrawer(false)}
                  sx={{ justifyContent: "center", py: 1 }}
                >
                  <ListItemText primary="DOT Reference Card" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  href="/pdfs/malfunction-manual.pdf"
                  target="_blank"
                  onClick={toggleDrawer(false)}
                  sx={{ justifyContent: "center", py: 1 }}
                >
                  <ListItemText primary="Malfunction Manual" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </AppBar>
  );
};
