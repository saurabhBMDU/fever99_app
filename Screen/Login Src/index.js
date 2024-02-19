//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '../../asset/img/Logo.png';
import CustomButton from '../../Common Screen/CustomButton';
import InputField from '../../Common Screen/InputField';
// create a component
const Login = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{flex: 1,backgroundColor:"#ffffff"}}
    >
      <View style={{paddingHorizontal: 25}}>
        <View style={{justifyContent:'center',alignItems:'center',padding: 50,}}>
         <Image
         source={require('../../asset/img/Logo.png')}
         style={{
           width: width-100,
           resizemode: 'contain',
           height: height / 7.2,
           // margin: '55',
         }}
       />
         <Text style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 18,
            fontWeight: '500',
            color: '#666',
            width: width-50,
            paddingTop:15

            // marginBottom: 30,
            // marginTop:50
          }}>Hii, welcome back you have been revised</Text>
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
            marginTop:30
          }}
        >
          Login
        </Text>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />
        <TouchableOpacity style={{marginBottom:10,paddingBottom: 10,alignItems:'flex-end'}} onPress={{}}>
        <Text style={{color: '#1263ac', fontWeight: '700'}}>Forget Password ?</Text>
        </TouchableOpacity>

        <CustomButton label={'Login'} onPress={() => {}} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}
        ></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
            <Text style={{color: '#1263ac', fontWeight: '700'}}> Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#000000',
  },
  viewContainer: {
    backgroundColor: '#ffffff',
    width: width,
    height: height / 2.5,
    borderBottomLeftRadius: width / 0.2,
    // borderBottomRightRadius: width/0.1,
  },
});

//make this component available to the app
export default Login;
