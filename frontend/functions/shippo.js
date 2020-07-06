import { globalConfig } from "@airtable/blocks";
import * as Shippo from 'shippo';
import axios from 'axios'
import bearer from "@bearer/js";
const bearerClient = bearer(
  "pk_development_dcdd7838b4eeec0116256798bd5e4a01985060bbbf1c26135a"
);

// let API_URL = 'https://cors-proxy.picsoung.workers.dev/' //'https://fsv0sd03ta.execute-api.us-east-1.amazonaws.com/prod'

export const getTrackingInfo = async ({ carrier, trackingNumber, onSuccess, onError }) => {
  bearerClient
    .integration("goshippo")
    .get(`/tracks/${carrier}/${trackingNumber}`)
    .then(({ data }) => {
      console.log(data)
      onSuccess && onSuccess(data);
    })
    .catch(err => {
      console.log("getTrackingInfo Error: ", err.response.data);
    })
    // .finally(() => {
    //     // globalConfig.setAsync('selectedFields', []);
    // });
}

export const createShipment = async ({fromDetails, toDetails, parcel, onSuccess, onError}) => {
    bearerClient
    .integration("goshippo")
    .post(`/shipments/`,  { body: {
        address_from: fromDetails,
        address_to: toDetails,
        parcels:[{
            "length":"5",
            "width":"5",
            "height":"5",
            "distance_unit":"in",
            "weight":"2",
            "mass_unit":"lb"
         }]
    } })
    .then(({ data }) => {
      console.log(data)
      onSuccess && onSuccess(data);
    })
    .catch(err => {
      console.log("getTrackingInfo Error: ", err.response.data);
    })
}