import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const CustomTable = ({ headers, data }) => {
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
                        {
                            headers.map((item, index) => {
                                return (
                                    <StyledTableCell key={index}>{item}</StyledTableCell>
                                );
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((item, index) => {
                            return (
                                <StyledTableRow key={index}>
                                    {
                                        Object.keys(item).map((key,ind)=>{
                                            return (
                                                <StyledTableCell >{item[key]}</StyledTableCell>
                                            );
                                        })
                                    }

                                </StyledTableRow>
                                
                                // <StyledTableRow key={index}>

                                //     <StyledTableCell >{item.name}</StyledTableCell>
                                //     <StyledTableCell >{"HOD Health issue"}</StyledTableCell>
                                //     <StyledTableCell >{"hod@nitUk@gmail.com"}</StyledTableCell>
                                //     <StyledTableCell >{"+917296954180"}</StyledTableCell>
                                // </StyledTableRow>

                            );
                        })
                    }

                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable