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
import LabelDetailsScreen from "./LabelDetailsScreen";

const QuoteDetailsScreen = ({ tableId, recordId, trackingNumber, details, showScreen }) => {

  const base = useBase();
  const globalConfig = useGlobalConfig();
//   const [trackingInfos, setTrackingInfos] = useState(null);
  const [loading, setLoading] = useState(false);

  const [selectedRate, setSelectedRate] = useState(null)

  const [showLabelDetailsScreen, setShowLabelDetailsScreen] = useState(false);
  const [labelDetails, setLabelDetails] = useState(null);

  const orderTableId = globalConfig.get('orderTableId')
  const orderTable = base.getTableById(orderTableId)
  const record = useRecordById(orderTable, recordId);

  const handleRateCardClick = (key) => {
    setSelectedRate(key)
  }

  const createShippingLabel = () => {
    setLoading(true)
    createTransaction({
      rate: selectedRate,
      onSuccess: (data) => {
  
        let trackingNumberFieldId = globalConfig.get('trackingNumberFieldId')
        let recordDetails = {
          [trackingNumberFieldId]: data.tracking_number
        }
        orderTable.updateRecordAsync(record, recordDetails);

        setLoading(false)
        setLabelDetails(data)
        setShowLabelDetailsScreen(true)
      }
    })
  }
  return <>
  {!loading && !showLabelDetailsScreen && details && (
    <Box>
        <Heading>Quote Details</Heading>
          <FromTo from={details.address_from} fromName={details.address_from.name}to={details.address_to} toName={details.address_to.name}/>
        <Heading>Rates</Heading>
        <Text size="small" textColor="light">Click to select a rate</Text>
        {details.rates.map((rate, i) => {
            return <RateCard key={rate.object_id} selected={rate.object_id === selectedRate} rateDetails={rate} handleClick={handleRateCardClick}/>
        })}
        {selectedRate && (
         <Box display="flex" justifyContent="flex-end" flexDirection="row" alignItems="center">
            <Button variant="danger" onClick={showScreen} margin={2}>
              Cancel
            </Button>
            <Button variant="primary" onClick={createShippingLabel} margin={2}>
              Create Shipping Label
            </Button>
          </Box>
        )}
    </Box>
  )}
  {!loading && showLabelDetailsScreen && (<LabelDetailsScreen details={labelDetails} showScreen={showScreen}/>)}
  {loading && ( <Loader />)}
  </>
};

export default QuoteDetailsScreen;
