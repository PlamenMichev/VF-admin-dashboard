// icons
import { Icon, IconifyIcon } from '@iconify/react';
// @mui
import { Box, BoxProps, SxProps } from '@mui/material';

export default function Iconify({ icon, sx, ...other }) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
