// @mui
import { TableRow, TableCell } from '@mui/material';
import Label from '../../components/Label';
import useLocales from '../../hooks/useLocales';

export default function AssociationTableRow({ row, selected, onSelectRow, onDeleteRow }) {
  const { translate } = useLocales();
  const { name, subdomain, hasActiveSubscription, unitsCount, createdAt } = row;

  return (
    <TableRow hover selected={selected}>
      <TableCell>{name}</TableCell>

      <TableCell>{subdomain}</TableCell>

      <TableCell>
        <Label color={hasActiveSubscription ? 'success' : 'error'}>
          {hasActiveSubscription
            ? translate('associationsListPage.active')
            : translate('associationsListPage.notActive')}
        </Label>
      </TableCell>

      <TableCell>{unitsCount}</TableCell>

      <TableCell>{new Date(createdAt).toLocaleDateString()}</TableCell>
    </TableRow>
  );
}
