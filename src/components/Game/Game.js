import React from 'react'
import Card from "../Cards/Card";
import './Game.css'
import { Table, Paper, TableContainer, TableBody, TableRow, TableCell } from "@material-ui/core";
// import { phrases } from "../../data/phrases"


const Game = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                            <TableCell>
                                <Card className="Card"/> 
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Game
