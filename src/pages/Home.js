import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import PreviewRooms from '../components/PreviewRooms';



export default function Home() {
    return (
        <Fragment>
          <Hero bg="home">
            <Fragment>
              <Banner title="Bienvenido al Hotel Rest Deluxe" info="Instalaciones perfectas para descansar">
                <Link to="/habitaciones" className="button">Ver habitaciones</Link>   
              </Banner>
            </Fragment>
          </Hero>
          <Services></Services>
          <PreviewRooms></PreviewRooms>
        </Fragment>
    )
}
