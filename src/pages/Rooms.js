import React , { Fragment }from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

export default function Rooms() {
    return (
        <Fragment>
          <Hero bg="rooms">
            <Fragment>
              <Banner title="Nuestras habitaciones">
                <Link to="/" className="button">Volver al inicio</Link>   
              </Banner>
            </Fragment>
          </Hero>
          <RoomContainer></RoomContainer>
        </Fragment>
    )
}
