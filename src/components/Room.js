import React from 'react';
import defaultImg from '../images/room.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Room({room}) {
    AOS.init({once : true , duration : 700});
    return (
        <article data-aos="fade-up" className="room">
            <div className="imgContainer">
                <img src={room.images[0] || defaultImg} alt={room.name}></img>
                <a className="button btnInfo" href={`/habitaciones/${room.slug}`}>Info</a>
                <p className="roomInfo">{room.name}</p>
            </div>
        </article>
    )
}




