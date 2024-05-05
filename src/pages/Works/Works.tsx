// @ts-nocheck

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Accordion from "~/components/Accordion/Accordion";
import { Page } from "~/components/Page/Page";

export const Works = () => {
  return (
    <Page
      title="Мои заказы"
      disclaimer={
        <>
          <h3>Новые заказы:</h3>
          <Accordion></Accordion>
        </>
      }
    ></Page>
  );
};
