import React, { useState, useEffect } from "react";
import {
  useGlobalConfig,
  useWatchable,
  useRecordById,
  useBase,
  Button,
  Box,
  Heading,
  Text,
  Link,
  FormField,
  InputSynced,
  FieldPickerSynced,
  TablePickerSynced,
  colors,
  Loader,
} from "@airtable/blocks/ui";

import { cursor } from "@airtable/blocks";
import { getTrackingInfo } from "../functions/shippo";
import LocationDetails from "./LocationDetails";
import DateDetails from "./DateDetails";
import TrackingHistory from "./TrackingHistory";
import FromTo from "./FromTo";

const QuoteDetailsScreen = ({ activeTable, selectedRecordId, trackingNumber }) => {
//   const base = useBase();
//   const globalConfig = useGlobalConfig();
//   const [trackingInfos, setTrackingInfos] = useState(null);
//   const [loading, setLoading] = useState(!trackingInfos);

//   useEffect(() => {
//         getTrackingInfo({
//           carrier: "shippo",
//           trackingNumber: trackingNumber,
//           onSuccess: (data) => {
//             setLoading(false);
//             setTrackingInfos(data);
//           },
//         });
//   }, [trackingNumber]);
    return <h1>Quote details</h1>
//   return !loading && trackingInfos && trackingNumber ? (
//     <Box>
//       {trackingInfos && (
//         <Box>
//           <FromTo from={trackingInfos.address_from} to={trackingInfos.address_to}/>
//           <Heading>Latest</Heading>
//           <Box
//             border="thick"
//             backgroundColor="lightGray2"
//             borderRadius="large"
//             padding={3}
//           >
//             <Text>{trackingInfos.tracking_status.status_details}</Text>
//             <DateDetails date={trackingInfos.tracking_status.status_date}/>
//             <LocationDetails
//               pinColor={colors.GREEN_LIGHT_1}
//               location={trackingInfos.tracking_status.location}
//             />
//           </Box>
//           <TrackingHistory history={trackingInfos.tracking_history} />
//         </Box>
//       )}
//     </Box>
//   ) : (
//     <Loader />
//   );
};

export default QuoteDetailsScreen;
