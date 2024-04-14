import { useState, useEffect } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Forum, Diversity3, MedicalServices } from '@mui/icons-material';

const navItems = [
  { label: 'Accueil', url: '/home', icon: <Home /> },
  { label: 'Patients', url: '/patients', icon: <MedicalServices /> },
  { label: 'Equipes', url: '/teams', icon: <Diversity3 /> },
  { label: 'Privées', url: '/private', icon: <Forum /> },
];

export default function Navbar() {
  const location = useLocation();
  const [curIdx, setCurIdx] = useState(
    navItems.findIndex((item) => location.pathname.startsWith(item.url) || 0)
  );
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, nextIdx: number) => {
    const nextItem = navItems[nextIdx];
    setCurIdx(nextIdx);
    navigate(nextItem.url);
  };

  return (
    <Container
      component="footer"
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BottomNavigation
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
        value={curIdx}
        onChange={handleChange}
      >
        {navItems.map((item, idx) => (
          <BottomNavigationAction
            key={idx}
            label={item.label}
            value={idx}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </Container>
  );
}