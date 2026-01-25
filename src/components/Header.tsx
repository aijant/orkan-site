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
import { useNavigate, useLocation } from "react-router-dom";
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

  const navigate = useNavigate();
  const { pathname } = useLocation(); // ✅ FIXED

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
    if (!open) setSupportOpen(false);
  };

  const handleSupportToggle = () => setSupportOpen((prev) => !prev);
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => setAnchorEl(null);

  // 🧭 Scroll helper for Home sections
  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Solutions", action: () => scrollToSection("solutions-section") },
    { label: "Products", action: () => scrollToSection("products-section") },
    { label: "Pricing", action: () => navigate("/pricing") },
    {
      label: "Client Stories",
      action: () => scrollToSection("stories-section"),
    },
    { label: "Support", action: () => scrollToSection("support-section") },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#cf2e2e", boxShadow: "none" }}
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
        <Box
          onClick={() => {
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate("/");
            }
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
            cursor: "pointer",
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
              mb: "20px",
              mr: "-24px",
            }}
          />
          <Box component="span" sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
            Orkan ELD
          </Box>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                sx={{ mx: 1 }}
                onClick={link.action}
              >
                {link.label}
              </Button>
            ))}

            <Button
              color="inherit"
              endIcon={<ArrowDropDownIcon />}
              onMouseEnter={handleOpenMenu}
              onClick={handleOpenMenu}
            />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              MenuListProps={{ onMouseLeave: handleCloseMenu }}
            >
              <MenuItem
                component="a"
                href="/pdfs/manual-for-drivers.pdf"
                target="_blank"
              >
                Manual for Drivers
              </MenuItem>
              <MenuItem
                component="a"
                href="/pdfs/dot-reference-card.pdf"
                target="_blank"
              >
                DOT Reference Card
              </MenuItem>
              <MenuItem
                component="a"
                href="/pdfs/malfunction-manual.pdf"
                target="_blank"
              >
                Malfunction Manual
              </MenuItem>
            </Menu>
          </Box>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "#cf2e2e",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <IconButton color="inherit" onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  onClick={() => {
                    toggleDrawer(false)();
                    link.action();
                  }}
                  sx={{ justifyContent: "center" }}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem disablePadding>
              <ListItemButton onClick={handleSupportToggle}>
                <ListItemText primary="Support" />
                {supportOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemButton>
            </ListItem>

            <Collapse in={supportOpen} unmountOnExit>
              <List>
                <ListItemButton
                  component="a"
                  href="/pdfs/manual-for-drivers.pdf"
                  target="_blank"
                >
                  <ListItemText primary="Manual for Drivers" />
                </ListItemButton>
                <ListItemButton
                  component="a"
                  href="/pdfs/dot-reference-card.pdf"
                  target="_blank"
                >
                  <ListItemText primary="DOT Reference Card" />
                </ListItemButton>
                <ListItemButton
                  component="a"
                  href="/pdfs/malfunction-manual.pdf"
                  target="_blank"
                >
                  <ListItemText primary="Malfunction Manual" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};
