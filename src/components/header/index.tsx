import { useState, MouseEvent } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { handleScroll } from '../../utils/handleScroll';

const pages = [
  { title: 'Проектировщикам', id: 'design' },
  { title: 'Строителям', id: 'construction' },
  { title: 'Изыскателям', id: 'engineering-survey' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  sx={{ mr: 2 }}
                  onClick={() => {
                    handleCloseNavMenu();
                    handleScroll(page.id);
                  }}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', bgcolor: 'text.secondary' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => handleScroll(page.id)}
                sx={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  my: 2,
                  mr: 3,
                  fontWeight: 500,
                  color: 'text.secondary',
                  display: 'block',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    color: 'success.main',
                  },
                }}>
                {page.title}
              </Button>
            ))}
          </Box>
          <Button
            onClick={() => handleScroll('prices')}
            sx={{
              boxShadow: 0,
              fontWeight: 500,
              bgcolor: 'text.secondary',
              color: 'text.primary',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                bgcolor: 'success.main',
                color: 'text.secondary',
              },
            }}
            variant="contained">
            Купить курс
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
