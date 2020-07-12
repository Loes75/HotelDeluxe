import React from 'react';
import { useContext } from "react";
import { RoomContext } from '../context';
import Title from './Title';


const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

function RoomFilter({ rooms }) {

    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, breakfast, drinks } = context;

    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => (
        <option key={index} value={item}>{item}</option>
    ));
    let types = getUnique(rooms, "type");
    types=["todas", ...types];
    types = types.map((item, index) => (
        <option key={index} value={item}>{item}</option>
    ));
    

    return (
        <section className="filters">
            <Title title="Buscar habitaciones"></Title>
            <form className="filterForm">
                <div className="formGroup">
                    <label htmlFor="type">Tipo</label>
                    <select name="type" id="type" onChange={handleChange}
                        className="formItem" value={type}>{types}</select>
                </div>
                <div className="formGroup">
                    <label htmlFor="capacity">Huéspedes</label>
                    <select name="capacity" id="capacity" onChange={handleChange}
                        className="formItem" value={capacity}>{people}</select>
                </div>
                <div className="formGroup">
                    <label htmlFor="price">Precio ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price"
                        value={price} onChange={handleChange} className="formItem"
                    />
                </div>
                <div className="formGroup">
                    <div className="extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">Desayuno</label>
                    </div>
                    <div className="extra">
                        <input type="checkbox" name="drinks" id="drinks" checked={drinks}
                            onChange={handleChange}
                        />
                        <label htmlFor="drinks">Bebidas</label>
                    </div>
                </div>

            </form>

        </section>
    )
}
export default RoomFilter;