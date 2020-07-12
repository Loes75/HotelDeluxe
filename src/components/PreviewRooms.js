import React, { Component } from 'react';
import Title from './Title';
import { RoomContext } from '../context';
import Room from './Room';


export default class PreviewRooms extends Component {
    static contextType = RoomContext;
    
    render() {
        let featuredRooms = this.context.featuredRooms;
        return (
            <section className="roomPreview">
                <Title title="Conócenos"></Title>
                <div className="previewContainer">
                    {featuredRooms.map(room => {
                        return (
                            <Room key={room.id} room={room}></Room>
                        )
                    })}
                </div>

            </section>
        )
    }
}
