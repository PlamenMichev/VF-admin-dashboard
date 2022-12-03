import { m, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';
// @mui
import { Box } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
//
import { varContainer } from '.';

export default function MotionViewport({ children, disableAnimatedMobile = true, ...other }) {
  const isMobile = useResponsive('down', 'sm');

  if (isMobile && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>;
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
