import { Avatar, Box, Button, Typography } from '@mui/material';
import { deepOrange, lightGreen } from '@mui/material/colors';
import { motion, spring } from 'framer-motion';

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
      }}
    >
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: spring, stiffness: 20, damping: 20 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        style={{ zIndex: 1, position: 'relative', display: 'inline-block' }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/broken-image.jpg"
          sx={{
            bgcolor: deepOrange[500],
            width: 60,
            height: 60,
          }}
        >
          B
        </Avatar>
      </motion.div>

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
