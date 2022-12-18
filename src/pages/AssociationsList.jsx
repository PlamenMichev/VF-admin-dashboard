// @mui
import {
  Box,
  Card,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import Scrollbar from '../components/Scrollbar';
import { TableHeadCustom } from '../components/table';
import useLocales from '../hooks/useLocales';
import { URLS } from '../routes/paths';
import AssociationTableRow from '../sections/associationsList/AssociationTableRow';
// components
import Page from '../components/Page';
import AssociationsService from '../serives/AssociationsService';

const TABLE_HEAD = (translate) => [
  { id: 'name', label: translate('associationsListPage.tableHeads.name'), align: 'left' },
  { id: 'subdomain', label: translate('associationsListPage.tableHeads.subdomain'), align: 'left' },
  {
    id: 'subscription',
    label: translate('associationsListPage.tableHeads.subscription'),
    align: 'left',
    disableSort: true,
  },
  {
    id: 'unitsCount',
    label: translate('associationsListPage.tableHeads.unitsCount'),
    align: 'left',
  },
  {
    id: 'createdAt',
    label: translate('associationsListPage.tableHeads.createdAt'),
    align: 'left',
  },
];

export default function AssociationsList() {
  const { translate } = useLocales();

  const [tableData, setTableData] = useState([]);

  const [orderBy, setOrderBy] = useState('createdAt');
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssocaitions = async () => {
      setLoading(true);
      const result = await AssociationsService.getAssociations(
        page + 1,
        rowsPerPage,
        orderBy,
        order,
        ''
      );

      setTableData(result.data);
      setRowsPerPage(result.pagination.perPage);
      setTotalCount(result.pagination.totalCount);
      setLoading(false);
    };

    fetchAssocaitions();
  }, [page, rowsPerPage, orderBy, order]);

  const onSort = (id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
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
            <Table>
              <TableHeadCustom
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD(translate)}
                rowCount={tableData.length}
                onSort={onSort}
              />

              {loading ? (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                      <CircularProgress color="primary" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              ) : (
                <TableBody>
                  {tableData.map((row) => (
                    <AssociationTableRow key={row.id} row={row} />
                  ))}
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Scrollbar>

        <Box sx={{ position: 'relative' }}>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={totalCount}
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
