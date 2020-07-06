import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { Box, Text, Icon, colorUtils, colors } from "@airtable/blocks/ui";

const DateDetails = ({ date, color }) => {
  return (
    <Box flexDirection="row" display="flex" alignItems="center">
      <Icon name="time" fillColor={colorUtils.getHexForColor(color)} size={14} marginRight={1}/>
      <Text>
        {dayjs(date).fromNow()}
      </Text>
    </Box>
  );
};

export default DateDetails;
