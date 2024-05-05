// @ts-nocheck

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Page } from "~/components/Page/Page";

const MapWithGeolocation = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Установите желаемый уровень масштабирования (zoom) здесь
        const zoom = 15; // Увеличение масштаба

        // Формируем URL с параметрами для карты OpenStreetMap с маркером на текущем местоположении пользователя
        const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
          longitude - 0.01
        },${latitude - 0.01},${longitude + 0.01},${
          latitude + 0.01
        }&layer=mapnik&m=${zoom}&marker=${latitude},${longitude}`;

        const iframe = document.getElementById("mapIframe");
        iframe.src = mapUrl;
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }, []);

  return (
    <div>
      <h2>Выбранный район работы:</h2>
      <iframe
        id="mapIframe"
        width="350"
        height="250"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
};

export const MapPage = () => {
  return (
    <Page
      title="Map Page"
      disclaimer={
        <>
          <MapWithGeolocation />
        </>
      }
    ></Page>
  );
};
