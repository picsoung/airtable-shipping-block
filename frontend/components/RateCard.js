import React, {useState} from "react";
import {
  Box,
  Text,
  Icon,
  colorUtils,
  colors,
  Heading,
  ChoiceToken
} from "@airtable/blocks/ui";
import LocationDetails from "./LocationDetails";
import DateDetails from "./DateDetails";

import { Content, ContentLeft, ContentRight, Timeline } from "./Timeline";
import QuoteDetailsScreen from "./QuoteDetailsScreen";

let choice_colors = [colors.BLUE_LIGHT_1, colors.ORANGE_LIGHT_1, colors.PINK_LIGHT_1]

const RateCard = ({ rateDetails, selected, handleClick }) => {
  // const [selectedShipment, setSelectedShipment] = useState()

  const randomColor = ()=>{
    return choice_colors[Math.floor((Math.random() * choice_colors.length) + 1)]
  }
  return (
    <Box
      border="thick"
      backgroundColor={selected ? "greenLight1":"lightGray1"}
      flexDirection="row"
      display="flex"
      alignItems="center"
      marginBottom={2}
      onClick={(e)=>{
        handleClick(rateDetails.object_id)
      }}
    >
      <Box margin={2}>
        <img src={rateDetails.provider_image_75} alt={rateDetails.provider + "logo"}/>
        <Box display="flex" flexDirection="column">
        {rateDetails.attributes && rateDetails.attributes.map((att, i) => {
            return <ChoiceToken key={i} choice={{name: att, color: randomColor()}} marginRight={1} marginBottom={1} />
        })}
        </Box>
      </Box>
      <Box margin={2} width="100%">
        <Box marginBottom={2}>
          <Heading>{rateDetails.servicelevel.name}</Heading>
          <Text>{rateDetails.duration_terms}</Text>
        </Box>
        <Box flexDirection="row" display="flex" justifyContent="space-between">
          <Box>
            <Heading variant="caps" size="xsmall" textColor="light" marginBottom={1}>
              Provider
            </Heading>
            <Text>{rateDetails.provider}</Text>
          </Box>
          <Box>
            <Heading variant="caps" size="xsmall" textColor="light" marginBottom={1}>
              Price
            </Heading>
            <Text>
              {rateDetails.amount} {rateDetails.currency}
            </Text>
          </Box>
          <Box>
            <Heading variant="caps" size="xsmall" textColor="light" marginBottom={1}>
              Days
            </Heading>
            <Text>
              {rateDetails.estimated_days}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RateCard;
