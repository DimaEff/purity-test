import React, { useContext, useMemo } from 'react';
import { Box, Checkbox, Divider, ListItem, Typography } from "@mui/material";

import { TestContext } from "./testQuestions";


interface QuestionProps {
    question: string;
}

const Question: React.FC<QuestionProps> = ({question}) => {
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
                sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space",
                    width: "100%",
                    minHeight: 48,
                    padding: 0,
                    paddingRight: 8,
                    margin: 0,
                }}
            >
                <Typography fontWeight={"bold"} variant={"h6"}>
                    {question}
                </Typography>
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                    }}
                >
                    <Checkbox
                        checked={isChecked}
                        onChange={handleChange}
                        sx={{
                            height: 48,
                            width: 48,
                            '& .MuiSvgIcon-root': {
                                fontSize: 40,
                                margin: 0,
                            },
                        }}
                    />
                </Box>
            </ListItem>
            <Divider/>
        </>
    );
};

export default Question;