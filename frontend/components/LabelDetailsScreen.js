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
import { createTransaction } from "../functions/shippo";
import LocationDetails from "./LocationDetails";
import DateDetails from "./DateDetails";
import TrackingHistory from "./TrackingHistory";
import FromTo from "./FromTo";
import RateCard from "./RateCard"

const LabelDetailsScreen = ({ details, showScreen }) => {
  const [loading, setLoading] = useState(!!details);

  const [selectedRate, setSelectedRate] = useState(null)

  const handleRateCardClick = (key) => {
    setSelectedRate(key)
  }

//   details={"object_state":"VALID","status":"ERROR","object_created":"2020-07-06T07:30:27.937Z","object_updated":"2020-07-06T07:30:28.690Z","object_id":"11f7019be38e41589dca8ab5d3746a14","object_owner":"nicolas.grenie@typeform.com","test":true,"rate":"bc217d7564364607949d32b4a102d2a2","tracking_number":"","tracking_status":"UNKNOWN","eta":null,"tracking_url_provider":"","label_url":"","commercial_invoice_url":null,"messages":[{"source":"USPS","code":"failed_address_validation","text":"Recipient address invalid: The address as submitted could not be found. Please check for excessive abbreviations in the street address line or in the City name."}],"order":null,"metadata":"","parcel":"a5e22ebc0ff04529b99b503c27ffb0dd","billing":{"payments":[]}}

  return details ? (
    <Box>
        <Heading>Label Created 🎉</Heading>
        <Text>Tracking Number</Text>
        <Text>{details.tracking_number}</Text>
        <Box>
            <Link
                href={details.tracking_url_provider}
                target="_blank"
                icon="hyperlink"
                style={{ textDecoration: "underline" }}
            >
                Tracking URL
        </Link>
       </Box>
       <Box>
        <Link
            href={details.label_url}
            target="_blank"
            icon="file"
        >
            Shipping Label
        </Link>
        </Box>
    </Box>
  ) : (
    <Loader />
  );
};

export default LabelDetailsScreen;
