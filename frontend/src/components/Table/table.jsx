import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const CustomTable = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#255674",
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Designation</StyledTableCell>
                        <StyledTableCell align="right">Email id</StyledTableCell>
                        <StyledTableCell align="right">Contact No.</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <StyledTableRow key={"row.name"}>
                        <StyledTableCell component="th" scope="row">
                            {"ABC Kumar "}
                        </StyledTableCell>
                        <StyledTableCell align="right">{"HOD Health issue"}</StyledTableCell>
                        <StyledTableCell align="right">{"hod@nitUk@gmail.com"}</StyledTableCell>
                        <StyledTableCell align="right">{"+917296954180"}</StyledTableCell>
                    </StyledTableRow>


                    <StyledTableRow key={"row.name"}>
                        <StyledTableCell component="th" scope="row">
                            {"ABC Kumar "}
                        </StyledTableCell>
                        <StyledTableCell align="right">{"HOD Health issue"}</StyledTableCell>
                        <StyledTableCell align="right">{"hod@nitUk@gmail.com"}</StyledTableCell>
                        <StyledTableCell align="right">{"+917296954180"}</StyledTableCell>
                    </StyledTableRow>


                    <StyledTableRow key={"row.name"}>
                        <StyledTableCell component="th" scope="row">
                            {"ABC Kumar "}
                        </StyledTableCell>
                        <StyledTableCell align="right">{"HOD Health issue"}</StyledTableCell>
                        <StyledTableCell align="right">{"hod@nitUk@gmail.com"}</StyledTableCell>
                        <StyledTableCell align="right">{"+917296954180"}</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow key={"row.name"}>
                        <StyledTableCell component="th" scope="row">
                            {"ABC Kumar "}
                        </StyledTableCell>
                        <StyledTableCell align="right">{"HOD Health issue"}</StyledTableCell>
                        <StyledTableCell align="right">{"hod@nitUk@gmail.com"}</StyledTableCell>
                        <StyledTableCell align="right">{"+917296954180"}</StyledTableCell>
                    </StyledTableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable