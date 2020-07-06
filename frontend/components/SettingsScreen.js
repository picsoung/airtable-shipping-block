import React, { useState } from "react";
import {
  useGlobalConfig,
  useWatchable,
  useBase,
  Button,
  Box,
  Heading,
  Text,
  Link,
  FormField,
  Input,
  InputSynced,
  FieldPickerSynced,
  TablePickerSynced
} from "@airtable/blocks/ui";

import {cursor} from '@airtable/blocks';

const SettingsScreen = ({setVisible}) => {
  const base = useBase();

  const globalConfig = useGlobalConfig();
  // const shippoAPIKey = globalConfig.get("shippoAPIKey");
  const [getShippoAPIKey, setShippoAPIKey] = useState(globalConfig.get("shippoAPIKey"));
  const [fromAddress, setFromAddress] = useState(globalConfig.get("fromAddress"));
  const [getOrdersTableId, setOrdersTableId] = useState(globalConfig.get("ordersTableId"))
  const [selectedTableId, setSelectedTableId] = React.useState(null);
  const [selectedStatusFieldId, setSelectedStatusFieldId] = React.useState(null);
  const [selectedTrackingNumberFieldId, setSelectedTrackingNumberFieldId] = React.useState(null);

  if (!selectedTableId) {
    setSelectedTableId(cursor.activeTableId);
  }

  const tableId = selectedTableId;
  const table = base.getTableByIdIfExists(tableId);

  return (
    <Box padding={3}>
      <Heading as="h1">Settings</Heading>
      <FormField label="Shippo API key">
        <Text size="small" textColor="light">
          Get a free Shippo account <Link href="https://apps.goshippo.com/join?" style={{ textDecoration: "underline" }} target="_blank" size="small">here</Link>.
        </Text>
        <InputSynced
          globalConfigKey="shippoAPIKey"
          type="text"
          required={true}
          placeholder="shippo_" 
          value={getShippoAPIKey}
          pattern="/shippo_*/"
          // onChange={e => setShippoAPIKey(e.target.value)}
        />
      </FormField>
      <FormField label="Company or Sender Name">
        <InputSynced
          globalConfigKey="senderName"
          type="text"
          required={true} 
          placeholder="Madam C.J. Walker"
        />
      </FormField>
      <FormField label="Where do you send packages from?">
        <Text size="small" textColor="light">
          This will be used to generate shipping quotes.
        </Text>
        <InputSynced
          globalConfigKey="fromAddress"
          type="text"
          required={true} 
          placeholder="123 Flower street, San Francisco, CA, USA" 
          value={fromAddress}
        />
      </FormField>
      <FormField label="In which table do you track orders?">
        <TablePickerSynced
          table={table}
          globalConfigKey="orderTableId"
        />
      </FormField>
      <FormField label="In which table do you track order line items?">
        <TablePickerSynced
          table={table}
          globalConfigKey="orderLineItemsTableId"
        />
      </FormField>
      <FormField label="Which column do you use to track oder status?">
        <FieldPickerSynced
          table={table}
          globalConfigKey="statusFieldId"
        />
      </FormField>
      <FormField label="Which column will have tracking number?">
        <FieldPickerSynced
          table={table}
          globalConfigKey="trackingNumberFieldId"
        />
      </FormField>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="primary" onClick={() => {
            if(getShippoAPIKey === globalConfig.get("shippoAPIKey")){
              setVisible(false)
            }
          }}>
          Done
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsScreen;
