import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView  from 'react-native-maps';

export default class weather extends Component {

  constructor(){
    super();
    this.state = {
      pin: {
        latitude: 0,
        longitude: 0
      }
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
    })
  }
}


const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

AppRegistry.registerComponent('weather', () => weather);
