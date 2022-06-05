import { Box, CircularProgress, CircularProgressProps } from '@mui/material';

interface SpinProps extends CircularProgressProps {}

const Spin: React.FC<SpinProps> = ({ ...props }) => (
  <Box sx={{ display: 'flex' }}>
    <CircularProgress {...props} />
  </Box>
);

export default Spin;
