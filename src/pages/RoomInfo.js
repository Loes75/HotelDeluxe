import React, { Component, Fragment } from 'react';
import { RoomContext } from '../context';
import HeroRoom from '../components/HeroRoom';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';


export default class RoomInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.slug
        }
    }
    static contextType = RoomContext;

    render() {
        const slug = this.state.slug;
        const { getRoom } = this.context;
        const room = getRoom(slug);
        if (!room) {
            return (
                <div className="error">
                    <h3> Habitación no encontrada...</h3>
                    <Link to="/habitaciones" className="button">
                        Volver a habitaciones
                </Link>
                </div>
            );
        }
        const { name, description, capacity, size, price, breakfast, drinks, images } = room;

        return (
            <Fragment>
                <HeroRoom img={images[0]}>
                    <Fragment>
                        <Banner title={name} info="Descubre nuestras cómodas instalaciones">
                            <Link to="/habitaciones" className="button">Volver al buscador</Link>
                        </Banner>
                    </Fragment>
                </HeroRoom>
                <section className="roomImagesContainer">
                    <div className="roomImages">
                        {images.map((item, index) => (
                            <img key={index} src={item} alt={name} />
                        ))}
                    </div>
                    <div className="roomInfo">
                        <article className="details">
                            <h3>Detalles</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>precio : ${price}</h6>
                            <h6>tamaño : {size}</h6>
                            <h6>
                                max capacidad  :
                {capacity > 1 ? `${capacity}  personas` : `${capacity}  persona`}
                            </h6>
                            <h6>{drinks ? "bebidas incluidas" : "no incluye bebidas"}</h6>
                            <h6>{breakfast? "incluye desayuno": "no incluye desayuno"}</h6>
                        </article>
                    </div>
                </section>


            </Fragment>


        )
    }
}



