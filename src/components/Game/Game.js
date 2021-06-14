import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "../Cards/Card";
import './Game.css'
import { Table, Paper, TableContainer, TableBody, TableRow, TableCell, Box, Typography } from "@material-ui/core";
import { phrases } from "../../data/phrases"

const useStyles = makeStyles({
    root: {
        maxWidth: 680,
        margin: "auto",
        padding: "15px 0",
        "& .MuiTableCell-root": {
            border: "solid 2px #ccc",
            padding: 0,
        },
    },
    title: {
        marginBottom: 15,
    },
});

const Game = () => {
    const classes = useStyles();
    const [isBingo, setIsBingo] = useState(false);
    const [activeCards, setActiveCards] = useState([]);

    const handleCardClick = function (cardIndex) {
        setIsBingo(!isBingo)
        let index = activeCards.indexOf(cardIndex);
        let cards = activeCards;
        
        if(index >=0) {
            cards.splice(index, 1);
        }
        else {
            cards.push(cardIndex);
        }

        // indicates the selected cards 
        setActiveCards([...cards]);
    }

    return (
        <div className={classes.root}>
            <Typography variant="h2" component="h1" className={classes.title + (isBingo ? " is-bingo" : "")}>
                {isBingo ? "You got a BINGO" : "Play Bingo"}
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {[1,2,3,4,5].map((i) => {
                            return (
                                <TableRow key={"row_" + i}>
                                    {[1,2,3,4,5].map(j => {
                                        let cardIndex = (5 * (i-1)) + j;
                                        let cardText = phrases[cardIndex-1];

                                        return (
                                            <TableCell className="table-cell" key={"card_" + cardIndex}>
                                                <Card
                                                    className="Card"
                                                    cardIndex={cardIndex}
                                                    cardText={cardText}
                                                    handleCardClick={handleCardClick}
                                                /> 
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Game
