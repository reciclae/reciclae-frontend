import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/Header/index";
import { api } from '../../api/index';

interface EcoPoint {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
  metal: boolean;
  plastic: boolean;
  paper: boolean;
  glass: boolean;
  organic: boolean;
  electronic: boolean;
}

export const Map = () => {
  const navigate = useNavigate();
  const [selectedPoint, setSelectedPoint] = useState<EcoPoint | null>(null);
  const [ecoPoints, setEcoPoints] = useState<EcoPoint[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false); // Adicionado estado para controlar exibição do modal
  const mapContainerStyle = {
    height: '93vh',
    width: '100%',
  };
  const defaultCenter = { lat: -6.88953552075925, lng: -38.54378184892696 };
  const token = localStorage.getItem("auth.token");
  const user = localStorage.getItem("auth.user");

  const fetchData = async () => {
    try {
      const response = await api.get<EcoPoint[]>('/ecopoints/public');
      setEcoPoints(response.data);
    } catch (error) {
      console.error('Erro ao buscar os pontos: ', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleMapClick = (event: google.maps.MapMouseEvent | null) => {
    if (!event || !event.latLng) {
      return;
    }

    setSelectedPoint({
      id: "-1",
      name: "Ponto selecionado",
      latitude: event.latLng.lat().toString(),
      longitude: event.latLng.lng().toString(),
      metal: false,
      plastic: false,
      paper: false,
      glass: false,
      organic: false,
      electronic: false,
    });

    // Mostra o modal ao clicar no mapa em um local sem ponto
    setShowCreateModal(true);
  };

  const handleCreateEcoPoint = () => {
    navigate(`/point/create/${selectedPoint?.latitude}/${selectedPoint?.longitude}`);
    // Após a navegação, esconde o modal
    setShowCreateModal(false);
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string
  });

  return isLoaded ? (
    <>
      <Header />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={defaultCenter}
        onClick={user ? handleMapClick : () => {}}
      >
        {ecoPoints.map((ecoPoint, index) => (
          <Marker
            key={index}
            position={{ lat: parseFloat(ecoPoint.latitude), lng: parseFloat(ecoPoint.longitude) }}
            onClick={() => {
              setSelectedPoint(ecoPoint); 
              navigate(`/point/select/${ecoPoint.id}`);               
            }}
          />
        ))}

        {selectedPoint && (
          <InfoWindow
            position={{ lat: parseFloat(selectedPoint.latitude), lng: parseFloat(selectedPoint.longitude) }}
            onCloseClick={() => {
              setSelectedPoint(null);
              setShowCreateModal(false);
            }}
          >
            <div>
              <h2>{`Eco ponto: ${selectedPoint.name}`}</h2>
              {/* Mostra o botão no modal apenas se não houver um ponto existente */}
              {!ecoPoints.some(point => point.latitude === selectedPoint.latitude && point.longitude === selectedPoint.longitude) && (
                <>
                {
                  user && (
                    <button onClick={handleCreateEcoPoint}>
                      Criar Eco ponto
                    </button>
                  )
                }
                </>
              )}
            </div>
          </InfoWindow>
        )}

      </GoogleMap>

      {/* Modal de criação de Eco ponto */}
      {showCreateModal && (
        <div style={modalStyle}>
          <h2>Criar Eco Ponto</h2>
          <p>{`Latitude: ${selectedPoint?.latitude}`}</p>
          <p>{`Longitude: ${selectedPoint?.longitude}`}</p>
          <button onClick={handleCreateEcoPoint}>Criar Eco ponto</button>
        </div>
      )}
    </>
  ) : <></>
}

const modalStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  top: '130px',
  left: '100px',
  padding: '20px',
  backgroundColor: 'white',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
};
