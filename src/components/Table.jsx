import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {
    alpha,
    AlphalinxInc,
    Emily,
    Moneybuy,
    Rollerduster,
    SoNowWhat,
    WhyNot,
    zello,
} from '../assets/images';

const columns = [
    { id: 'name', label: 'Name', minWidth: 120 },
    { id: 'incorporator', label: 'Incorporator', minWidth: 100 },
    {
        id: 'jurisdiction',
        label: 'Jurisdiction',
        minWidth: 120,
        align: 'right',
    },
    {
        id: 'industry',
        label: 'Industry',
        minWidth: 120,
        align: 'right',
    },
    {
        id: 'mailbox',
        label: 'Mailbox',
        minWidth: 120,
        align: 'right',
    },
    {
        id: 'lastactionon',
        label: 'Last Action On',
        minWidth: 120,
        align: 'right',
    },
];

function createData(name, incorporator, jurisdiction, industry, mailbox, lastactionon, image) {
    return { name, incorporator, jurisdiction, industry, mailbox, lastactionon, image };
}

const rows = [
    createData('Alpha inc.', 'Jake Gyllenhaal', 'Freezone', 'B2B', 'Abu Dhabi', '23/12/2022', alpha),
    createData('Alphalinx Inc.', 'Jake Gyllenhaal', 'Mainland', 'B2C', 'Jabal Jais', '23/12/2022', AlphalinxInc),
    createData('Emily Henry-Jones', 'Jake Gyllenhaal', 'Freezone', 'B2B', 'Burj Province', '23/12/2022', Emily),
    createData('Rollerduster', 'Jake Gyllenhaal', 'Freezone', 'B2B', 'Burj Province', '23/12/2022', Rollerduster),
    createData('Zeropy', 'Jake Gyllenhaal', 'Mainland', 'B2C', 'Abu Dhabi', '23/12/2022', AlphalinxInc),
    createData('Wellson', 'Jake Gyllenhaal', 'Freezone', 'B2B', 'Jabal Jais', '23/12/2022', alpha),
    createData('WhyNot Inc.', 'Jake Gyllenhaal', 'Mainland', 'B2C', 'Burj Province', '23/12/2022', WhyNot),
    createData('Moneybuy', 'Jake Gyllenhaal', 'Freezone', 'B2B', 'Abu Dhabi', '23/12/2022', Moneybuy),
    createData('SoNowWhat Inc.', 'Jake Gyllenhaal', 'Mainland', 'B2C', 'Jabal Jais', '23/12/2022', SoNowWhat),
];

const TableComponent = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, background: '#E4E4E4', color: '#6A6A6D' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            if (column.id === 'name') {
                                                return (
                                                    <TableCell key={column.id} align={column.align} style={{ display: "flex", alignItems: "center" }}>
                                                        <img src={row.image} alt="Company Logo" style={{ width: 28, height: 28, marginRight: 8 }} />
                                                        {value}
                                                    </TableCell>

                                                );
                                            }
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default TableComponent;
