import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Spin from 'shared/ui/Spin';

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Spin size="large" />}>{component()}</Suspense>
    </BrowserRouter>
  );
