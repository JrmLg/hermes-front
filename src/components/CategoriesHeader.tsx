import {
  Avatar,
  Box,
  TextField,
  Typography,
  Container,
  Button,
} from '@mui/material';

const Header = () => {
  return (
    <Container
      component="header"
      maxWidth="lg"
      sx={{
        marginTop: '1em',
        marginBottom: '0.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <Typography variant="h5">
          Accueil
          {/*//* À dynamiser plus tard en fonction de la catégorie selectionnée */}
        </Typography>

        <Button
          href="#"
          sx={{
            padding: '.5em',
            minWidth: 0,
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />{' '}
          {/*//* À dynamiser plus tard en fonction du user */}
        </Button>
      </Box>

      <TextField
        sx={{ margin: '1em 1em 0 1em', width: '100%' }}
        type="search"
        id="outlined-search"
        label="Rechercher..."
        variant="outlined"
      />
    </Container>
  );
};

export default Header;