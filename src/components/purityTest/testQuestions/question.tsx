import React, { useContext, useMemo, useState } from 'react';
import { Box, Checkbox, Divider, ListItem, Typography, useTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

import { TestContext } from "./testQuestions";
import { useBreakpoints } from "../../../hooks";


interface QuestionProps {
    question: string;
    number: string;
}

const Question: React.FC<QuestionProps> = ({question, number}) => {
    const {isMobile} = useBreakpoints();

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

    const [hover, setHover] = useState(false);
    const theme = useTheme();
    const hoverColor = useMemo(() => theme.palette.mode === "light" ? blue[500] : "#fff", [theme.palette.mode]);
    const color = useMemo(() => hover ? hoverColor : undefined, [hover, hoverColor]);

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
                    paddingRight: theme.spacing(6),
                    margin: theme.spacing(0),
                    cursor: "pointer",
                })}
                onClick={handleChange}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Typography color={color} fontWeight={isMobile ? "normal" : "bold"}
                            variant={isMobile ? "body1" : "h6"}>
                    {`${number}.`} {question}
                </Typography>
                <Box
                    sx={theme => ({
                        zIndex: 20,
                        position: "absolute",
                        top: theme.spacing(0),
                        right: theme.spacing(0),
                    })}
                >
                    <Checkbox
                        checked={isChecked}
                        onChange={handleChange}
                        sx={theme => ({
                            color,
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