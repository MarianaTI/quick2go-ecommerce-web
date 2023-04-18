import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo } from "react";
import GetAllSaleUseCase from "@/application/usecases/saleUseCase/GetAllSaleUseCase";
import SaleRepo from "@/infrastructure/implementation/httpRequest/axios/SaleRepo";
import Sale from "@/domain/entities/sale";
import React, { useEffect, useState } from "react";
import axios from "axios";

const GoogleMaps: NextPage = () => {
  const libraries = useMemo(() => ["places", "geocoding"], []);
  const mapCenter = useMemo(() => ({ lat: 20.97537, lng: -89.61696 }), []);
  const markerPosition = useMemo(
    () => ({ lat: 20.96982764120029, lng: -89.5677268901399 }),
    []
  );

  //Extraer datos de la api
  const [markers, setMarkers] = useState<Sale[]>([]);

  const saleRepo = new SaleRepo();
  const getAllSale = new GetAllSaleUseCase(saleRepo);

  useEffect(() => {
    const getAllSaleMethod = async () => {
      try {
        const { data, status } = await getAllSale.run();
        if (status === 200 && Array.isArray(data)) {
          const markersgot = await getMarkers(data);
          setMarkers(markersgot);
        } else {
          console.error("Los datos no son del tipo esperado");
        }
      } catch (e) {
        console.error(e);
      }
    };
    getAllSaleMethod();
  }, []);

  const getMarkers = async (data: Sale[]) => {
    const markersgot = await Promise.all(
      data.map(async (sale) => {
        const {direccion} = sale;
        const { lat, lng } = await geocode(direccion) || { lat: null, lng: null};
        return {
          ...sale,
          lat,
          lng,
        };
      })
    );
    return markersgot;
  }

  const geocode = async (address: string | undefined) => {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDwR6sYk_7YgjK9mXf10Tz-pOED9fDEXH8');
      const { lat, lng } = response.data.results[0].geometry.location;
      return { lat, lng };
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDwR6sYk_7YgjK9mXf10Tz-pOED9fDEXH8",
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={11}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{
          width: "300px",
          height: "300px",
          borderRadius: "10px",
          marginLeft: "13%",
          marginTop: "6%",
          marginBottom: "6%",
          boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",
        }}
        onLoad={(map) => console.log("Map Loaded")}
      >
        {
          markers.map((marker) => (
            <Marker key={marker.id}  />
          ))
        }
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps;
