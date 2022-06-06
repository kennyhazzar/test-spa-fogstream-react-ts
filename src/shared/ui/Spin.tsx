import { Box, CircularProgress, CircularProgressProps } from '@mui/material';

const Spin: React.FC<CircularProgressProps> = ({ ...props }) => (
  <Box sx={{ display: 'flex' }}>
    <CircularProgress {...props} />
  </Box>
);

export default Spin;
