import React from "react";
import { Box, Text, Icon, colorUtils, colors } from "@airtable/blocks/ui";
import LocationDetails from "./LocationDetails";
import DateDetails from "./DateDetails";

import { Content, ContentLeft, ContentRight, Timeline } from "./Timeline";

const HistoryStep = ({ stepDetails }) => {
  return (
    <Content>
      <ContentLeft>
        <DateDetails
          date={stepDetails.status_date}
          color={colors.GRAY_LIGHT_1}
        />
      </ContentLeft>
      <ContentRight title={stepDetails.status}>
        <Text>{stepDetails.status_details}</Text>
        <LocationDetails
          pinColor={colors.GREEN_LIGHT_1}
          location={stepDetails.location}
        />
      </ContentRight>
    </Content>
  );
};

export default HistoryStep;
