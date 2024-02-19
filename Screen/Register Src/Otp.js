//import liraries
import React, {useRef, useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
const {width, height} = Dimensions.get('window');

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '../../asset/img/Logo.png';
import CustomButton from '../../Common Screen/CustomButton';
import InputField from '../../Common Screen/InputField';
// create a component
const OtpInput = () => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  const [count,setCount] = useState(30)
  useEffect(() => {
    const interval = setInterval(()=>{
        if(count==0){
            clearInterval(interval)
        }else{
            setCount(count-1)
        }
    },1000);
    return () =>{
        clearInterval(interval)
    }
  }, [count])

  const otpValidate = () =>{
      let otp ='1234';
      let enteredOtp = f1+f2+f3+f4
      if (enteredOtp == otp){
          console.log('Otp is successfull get')
      }else{
          console.log('invalid otp')
      }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff',justifyContent:'center',marginTop:-20}}>
      <View style={{paddingHorizontal: 25}}>
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 50}}
        >
          <Image
            source={require('../../asset/img/Logo.png')}
            style={{
              width: width - 100,
              resizemode: 'contain',
              height: height / 7.2,
              // margin: '55',
            }}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 26,
              fontWeight: '600',
              color: '#333',
              marginBottom: 10,
              textAlign: 'center',
              width: width - 100,
              marginTop: 30,
            }}
          >
            OTP Veriification
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <TextInput
              ref={et1}
              style={[
                styles.inputView,
                {borderColor: f1.length >= 1 ? '#1263ac' : '#666'},
              ]}
              maxLength={1}
              value={f1}
              onChangeText={txt => {
                setF1(txt);
                if (txt.length >= 1) {
                  et2.current.focus();
                }
              }}
            />
            <TextInput
              ref={et2}
              style={[
                styles.inputView,
                {borderColor: f2.length >= 1 ? '#1263ac' : '#666'},
              ]}
              maxLength={1}
              value={f2}
              onChangeText={txt => {
                setF2(txt);
                if (txt.length >= 1) {
                  et3.current.focus();
                } else if (txt.length < 1) {
                  et1.current.focus();
                }
              }}
            />
            <TextInput
              ref={et3}
              style={[
                styles.inputView,
                {borderColor: f3.length >= 1 ? '#1263ac' : '#666'},
              ]}
              maxLength={1}
              value={f3}
              onChangeText={txt => {
                if (txt.length >= 1) {
                  setF3(txt);
                  et4.current.focus();
                } else if (txt.length < 1) {
                  et2.current.focus();
                }
              }}
            />
            <TextInput
              ref={et4}
              style={[
                styles.inputView,
                {borderColor: f4.length >= 1 ? '#1263ac' : '#666'},
              ]}
              maxLength={1}
              value={f4}
              onChangeText={txt => {
                if (txt.length >=1) {
                  setF4(txt);
                  et4.current.focus();
                } else if (txt.length < 1) {
                  et3.current.focus();
                }
              }}
            />
          </View>
          <View style={{marginTop:30}}>
          <Text style={{fontSize:20}}>Didn't receve OTP?</Text>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}}>
          <Text style={{fontWeight:'700',color:count == 0?'blue':'#666'}} onPress={()=>{
              setCount(30)
          }}>Resend Code</Text>
          {count !==0 && (
          <Text style={{paddingLeft: 10,fontSize:20}}>{count}</Text>
          )}
          </View>
          </View>
        </View>
        <CustomButton label={'Verify OTP'} onPress={()=> otpValidate()}/>
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
  inputView: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
    textAlign: 'center',
  },
});

//make this component available to the app
export default OtpInput;
