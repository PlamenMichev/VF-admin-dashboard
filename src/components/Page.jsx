import { Helmet } from 'react-helmet-async';
import { forwardRef, ReactNode } from 'react';
// @mui
import { Box, BoxProps } from '@mui/material';

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | VF`}</title>
      {meta}
    </Helmet>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

export default Page;
