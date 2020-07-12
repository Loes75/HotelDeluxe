import React,{Fragment} from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function Error() {
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
