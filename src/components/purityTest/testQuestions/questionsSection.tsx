import React from 'react';
import { Box, Stack } from "@mui/material";


interface QuestionsSectionProps {
    questions: string[];
    page: number;
}

const QuestionsSection: React.FC<QuestionsSectionProps> = (
    {
        questions,
        page,
    }
) => {
    return (
        <Stack spacing={1}>
            {questions.map(q => <Box>{q}</Box>)}
        </Stack>
    );
};

export default QuestionsSection;