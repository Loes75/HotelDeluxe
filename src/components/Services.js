import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaSwimmingPool, FaGuitar, FaWifi } from "react-icons/fa";



export default class Services extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            services: [
                {
                  icon: <FaCocktail />,
                  title: "Servicio bar 24/7",
                  info:
                    "Los mejores licores siempre disponibles"
                },
                {
                  icon: <FaSwimmingPool />,
                  title: "Zonas húmedas",
                  info:
                    "Piscina, jacuzzi y turco"
                },
                {
                  icon: <FaGuitar />,
                  title: "Shows en vivo",
                  info:
                    "Show y música en vivo todas las noches"
                },
                {
                  icon: <FaWifi />,
                  title: "Wifi alta velocidad",
                  info:
                    "Disfruta de la alta velocidad de nuestro Wifi"
                }
              ]
        }
    }
    render() {
        return (
            <section className="section">
            <Title title="Servicios"></Title>
            <div className="services">
                {this.state.services.map(item =>{
                    return(
                        <article key={item.title} className="service">
                            <span>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.info}</p>
                        </article>
                    )
                })}
            </div>
            </section>
        );
    }
}
