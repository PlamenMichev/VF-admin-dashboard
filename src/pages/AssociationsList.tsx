// @mui
import {
  Box,
  Card,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Tooltip,
} from '@mui/material';
import { useState } from 'react';
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
import Iconify from 'src/components/Iconify';
import LoadingScreen from 'src/components/LoadingScreen';
import Scrollbar from 'src/components/Scrollbar';
import { TableHeadCustom, TableSelectedActions } from 'src/components/table';
import useLocales from 'src/hooks/useLocales';
import { SubscriptionType } from 'src/models/AssociationModels';
import { URLS } from 'src/routes/paths';
import AssociationTableRow from 'src/sections/associationsList/AssociationTableRow';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const SUBSCRIPTION_OPTIONS = (translate: Function) => [
  {
    label: translate('associationsListPage.subscriptions.freeTrial'),
    value: SubscriptionType.FreeTrial,
  },
  { label: translate('associationsListPage.subscriptions.basic'), value: SubscriptionType.Basic },
  {
    label: translate('associationsListPage.subscriptions.standart'),
    value: SubscriptionType.Standart,
  },
  { label: translate('associationsListPage.subscriptions.plus'), value: SubscriptionType.Plus },
  { label: translate('associationsListPage.subscriptions.moved'), value: SubscriptionType.Moved },
  {
    label: translate('associationsListPage.subscriptions.freeTrialManual'),
    value: SubscriptionType.FreeTrialManual,
  },
];

const TABLE_HEAD = (translate: Function) => [
  { id: 'name', label: translate('associationsListPage.tableHeads.name'), align: 'left' },
  { id: 'subdomain', label: translate('associationsListPage.tableHeads.subdomain'), align: 'left' },
  {
    id: 'subscription',
    label: translate('associationsListPage.tableHeads.subscription'),
    align: 'left',
  },
  {
    id: 'unitsCount',
    label: translate('associationsListPage.tableHeads.unitsCount'),
    align: 'left',
  },
  { id: 'actions', label: translate('associationsListPage.tableHeads.actions'), align: 'left' },
];

export default function AssociationsList() {
  const { translate } = useLocales();

  const [tableData, setTableData] = useState(mockdata);

  const [orderBy, setOrderBy] = useState('createdAt');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [selected, setSelected] = useState<string[]>([]);

  const onSelectAllRows = (checked: boolean, newSelecteds: string[]) => {
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleDeleteRow = (id: string) => {
    const deleteRow = tableData.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);
  };

  const handleDeleteRows = (selected: string[]) => {
    const deleteRows = tableData.filter((row) => !selected.includes(row.id));
    setSelected([]);
    setTableData(deleteRows);
  };

  const onSort = (id: string) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const onSelectRow = (id: string) => {
    const selectedIndex = selected.indexOf(id);

    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const onChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const onChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Page title={translate('associationsListPage.title')}>
      <HeaderBreadcrumbs
        heading={translate('associationsListPage.title')}
        links={[
          { name: translate('dashboard.title'), href: URLS.associationsList },
          { name: translate('associationsListPage.title') },
        ]}
      />

      <Card>
        <Scrollbar>
          <TableContainer>
            {selected.length > 0 && (
              <TableSelectedActions
                numSelected={selected.length}
                rowCount={tableData.length}
                onSelectAllRows={(checked) =>
                  onSelectAllRows(
                    checked,
                    tableData.map((row) => row.id)
                  )
                }
                actions={
                  <Stack spacing={1} direction="row">
                    <Tooltip title="Sent">
                      <IconButton color="primary">
                        <Iconify icon={'ic:round-send'} />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Download">
                      <IconButton color="primary">
                        <Iconify icon={'eva:download-outline'} />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Print">
                      <IconButton color="primary">
                        <Iconify icon={'eva:printer-fill'} />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                      <IconButton color="primary" onClick={() => handleDeleteRows(selected)}>
                        <Iconify icon={'eva:trash-2-outline'} />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                }
              />
            )}

            <Table>
              <TableHeadCustom
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD(translate)}
                rowCount={tableData.length}
                numSelected={selected.length}
                onSort={onSort}
                onSelectAllRows={(checked) =>
                  onSelectAllRows(
                    checked,
                    tableData.map((row) => row.id)
                  )
                }
              />

              <TableBody>
                {tableData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <AssociationTableRow
                      key={row.id}
                      row={row}
                      selected={selected.includes(row.id)}
                      onSelectRow={() => onSelectRow(row.id)}
                      onDeleteRow={() => handleDeleteRow(row.id)}
                    />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Box sx={{ position: 'relative' }}>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
          />
        </Box>
      </Card>
    </Page>
  );
}

const mockdata = [
  {
    id: 'gaasgasgasgas',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: SubscriptionType.FreeTrial,
    createdAt: new Date(),
  },
  {
    id: 'zxcbxzc23423',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: SubscriptionType.Standart,
    createdAt: new Date(),
  },
  {
    id: 'asdhaeweghasweg',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: SubscriptionType.Plus,
    createdAt: new Date(),
  },
  {
    id: 'ashsdhaw',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: SubscriptionType.FreeTrial,
    createdAt: new Date(),
  },
  {
    id: 'cabsdghdas',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: SubscriptionType.FreeTrialManual,
    createdAt: new Date(),
  },
  {
    id: 'asdhasgeaw',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: SubscriptionType.FreeTrialManual,
    createdAt: new Date(),
  },
  {
    id: 'ajdfasrj',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: SubscriptionType.Basic,
    createdAt: new Date(),
  },
  {
    id: 'qwasdghasdasd',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: SubscriptionType.FreeTrial,
    createdAt: new Date(),
  },
  {
    id: 'asdhasdhasj',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: SubscriptionType.FreeTrial,
    createdAt: new Date(),
  },
  {
    id: 'asdgasdg',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: SubscriptionType.FreeTrial,
    createdAt: new Date(),
  },
];
