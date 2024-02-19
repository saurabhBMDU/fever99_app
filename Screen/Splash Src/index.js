//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const {width, height} = Dimensions.get('window');

// create a component
const staticImage = require('../../asset/img/Logo.png');
const Splash = () => {
  return (
    <View style={styles.container}>
    <LinearGradient
    colors={['#ffffff', '#ffffff']}
    style={styles.container2}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
      <ImageBackground
        source={require('../../asset/img/splash2.png')}
        // imageStyle={{opacity: 0.6}}
        style={styles.imgStyle}
      >
     
        <Image source={staticImage} style={styles.img} />
       
      </ImageBackground>
      </LinearGradient>
     
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#1263ac',
    // backgroundColor:'#ffffff'
  },
  img: {
    width: width - 100,
    // height: height,
    resizeMode: 'contain',
    // backgroundColor: 'white',
    // marginTop: 300,
  },
  imgStyle: {
    width: width,
    height: height,
    resizeMode: 'cover',
    backgroundColor: 'rgba(18,99,172,0.6)',
    // marginTop: 300,
    alignItems: 'center',
    justifyContent:"center"
  },
//   container: {
//     borderWidth:1,
//     borderColoe:'red',
//     width:width,
//     height:height,
//   },
});

//make this component available to the app
export default Splash;
