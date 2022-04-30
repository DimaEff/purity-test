import React from 'react';
import { List } from "@mui/material";

import Question from "./question";


interface QuestionsSectionProps {
    questions: string[];
    page: number;
}

const QuestionsSection: React.FC<QuestionsSectionProps> = ({questions, page}) => {
    const getQuestionNum = (num: number): string => (+(page.toString() + num.toString()) + 1).toString();

    return (
        <List
            sx={{
                width: "100%",
                height: "85%",
                overflowY: "auto",
            }}
        >
            {questions.map((q, i) => <Question key={q} question={q} number={getQuestionNum(i)}/>)}
        </List>
    );
};

export default QuestionsSection;