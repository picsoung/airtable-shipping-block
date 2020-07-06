import React from "react";
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import {
//     Timeline,
//     Content,
//     ContentYear,
//     ContentBody,
//     Description
//   } from 'vertical-timeline-component-react';

import {Content, ContentLeft, ContentRight, Timeline} from "./Timeline"

import {
  Box,
  Text,
  Icon,
  colorUtils,
  colors,
  Heading,
  loadCSSFromString
} from "@airtable/blocks/ui";

import HistoryStep from "./HistoryStep"

const TrackingHistory = ({ history}) => {
  return (
    <Box>
      <Heading>History</Heading>
      <Timeline>
        {history && history.map((step, i) => {
            return <HistoryStep key={i} stepDetails={step}/>
        })}
      </Timeline>
    </Box>
  );
};

export default TrackingHistory;
