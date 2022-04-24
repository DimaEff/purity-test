import React, { useContext, useMemo } from 'react';
import { Box, Checkbox, Divider, ListItem, Typography } from "@mui/material";

import { TestContext } from "./testQuestions";
import { useBreakpoints } from "../../../hooks";


interface QuestionProps {
    question: string;
}

const Question: React.FC<QuestionProps> = ({question}) => {
    const { isMobile } = useBreakpoints();

    const {selectedCheckboxes, addSelectedCheckbox, removeSelectedCheckbox} = useContext(TestContext);

    const isChecked = useMemo(
        () => selectedCheckboxes.includes(question),
        [question, selectedCheckboxes],
    );

    const handleChange = () => {
        if (!isChecked) {
            addSelectedCheckbox(question);
        } else {
            removeSelectedCheckbox(question);
        }
    }

    return (
        <>
            <ListItem
                sx={theme => ({
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space",
                    width: "100%",
                    minHeight: theme.spacing(6),
                    padding: theme.spacing(0),
                    paddingRight: theme.spacing(5),
                    margin: theme.spacing(0),
                })}
            >
                <Typography fontWeight={"bold"} variant={isMobile ? "body1" : "h6"}>
                    {question}
                </Typography>
                <Box
                    sx={theme => ({
                        position: "absolute",
                        top: theme.spacing(0),
                        right: theme.spacing(0),
                    })}
                >
                    <Checkbox
                        checked={isChecked}
                        onChange={handleChange}
                        sx={theme => ({
                            height: theme.spacing(6),
                            width: theme.spacing(6),
                            '& .MuiSvgIcon-root': {
                                fontSize: theme.spacing(5),
                                margin: 0,
                            },
                        })}
                    />
                </Box>
            </ListItem>
            <Divider/>
        </>
    );
};

export default Question;