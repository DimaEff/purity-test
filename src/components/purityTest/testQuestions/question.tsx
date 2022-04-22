import React, { useContext, useMemo } from 'react';
import { Checkbox, ListItem, Typography } from "@mui/material";
import { TestContext } from "./testQuestions";


interface QuestionProps {
    question: string;
}

const Question: React.FC<QuestionProps> = ({question}) => {
    const { selectedCheckboxes, addSelectedCheckbox, removeSelectedCheckbox } = useContext(TestContext);

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
        <ListItem
            sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: 0,
                margin: 0,
            }}
        >
            <Typography fontWeight={"bold"} variant={"h6"}>
                {question}
            </Typography>
            <Checkbox
                checked={isChecked}
                onChange={handleChange}
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 40,
                        margin: 0,
                    },
                }}
            />
        </ListItem>
    );
};

export default Question;