import React from 'react';
import { List, Paper } from "@mui/material";

import { resultScores } from "./utils";
import ScoreMeaningItem from "./ScoreMeaningItem";


const ScoreMeaning = () => {
    return (
        <Paper>
            <List>
                {
                    Object.keys(resultScores).reverse()
                        .map((value, index, array) => <ScoreMeaningItem
                                key={value}
                                scoreMeaningUpperLimit={value}
                                scoreMeaningDownLimit={array[index + 1] || "0"}
                                scoreMeaningSettings={resultScores[+value]}
                            />
                        )
                }
            </List>
        </Paper>
    );
};

export default ScoreMeaning;