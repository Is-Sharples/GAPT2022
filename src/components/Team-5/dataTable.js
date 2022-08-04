import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { RowData } from "./constants";

export default function DataTable(){

    let admissionMock = []
    for(var i = 0; i < 10; i++){
        admissionMock[i] = i;
    }
    let count = 0;
    let dischargeMock = [];
    for (var c = 10; c >= 0; c--) {
        dischargeMock[count] = c;
        count++;
    }



    let objs = []
    console.log(count);
    for(var x = 0; x < count.length; x++) {
        objs[x] = {
            title: RowData[x],
            admission: admissionMock[x],
            discharge: dischargeMock[x]
        }()
    }
    console.log(objs);
    return(
    <div >
        <TableContainer className="bg-gray-400 mr-auto">
            <Table >
                <TableHead >
                    <TableRow>
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </div>)
}