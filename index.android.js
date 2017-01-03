import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView  from 'react-native-maps';
import Api from './src/Api.js';

export default class weather extends Component {

  constructor(){
    super();
    this.state = {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
    }
  }

  render() {

    return (
      <MapView
       style={styles.map} 
       onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
       >
        <MapView.Marker
          coordinate={this.state.pin}
        />
      </MapView>
     );
  }

  onRegionChangeComplete(region){
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    });

    Api(region.latitude, region.longitude)
      .then((data)=>{
        console.log(data);
;       this.setState(data);
      });
  }
}


const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

AppRegistry.registerComponent('weather', () => weather);
