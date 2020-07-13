import React , { Fragment , useEffect}from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

export default function Rooms() {
    useEffect ( ()=>{
      window.scrollTo(0,0);
    })
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
