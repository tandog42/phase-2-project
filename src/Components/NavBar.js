import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CarCrashSharpIcon from "@mui/icons-material/CarCrashSharp";
import { Link } from "react-router-dom";

const pages = [
  { id: 1, path: "/trucks", label: "Trucks for Sale" },
  { id: 2, path: "/truck/new", label: "Add a Truck" },
  { id: 3, path: "/aboutus", label: "About Us" },
];

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <CarCrashSharpIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}
          />
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Midwest Classic Trucks
          </Typography>

          <div id="tabs">
            {pages.map(page => (
              <Link key={page.id} to={page.path}>
                <Button sx={{ color: "white" }}>{page.label}</Button>
              </Link>
            ))}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
