import React, { useMemo, useState } from 'react';
import { Box, Paper, Typography } from "@mui/material";
import Carousel from "../../common/carousel";
import { useTranslation } from "react-i18next";

import QuestionsSection from "./questionsSection";
import CarouselNavigation from "./carouselNavigation";


const QUESTIONS_IN_PAGE = 10;

const getQuestionsForSection = (questions: string[], page: number): string[] => {
    const start = page * QUESTIONS_IN_PAGE;
    const end = (page + 1) * QUESTIONS_IN_PAGE;

    return questions.slice(start, end);
}

const TestQuestions = () => {
    const {t} = useTranslation();

    const [page, setPage] = useState(0);
    // const questions: string[] = t(Localizations.TestQuestions);
    // const questions: string[] = faker.helpers.uniqueArray(() => faker.lorem.word(5), 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const questions: string[] = [
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "2222222",
        "2222222",
        "2222222",
        "2222222",
        "2222222",
        "2222222",
        "2222222",
        "2222222",
        "2222222",
        "2222222",
        "3333333",
        "3333333",
        "3333333",
        "3333333",
        "3333333",
        "3333333",
        "3333333",
        "3333333",
        "3333333",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
        "123123",
    ];
    const questionsCount = questions.length;
    const sectionsCont: null[] = new Array(Math.ceil(questionsCount / 10)).fill(null);
    const questionsForSection = useMemo(
        () => getQuestionsForSection(questions, page),
        [page, questions],
    );

    const questionProgress = useMemo(() => {
        const maxQuestions = (page + 1) * QUESTIONS_IN_PAGE;
        return maxQuestions > questionsCount ? questionsCount : maxQuestions;
    }, [page, questionsCount]);

    return (
        <Box
            sx={theme => ({
                width: "100%",
                height: "70%",
                margin: theme.spacing(1.5),
                paddingTop: theme.spacing(2),
            })}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <Typography fontWeight={"bold"} variant={"h4"}>
                    {questionProgress}/{questionsCount}
                </Typography>
            </Box>
            <Paper sx={{height: "85%"}}>
                <Carousel
                    navigation NavigationComponentBottom={CarouselNavigation}
                    onSlideChange={swiper => setPage(swiper.activeIndex)}
                >
                    {
                        sectionsCont.map((e, i) => <QuestionsSection
                            key={i}
                            questions={questionsForSection}
                            page={page}
                        />)
                    }
                </Carousel>
            </Paper>
        </Box>
    );
};

export default TestQuestions;