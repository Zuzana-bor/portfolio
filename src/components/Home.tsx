import { Avatar, Box, Button, Typography } from '@mui/material';
import { deepOrange, lightGreen } from '@mui/material/colors';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        justifyContent: 'center',
        gap: 2,
        background: 'linear-gradient(135deg, #f34da5ff, #4798d2ff, #d2daabff)',
      }}
    >
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-10rem',
          left: '-10rem',
          width: '120px',
          borderRadius: '50%',
          filter: 'blur(80px)',
          background: lightGreen[500],
          zIndex: 0,
          height: '120px',
          overflow: 'hidden',
          padding: '2rem',
        }}
      />
      <Avatar
        alt="Remy Sharp"
        src="/broken-image.jpg"
        sx={{
          bgcolor: deepOrange[500],
          position: 'relative',
          zIndex: 1,
          width: 60,
          height: 60,
        }}
      >
        B
      </Avatar>

      <Typography variant="h1" component="h1" gutterBottom>
        Hi, I'm Zuzka
      </Typography>
      <Typography variant="h4" component="h4" gutterBottom>
        Junior React Developer | TypeScript | Frontend Enthusiast
      </Typography>
      <Button>My projects</Button>
    </Box>
  );
};

export default Home;
