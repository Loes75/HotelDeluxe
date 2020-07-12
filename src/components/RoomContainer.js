import React from "react";
import { withRoomConsumer } from "../context";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import {Fragment} from 'react';

function RoomContainer({ context }) {
  const {sortedRooms, rooms } = context;
  return (
    <Fragment>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </Fragment>
  );
}


export default withRoomConsumer(RoomContainer);
