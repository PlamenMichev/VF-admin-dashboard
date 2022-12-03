// @mui
import { Checkbox, Typography, Stack, StackProps } from '@mui/material';

export default function TableSelectedActions({
  dense,
  actions,
  rowCount,
  numSelected,
  onSelectAllRows,
  sx,
  ...other
}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9,
        height: 58,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        position: 'absolute',
        bgcolor: 'primary.lighter',
        ...sx,
      }}
      {...other}
    >
      <Checkbox
        indeterminate={numSelected > 0 && numSelected < rowCount}
        checked={rowCount > 0 && numSelected === rowCount}
        onChange={(event) => onSelectAllRows(event.target.checked)}
      />

      <Typography
        variant="subtitle1"
        sx={{
          ml: 2,
          flexGrow: 1,
          color: 'primary.main',
          ...(dense && {
            ml: 3,
          }),
        }}
      >
        {numSelected} selected
      </Typography>

      {actions && actions}
    </Stack>
  );
}
