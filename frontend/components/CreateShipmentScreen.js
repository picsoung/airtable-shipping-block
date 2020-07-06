import React, { useState } from "react";
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
  FieldPicker,
  FieldPickerSynced,
  TablePickerSynced,
  Loader,
} from "@airtable/blocks/ui";

import { FieldType } from "@airtable/blocks/models";

import { cursor } from "@airtable/blocks";
import OrderDetails from "./OrderDetails";
import { createShipment } from "../functions/shippo";
import QuoteDetailsScreen from "./QuoteDetailsScreen";

const CreateShipmentScreen = ({ activeTableId, selectedRecordId, showScreen }) => {
  const base = useBase();

  const globalConfig = useGlobalConfig();
  const [getShippoAPIKey, setShippoAPIKey] = useState(globalConfig.get("shippoAPIKey"));
  const [fromAddress, setFromAddress] = useState(globalConfig.get("fromAddress"));
  const [toAddress, setToAddress] = useState(null);
  const [clientName, setClientName] = useState(null);

  const [toAddressField, setToAddressField] = useState(null);
  const [clientNameField, setClientNameField] = useState(null);

  const [getOrdersTableId, setOrdersTableId] = useState(globalConfig.get("ordersTableId"));
  const [selectedTableId, setSelectedTableId] = useState(null);
  const [orderLineItemsField, setOrderLineItemsField] = useState(null);

  const [loading, setLoading] = useState(null);
  const [showQuoteDetailsScreen, setShowQuoteDetailsScreen] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState(null);

  if (!selectedTableId) {
    setSelectedTableId(cursor.activeTableId);
  }

  //reset when changing record
  useWatchable(cursor, ["selectedRecordIds"], () => {
    setOrderLineItemsField(null);
  });

  const tableId = selectedTableId;
  const table = base.getTableByIdIfExists(tableId);

  const record = useRecordById(table, selectedRecordId);

  const getQuote = async () => {
    setLoading(true)
    let [
      from_street,
      from_zip,
      from_city,
      from_state,
      from_country,
    ] = fromAddress.split(',').map(item=>item.trim());
    let [to_street, to_zip, to_city, to_state, to_country] = toAddress.split(',').map(item=>item.trim());

    createShipment({
      fromDetails: {
        name: globalConfig.get("senderName"),
        street1: from_street,
        city: from_city,
        state: from_state,
        zip: from_zip,
        country: from_country || "US",
      },
      toDetails: {
        name: clientName,
        street1: to_street,
        city: to_city,
        state: to_state,
        zip: to_zip,
        country: to_country || "US",
      },
      onSuccess: (data) => {
        setLoading(false)
        setQuoteDetails(data)
        setShowQuoteDetailsScreen(true)
      }
    });
  };

  const extractToAddress = async (e) => {
    setToAddressField(e);
    const value = record.getCellValueAsString(e);
    setToAddress(value);
  };
  const extractClientName = async (e) => {
    setClientNameField(e);
    const value = record.getCellValueAsString(e);
    setClientName(value);
  };

  return <>
  {!loading && !showQuoteDetailsScreen && (
    <Box>
      <Heading>Create a new Shipment</Heading>
      <FormField label="From Address">
        <InputSynced
          globalConfigKey="fromAddress"
          type="text"
          required={true}
          value={fromAddress}
          disabled
        />
      </FormField>
      <FormField label="Client name">
        <FieldPicker
          allowedTypes={[FieldType.MULTIPLE_RECORD_LINKS, FieldType.RICH_TEXT]}
          field={clientNameField}
          table={table}
          onChange={extractClientName}
        />
      </FormField>
      <FormField label="To Address">
        <FieldPicker
          allowedTypes={[FieldType.MULTIPLE_LOOKUP_VALUES,FieldType.RICH_TEXT,FieldType.ROLLUP]}
          field={toAddressField}
          table={table}
          onChange={extractToAddress}
        />
      </FormField>
      <FormField label="Which column contains order line items?">
        <FieldPicker
          allowedTypes={[FieldType.MULTIPLE_RECORD_LINKS]}
          field={orderLineItemsField}
          table={table}
          onChange={setOrderLineItemsField}
        />
      </FormField>
      {orderLineItemsField && (
        <OrderDetails
          table={table}
          recordId={selectedRecordId}
          field={orderLineItemsField}
        />
      )}
      <Box display="flex" justifyContent="flex-end" flexDirection="row" alignItems="center">
        <Button variant="danger" onClick={showScreen} margin={2}>
          Cancel
        </Button>
        <Button variant="primary" onClick={getQuote} margin={2}>
          Get quote for shipment
        </Button>
      </Box>
    </Box>
  )}
  {!loading && showQuoteDetailsScreen && (<QuoteDetailsScreen tableId={selectedTableId} details={quoteDetails} recordId={selectedRecordId} howScreen={showScreen}/>)}
  {loading && (<Loader/>)}
  </>
};

export default CreateShipmentScreen;
