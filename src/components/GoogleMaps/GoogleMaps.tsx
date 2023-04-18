import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface MapCardProps {
  apiKey: string;
}

const MapCard: React.FC<MapCardProps> = ({ apiKey }) => {
  const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Google Maps
        </Typography>
        <iframe
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=GooglePlex`}
          allowFullScreen
        />
      </CardContent>
    </Card>
  );
};

export default MapCard;
