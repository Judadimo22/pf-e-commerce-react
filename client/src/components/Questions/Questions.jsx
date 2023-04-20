import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import HomeNavBar from "../NavBar/HomeNavbar";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const Questions = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 

  return (
    <Flex flexDir="column">
      <HomeNavBar />
      <Flex minH="90vh" flexDir="column" justifyContent="center" alignItems="center">
        <Flex flexDir="column" alignItems="flex-start" w="70%" m={10} >
          <Heading mb={3} >Frequently asked questions</Heading>
          <Text>FAQs: Answers to Commonly Asked Questions.</Text>
        </Flex>
      <Box boxSize="1000px" h="100px" >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            /*             expandIcon={<ExpandMoreIcon />}
             */ aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Heading size="sm" >
              How can I make an online purchase?
              </Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To make an online purchase, simply add the items you wish to
              purchase to your shopping cart and follow the instructions to
              checkout. You will need to provide shipping and payment
              information during checkout.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            /* expandIcon={<ExpandMoreIcon />} */
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Heading size="sm" >
              How long will it take to get my order?
            </Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Shipping time may vary based on location and shipping method
              chosen. Orders usually take 3-7 business days to arrive after
              being shipped.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            /* expandIcon={<ExpandMoreIcon />} */
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Heading size="sm" >
              Can I return or exchange an item?
              </Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we do accept returns and exchanges on most items. Be sure to
              review our return and exchange policy before making any returns or
              exchanges.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            /* expandIcon={<ExpandMoreIcon />} */
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Heading size="sm" >
              How can I find out if an item is available in my size?
              </Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can check the availability of an item in your size on the
              product detail page. If it's not available, we may be able to
              suggest a similar size or notify you when it becomes available.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            /* expandIcon={<ExpandMoreIcon />} */
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Heading size="sm" >
              How can I know what size I should order?
              </Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Consult our size guide for detailed information on how to take
              your measurements and find the right size for you. If you still
              have questions, feel free to contact us for help.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            /* expandIcon={<ExpandMoreIcon />} */
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Heading size="sm" >
              Do you offer discounts or promotions?
              </Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we offer discounts and promotions from time to time. Be sure
              to follow us on social media and sign up to our newsletter to
              receive updates on our offers and promotions.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            /* expandIcon={<ExpandMoreIcon />} */
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Heading size="sm" >
              How can I contact customer service?
              </Heading>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can contact us by email. You can also send us a message
              through our social networks and we will answer you as soon as
              possible. Find our contact details on our contact page.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Flex flex={1}/>

      </Flex>
      <Footer />
    </Flex>
  );
};
export default Questions;
