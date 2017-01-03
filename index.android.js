import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView  from 'react-native-maps';

export default class weather extends Component {
  onRegionChangeComplete(region){
    console.log(region);
  }

  render() {
    return (
         <MapView 
          style={styles.map}
          onRegionChangeComplete={this.onRegionChangeComplete}
          >
        </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

AppRegistry.registerComponent('weather', () => weather);
