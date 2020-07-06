import React, { useState, useEffect } from "react";
import {
  initializeBlock,
  useGlobalConfig,
  useSettingsButton,
  useRecordById,
  useLoadable,
  useWatchable,
  useBase,
  Box,
  Heading,
  Button,
  Icon,
} from "@airtable/blocks/ui";
import { cursor } from "@airtable/blocks";
import SettingsScreen from "./components/SettingsScreen";
import CreateShipmentScreen from "./components/CreateShipmentScreen";
import TrackingDetails from "./components/TrackingDetails";

function ShippingBlock() {
  const globalConfig = useGlobalConfig();
  const shippoAPIKey = globalConfig.get("shippoAPIKey");
  const orderTableId = globalConfig.get("orderTableId")

  const [selectedRecordId, setSelectedRecordId] = useState(null);
  const [trackingNumber, setTrackingNumber] = useState(null);
  const [showCreateShipmentScreen, setShowCreateShipmentScreen] = useState(
    false
  );
  useLoadable(cursor);

  useWatchable(cursor, ["selectedRecordIds"], () => {
    console.log(cursor);
    if (cursor.selectedRecordIds.length > 0) {
      setSelectedRecordId(cursor.selectedRecordIds[0]);
    }
  });

  //delet when change table or view
  useWatchable(cursor, ["activeTableId", "activeViewId"], () => {
    setSelectedRecordId(null);
    setShowCreateShipmentScreen(false)
    setTrackingNumber(null)
  });

  const base = useBase();
  const activeTable = base.getTableByIdIfExists(cursor.activeTableId);
  const orderTable = base.getTableByIdIfExists(orderTableId);

  //settings setup
  const [isShowingSettings, setIsShowingSettings] = useState(false);
  useSettingsButton(function () {
    setIsShowingSettings(!isShowingSettings);
  });

  useEffect(() => {
    if (!shippoAPIKey) {
      setIsShowingSettings(true);
    }
  }, [shippoAPIKey]);

    const trackingField = globalConfig.get("trackingNumberFieldId")
    ? activeTable.getFieldByIdIfExists(
        globalConfig.get("trackingNumberFieldId")
      )
    : null;

    const selectedRecord = useRecordById(
      activeTable,
      selectedRecordId ? selectedRecordId : "",
      {
        fields: [trackingField],
      }
  );

  useEffect(() => {
    if (selectedRecord) {
      setShowCreateShipmentScreen(false) //reinit screen
      const trackingNumberValue = selectedRecord.getCellValueAsString(
        trackingField
      );
      console.log("cellValue", trackingNumberValue);
      console.log("showCreateShipmentScreen",showCreateShipmentScreen)
      if (trackingNumberValue) {
        setTrackingNumber(trackingNumberValue);
      } else {
        setTrackingNumber(null);
      }
    }
  }, [selectedRecord]);

  if (isShowingSettings || !shippoAPIKey || !orderTableId) {
    return <SettingsScreen setVisible={setIsShowingSettings} />;
  }

  // activeTable is briefly null when switching to a newly created table.
  if (!activeTable) {
    return null;
  }

  const closeScreen = () => {
    setShowCreateShipmentScreen(false)
  }

  return (
    <Box padding={3}>
      <Box>
        {!showCreateShipmentScreen && cursor.activeTableId === orderTableId && selectedRecordId && trackingNumber && (
          <TrackingDetails
            activeTable={activeTable}
            selectedRecordId={selectedRecordId}
            trackingNumber={trackingNumber}
          />
        )}
        {!showCreateShipmentScreen && cursor.activeTableId === orderTableId && selectedRecordId && !trackingNumber && (
          <Box>
            <Box
              display="flex"
              flexWrap="wrap"
              flexDirection="row"
              alignItems="center"
              margin={2}
            >
              <Icon name="warning" fillColor="darkred" size={16} />
              <Heading textColor="darkred" size="small" margin={0}>
                Cannot find any tracking information for this order.
              </Heading>
            </Box>
            <Heading size="small">
              Do you want to create a new Shipment?
            </Heading>
            <Button
              onClick={() => setShowCreateShipmentScreen(true)}
              variant="primary"
              size="large"
              icon="barcode"
            >
              Create new shipment
            </Button>
          </Box>
        )}
        {showCreateShipmentScreen && (
          <CreateShipmentScreen 
              activeTable={activeTable}
              selectedRecordId={selectedRecordId}
              showScreen={closeScreen}/>
          )}
        {cursor.activeTableId != orderTableId && (<Heading>Shipping block is only working on table <i>{orderTable.name}</i></Heading>)}
        {!selectedRecordId && cursor.activeTableId === orderTableId && (<h1>Select an order in your table to get started.</h1>)}
      </Box>
    </Box>
  );
}

initializeBlock(() => {
  return <ShippingBlock />;
});
