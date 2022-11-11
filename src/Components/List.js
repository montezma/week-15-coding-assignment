import React from "react"; 
import { House } from "./House"; 
import { housesApi } from "../rest/HousesAPI.js";

export class HousesList extends React.Component {
    state = {
       houses: []
      };
   
      componentDidMount() {
        this.fetchHouses();
      }
   
      fetchHouses = async () => {
        let houses = await housesApi.get();
        console.log(this.state);
        this.setState({ houses });
      };
   
      updateHouse = async updatedhouse => {
        await housesApi.put(updatedhouse);
        this.fetchHouses();
      };
   
      render() {
        console.log(this.state, "updated2");
        return (
          <div className="house-list">
           {this.state.houses.map(house => (
              <House
                house={house}
                key={house._id}
                updateHouse={this.updateHouse}
             />
            ))}
          </div>
       );
      }
    }
   
    

