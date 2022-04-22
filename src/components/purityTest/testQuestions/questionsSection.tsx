import React from 'react';
import { List } from "@mui/material";

import Question from "./question";


interface QuestionsSectionProps {
    questions: string[];
    page: number;
}

const QuestionsSection: React.FC<QuestionsSectionProps> = ({questions}) => {
    return (
        <List
            sx={{
                width: "100%",
                height: "85%",
                overflowY: "auto",
            }}
        >
            {questions.map(q => <Question key={q} question={q}/>)}
        </List>
    );
};

export default QuestionsSection;