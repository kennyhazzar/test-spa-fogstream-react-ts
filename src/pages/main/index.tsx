import { Box } from '@mui/material';
import { useEffect } from 'react';
import { getNews } from 'shared/api/news-api/news';
import Header from 'shared/ui/Header';

const MainPage = () => {
  useEffect(() => {
    getNews({ q: 'google', page: 1, pageSize: 2 });
  }, []);
  return (
    <Box>
      <Header />
    </Box>
  );
};

export default MainPage;
