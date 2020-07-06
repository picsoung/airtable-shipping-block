import React from "react";
import { Box, Text, Icon, colorUtils, colors } from "@airtable/blocks/ui";
import LocationDetails from "./LocationDetails";

const FromTo = ({ from, to }) => {
  return (
    <Box
      flexDirection="row"
      display="flex"
      alignItems="center"
      marginBottom={2}
    >
      <Box
        border="thick"
        backgroundColor="lightGray2"
        borderRadius="large"
        padding={3}
        flexGrow={1}
      >
        <Text>🏭</Text>
        <LocationDetails location={from} />
      </Box>
      <Box textAlign="center" marginLeft={2} marginRight={2}>
        <Icon name="right" size={24} />
      </Box>
      <Box
        border="thick"
        backgroundColor="lightGray2"
        borderRadius="large"
        padding={3}
        flexGrow={1}
      >
        <Text>🏠</Text>
        <LocationDetails location={to} />
      </Box>
    </Box>
  );
};

export default FromTo;
