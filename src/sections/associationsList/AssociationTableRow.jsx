import { useState } from 'react';
// @mui
import { Checkbox, TableRow, TableCell, MenuItem } from '@mui/material';
import Label from '../../components/Label';
import Iconify from '../../components/Iconify';
import { TableMoreMenu } from '../../components/table';

export default function AssociationTableRow({ row, selected, onSelectRow, onDeleteRow }) {
  const { name, subdomain, subscription, unitsCount } = row;

  const [openMenu, setOpenMenuActions] = useState();

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell>{name}</TableCell>

      <TableCell>{subdomain}</TableCell>

      <TableCell>
        <Label>{subscription}</Label>
      </TableCell>

      <TableCell>{unitsCount}</TableCell>

      <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                Delete
              </MenuItem>
            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}
