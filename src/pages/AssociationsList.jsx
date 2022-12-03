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
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import Iconify from '../components/Iconify';
import Scrollbar from '../components/Scrollbar';
import { TableHeadCustom, TableSelectedActions } from '../components/table';
import useLocales from '../hooks/useLocales';
import { URLS } from '../routes/paths';
import AssociationTableRow from '../sections/associationsList/AssociationTableRow';
// components
import Page from '../components/Page';

const SUBSCRIPTION_OPTIONS = (translate) => [
  {
    label: translate('associationsListPage.subscriptions.freeTrial'),
    value: 0,
  },
  { label: translate('associationsListPage.subscriptions.basic'), value: 1 },
  {
    label: translate('associationsListPage.subscriptions.standart'),
    value: 2,
  },
  { label: translate('associationsListPage.subscriptions.plus'), value: 3 },
  { label: translate('associationsListPage.subscriptions.moved'), value: 4 },
  {
    label: translate('associationsListPage.subscriptions.freeTrialManual'),
    value: 5,
  },
];

const TABLE_HEAD = (translate) => [
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
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [selected, setSelected] = useState([]);

  const onSelectAllRows = (checked, newSelecteds) => {
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleDeleteRow = (id) => {
    const deleteRow = tableData.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);
  };

  const handleDeleteRows = (selected) => {
    const deleteRows = tableData.filter((row) => !selected.includes(row.id));
    setSelected([]);
    setTableData(deleteRows);
  };

  const onSort = (id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const onSelectRow = (id) => {
    const selectedIndex = selected.indexOf(id);

    let newSelected = [];

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

  const onChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const onChangeRowsPerPage = (event) => {
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
    subscription: 1,
    createdAt: new Date(),
  },
  {
    id: 'zxcbxzc23423',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: 2,
    createdAt: new Date(),
  },
  {
    id: 'asdhaeweghasweg',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: 3,
    createdAt: new Date(),
  },
  {
    id: 'ashsdhaw',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: 4,
    createdAt: new Date(),
  },
  {
    id: 'cabsdghdas',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: 2,
    createdAt: new Date(),
  },
  {
    id: 'asdhasgeaw',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: 3,
    createdAt: new Date(),
  },
  {
    id: 'ajdfasrj',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: 4,
    createdAt: new Date(),
  },
  {
    id: 'qwasdghasdasd',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: 5,
    createdAt: new Date(),
  },
  {
    id: 'asdhasdhasj',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: 1,
    createdAt: new Date(),
  },
  {
    id: 'asdgasdg',
    name: 'RAF ApS',
    subdomain: 'rafaps',
    unitsCount: 0,
    subscription: 2,
    createdAt: new Date(),
  },
];
