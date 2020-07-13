import React,{Fragment, useEffect} from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function Error() {
    useEffect ( ()=>{
      window.scrollTo(0,0);
    })
    return (
        <Fragment>
          <Hero bg="home">
            <Fragment>
              <Banner title="404" info="La página solicitada no existe">
                <Link to="/" className="button">Volver al inicio</Link>   
              </Banner>
            </Fragment>
          </Hero>
        </Fragment>
    )
}
