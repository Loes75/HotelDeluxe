import React from 'react';
import Room from './Room';

function RoomList({rooms}) {
    if (rooms.length === 0) {
        return (
          <div className="empty">
            <h3>No hay habitaciones disponibles con esas características</h3>
          </div>
        );
      }
    return (
        <div className="roomList">
            {rooms.map(room =>{
               return <Room key={room.id}room={room}></Room>
            })}
        </div>
    )
}

export default RoomList;
