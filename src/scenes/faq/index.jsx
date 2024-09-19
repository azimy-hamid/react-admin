import { Box, useTheme, Typography, colors } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../themes";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Asked Questions Page"></Header>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h2">
            An Important Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            laboriosam quis repellat deleniti iste natus ut officiis minus
            provident id? Asperiores atque voluptatum ullam deserunt quaerat,
            qui debitis voluptatibus suscipit?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h2">
            An Important Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            laboriosam quis repellat deleniti iste natus ut officiis minus
            provident id? Asperiores atque voluptatum ullam deserunt quaerat,
            qui debitis voluptatibus suscipit?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h2">
            An Important Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            laboriosam quis repellat deleniti iste natus ut officiis minus
            provident id? Asperiores atque voluptatum ullam deserunt quaerat,
            qui debitis voluptatibus suscipit?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h2">
            An Important Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            laboriosam quis repellat deleniti iste natus ut officiis minus
            provident id? Asperiores atque voluptatum ullam deserunt quaerat,
            qui debitis voluptatibus suscipit?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h2">
            An Important Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            laboriosam quis repellat deleniti iste natus ut officiis minus
            provident id? Asperiores atque voluptatum ullam deserunt quaerat,
            qui debitis voluptatibus suscipit?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
