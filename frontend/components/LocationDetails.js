import React from "react";
import { Box, Text, Icon, colorUtils, colors } from "@airtable/blocks/ui";

const LocationDetails = ({ location, pinColor }) => {
  return location && (
    <Box flexDirection="row" display="flex" alignItems="center">
      <Icon name="mapPin" fillColor={colorUtils.getHexForColor(pinColor)} size={16} />
      <Text>
        {location.city}, {location.zip} - {location.state}, {location.country}
      </Text>
    </Box>
  );
};

export default LocationDetails;
