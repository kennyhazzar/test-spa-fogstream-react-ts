import { useParams } from 'react-router-dom';

const NewsDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  return <div>{id} Page</div>;
};

export default NewsDetailsPage;
