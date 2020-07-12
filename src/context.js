import React, { Component } from "react";
import Client from "./Contentful";

const RoomContext = React.createContext();

class RoomProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rooms: [],
            sortedRooms: [],
            featuredRooms: [],
            loading: true,
            type: "todas",
            capacity: 1,
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            breakfast: false,
            drinks: false
        }
    }
    formatData = (listRooms) => {
        let tempRooms = listRooms.map(roomInfo => {
            let id = roomInfo.sys.id;
            let images = roomInfo.fields.images.map(image => image.fields.file.url);
            let room = { ...roomInfo.fields, images, id }
            return room;
        });
        return tempRooms;
    }
    getData = () => {

        Client.getEntries({
            content_type: "hotelproject"
        }).then(data => {
            let rooms = this.formatData(data.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(room => room.price));
            this.setState({
                rooms,
                featuredRooms,
                price: maxPrice,
                maxPrice,
                loading: false,
                sortedRooms: rooms
            });

        }).catch(error => console.log(error));

    }
    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    };
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState(
            {
                [name]: value
            },
            this.filterRooms
        );
    };


    filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            breakfast,
            drinks
        } = this.state;

        let tempRooms = [...rooms];

        capacity = parseInt(capacity);
        price = parseInt(price);

        if (type !== "todas") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        tempRooms = tempRooms.filter(room => room.price <= price);

        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        if (drinks) {
            tempRooms = tempRooms.filter(room => room.drinks === true);
        }

        this.setState({
            sortedRooms: tempRooms
        });
    };

componentDidMount() {
    this.getData();
}
render() {
    return (
        <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
            {this.props.children}
        </RoomContext.Provider>
    );
}
}


const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
      return (
        <RoomConsumer>
          {(value) => <Component {...props} context={value} />}
        </RoomConsumer>
      );
    };
  }

