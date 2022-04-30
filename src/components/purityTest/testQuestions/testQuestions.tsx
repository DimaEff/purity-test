import React, { useCallback, useMemo, useState } from 'react';
import { Box, Paper, Stack, Typography } from "@mui/material";
import faker from "@faker-js/faker";

import Carousel, { CarouselProps } from "../../common/carousel";
import QuestionsSection from "./questionsSection";
import CarouselNavigation from "./carouselNavigation";
import Result from "./result";


const QUESTIONS_IN_PAGE = 10;

interface TestContext {
    selectedCheckboxes: string[];
    addSelectedCheckbox: (q: string) => void;
    removeSelectedCheckbox: (q: string) => void;
    resetCheckboxes: () => void;
    isEnd: boolean;
    setIsEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TestContext = React.createContext<TestContext>({
    selectedCheckboxes: [],
    addSelectedCheckbox: () => {
    },
    removeSelectedCheckbox: () => {
    },
    resetCheckboxes: () => {
    },
    isEnd: false,
    setIsEnd: () => {
    },
});

const TestQuestions = () => {
    const carouselSettings: CarouselProps = {
        allowSlidePrev: true,
        NavigationComponentBottom: CarouselNavigation,
        onSlideChange: swiper => setPage(swiper.activeIndex),
        allowTouchMove: false,
    };

    const [isEnd, setIsEnd] = useState(false);
    const [page, setPage] = useState(0);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
    // const questions: string[] = t(Localizations.TestQuestions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const questions: string[] = useMemo(() => faker.helpers.uniqueArray(() => faker.lorem.words(9), 100), []);
    const questionsCount = questions.length;
    const sectionsCont: null[] = new Array(Math.ceil(questionsCount / 10)).fill(null);

    const getQuestionsForSection = useCallback((page: number) => {
        const start = page * QUESTIONS_IN_PAGE;
        const end = (page + 1) * QUESTIONS_IN_PAGE;

        return questions.slice(start, end);
    }, [questions]);

    const questionProgress = useMemo(() => {
        const maxQuestions = (page + 1) * QUESTIONS_IN_PAGE;
        return maxQuestions > questionsCount ? questionsCount : maxQuestions;
    }, [page, questionsCount]);

    const addSelectedCheckbox = useCallback((q) => setSelectedCheckboxes(cs => [...cs, q]), []);
    const removeSelectedCheckbox = useCallback((q) => setSelectedCheckboxes(cs => cs.filter(c => c !== q)), []);
    const resetCheckboxes = useCallback(() => setSelectedCheckboxes([]), []);

    return (
        <TestContext.Provider
            value={{
                selectedCheckboxes,
                addSelectedCheckbox,
                removeSelectedCheckbox,
                resetCheckboxes,
                isEnd,
                setIsEnd,
            }}
        >
            <Stack
                spacing={2}
                sx={theme => ({
                    width: "100%",
                    height: "80vh",
                    margin: theme.spacing(1.5),
                })}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Stack direction={"row"} spacing={0.75}>
                        <Typography fontWeight={"bold"} variant={"h4"}>
                            {questionProgress}
                        </Typography>
                        <Typography fontWeight={"bold"} variant={"h4"}>
                            /
                        </Typography>
                        <Typography fontWeight={"bold"} variant={"h4"}>
                            {questionsCount}
                        </Typography>
                    </Stack>
                </Box>
                <Paper
                    sx={theme => ({
                        maxHeight: "85%",
                        padding: theme.spacing(2, 1),
                    })}
                >
                    <Carousel {...carouselSettings}>
                        {
                            sectionsCont.map((e, i) => <QuestionsSection
                                key={i}
                                questions={getQuestionsForSection(i)}
                                page={page}
                            />)
                        }
                        <Result/>
                    </Carousel>
                </Paper>
            </Stack>
        </TestContext.Provider>
    );
};

export default TestQuestions;