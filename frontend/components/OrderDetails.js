import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Icon,
  colorUtils,
  colors,
  Heading,
  RecordCardList,
  useGlobalConfig,
  useBase,
  useRecordById,
} from "@airtable/blocks/ui";

const OrderDetails = ({ table, recordId, field }) => {
  const globalConfig = useGlobalConfig();
  // const shippoAPIKey = globalConfig.get("shippoAPIKey");
  const [lineItems, setLineItems] = useState(null);
  const [orderLinesItemsTableId, setOrderLinesItemsTableId] = useState(globalConfig.get("orderLineItemsTableId"));

  const base = useBase();
  const orderLinesTable = base.getTableByIdIfExists(orderLinesItemsTableId);

  const record = useRecordById(table, recordId);
  const lines = record.getCellValue(field);
  const lineRecords = lines.map((r) => {
    let orderRecord = useRecordById(orderLinesTable, r.id);
    return orderRecord;
  });

  return table && recordId && lineRecords ? (
    <Box>
      <Heading size="small">Order details</Heading>
      <RecordCardList height={lineRecords.length*100} records={lineRecords} />
    </Box>
  ) : null;
};

export default OrderDetails;
