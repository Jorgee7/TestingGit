import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LeyendasArceus from '../../../Images/LeyendasArceus_Game.jpg';

const styleCard = {margin:'5px',maxWidth: '345px' }
export default function CardGames() {
    return (
      <Card style={styleCard}>
        <CardMedia
          component="img"
          height="140"
          image={LeyendasArceus}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Leyendas Pokémon: Arceus
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Leyendas Pokémon: Arceus es un próximo videojuego de rol de acción desarrollado por Game Freak 
            y publicado por The Pokémon Company y Nintendo para Nintendo Switch. Es parte de la octava generación 
            de la serie de videojuegos Pokémon.
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    );
  }