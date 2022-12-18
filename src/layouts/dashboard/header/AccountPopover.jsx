import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, MenuItem, Avatar } from '@mui/material';
// components
import MenuPopover from '../../../components/MenuPopover';
import { IconButtonAnimate } from '../../../components/animate';
import useLocales from '../../../hooks/useLocales';
import { URLS } from '../../../routes/paths';
import { useNavigate } from 'react-router';

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { translate } = useLocales();
  const navigate = useNavigate();

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src="" alt="Vores Forening Admin" />
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            Vores Forening Admin
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            admin@voresforening.com
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem sx={{ m: 1 }} onClick={() => navigate(URLS.login)}>
          {translate('common.logoutButton')}
        </MenuItem>
      </MenuPopover>
    </>
  );
}
