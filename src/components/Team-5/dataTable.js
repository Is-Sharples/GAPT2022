import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default function DataTable(props){

    let admissionMock = []
    for(var i = 0; i < props.RowData.length; i++){
        admissionMock[i] = i;
    }
    let count = 0;
    let dischargeMock = [];
    for (var c = props.RowData.length; c >= 0; c--) {
        dischargeMock[count] = c;
        count++;
    }

    let objs = []
    let RowData = props.RowData;
    for(var x = 0; x < props.RowData.length; x++) {
        objs[x] = {
            title: RowData[x],
            admission: admissionMock[x],
            discharge: dischargeMock[x],
            total: admissionMock[x] - dischargeMock[x]
        }
    }
    return(
    <div >
        <TableContainer className="bg-gray-400 mr-auto">
            <Table >
                <TableHead >
                    <TableRow>
                        <TableCell>

                        </TableCell>
                        <TableCell >
                            ADMISSION
                        </TableCell>
                        <TableCell>
                            DISCHARGE
                        </TableCell>
                        <TableCell>
                            +/-
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                    {objs.map((row) => (
                        <TableRow key={row.title}>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{row.admission}</TableCell>
                            <TableCell>{row.discharge}</TableCell>
                            <TableCell>{row.total}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </div>)
}