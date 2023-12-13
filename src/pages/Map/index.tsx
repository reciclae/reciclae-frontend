import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import {Header} from "../../components/Header/index";
import axios from 'axios';

interface EcoPoint {
  _id: string;
  name: string;
  latitude: string;
  longitude: string;
}

export const Map = () => {
  const [selectedPoint, setSelectedPoint] = useState<EcoPoint | null>(null);
  const [ecoPoints, setEcoPoints] = useState<EcoPoint[]>([]);
  const mapContainerStyle = {
    height: '93vh',
    width: '100%',
  };
  const defaultCenter = { lat: -34.603722, lng: -58.381592 };
  
  const fetchData = async () => {
    try {
      const response = await axios.get<EcoPoint[]>('http://localhost:3001/ecopoints', {
        headers: {
          // O token tem que vir abaixo.
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzRjN2IzOTY2MzFjNmI3MjBkNzkxNCIsImlhdCI6MTcwMjQzMzYxMiwiZXhwIjoxNzAyNTIwMDEyfQ.a9lecDfqeTspnUtHJ_my91aT4-vXXarurUeQggyf_Ww'
        },
      });
      setEcoPoints(response.data);
    } catch (error) {
      console.error('Erro ao buscar os pontos: ', error);
    }
  } 

  useEffect(() => {
    fetchData();
  },[]);

  const handleMapClick = (event: google.maps.MapMouseEvent | null) => {
    // Implementar o card ao clicar em um ponto do mapa.
    if (!event || !event.latLng) {
      return;
    }

    alert(`Latitude: ${event.latLng.lat()}`);
    alert(`Longitude: ${event.latLng.lng()}`);
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB-GKZUSQhzaWFa7HhCP76UqGfduzVeJB0"
  })

  console.log("pontos fora do return: ", ecoPoints);
  return isLoaded ? (
    <>
    <Header/>
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={2}
      center={defaultCenter}
      onClick={handleMapClick}
    >
      {ecoPoints.map((ecoPoint, index) => (
        <Marker
          key={index}
          position={{ lat: parseFloat(ecoPoint.latitude), lng: parseFloat(ecoPoint.longitude) }}
          onClick={() => setSelectedPoint(ecoPoint)}
        />
      ))}

      {selectedPoint && (
        <InfoWindow
            position={{ lat: parseFloat(selectedPoint.latitude), lng: parseFloat(selectedPoint.longitude) }}
            onCloseClick={() => setSelectedPoint(null)}
        >
            <div>
                {/* Conteúdo do card personalizado */}
                <h2>{`Eco ponto ID #${selectedPoint._id}`}</h2>
                <p>{`Latitude: ${selectedPoint.latitude}`}</p>
                <p>{`Longitude: ${selectedPoint.longitude}`}</p>
                <button onClick={() => console.log('Teste do Clique')}>
                    Ver Eco Ponto
                </button>
            </div>
        </InfoWindow>
      )}
    </GoogleMap>
    </>
  ) : <></>
}