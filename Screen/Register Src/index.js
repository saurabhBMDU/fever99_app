import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Picker} from '@react-native-picker/picker';

const {width,height} = Dimensions.get('window')

// import DatePicker from 'react-native-date-picker';

import InputField from '../../Common Screen/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../../Common Screen/CustomButton';

const Register = () => {
  const navigation = useNavigation();

    const [gender, setGender] = useState('');

    const handleGenderChange = (value) => {
      setGender(value);
    };
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center',backgroundColor: "#ffffff",}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 10}}>
        <View style={{paddingHorizontal: 25}}>
        <View style={{justifyContent:'center',alignItems:'center',padding: 40,}}>
         <Image
         source={require('../../asset/img/Logo.png')}
         style={{
           width: width-150,
           resizemode: 'contain',
           height: height / 9,
           marginBottom: '55',
         }}
       />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '700',
            color: '#333',
            marginBottom: 10,
            textAlign:'center',
            width:width-100,
            // marginTop: 50,
          }}>
          Create Account
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 18,
            fontWeight: '500',
            color: '#666',
            marginBottom: 30,
            textAlign:'center'
          }}>
          Fill your information below or register{'\n'}your Feverr99 account
        </Text>

        <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

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
          label={'Phone Number'}
          icon={
            <MaterialIcons
              name="phone"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="numeric"
        />

  {/*  <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 30 }}>
            <Picker
              selectedValue={gender}
              style={{ height: 50, width: '100%' }}
              onValueChange={(itemValue) => handleGenderChange(itemValue)}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>*/}

        <InputField
        label={'Gender'}
        icon={
          <MaterialIcons
            name="people"
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

        <InputField
          label={'Confirm Password'}
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

     {/*    <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{color: '#666', marginLeft: 5, marginTop: 5}}>
              {dobLabel}
            </Text>
          </TouchableOpacity>
        </View>*/}

      {/*  <DatePicker
          modal
          open={open}
          date={date}
          mode={'date'}
          maximumDate={new Date('2005-01-01')}
          minimumDate={new Date('1980-01-01')}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDobLabel(date.toDateString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />*/}

        <CustomButton label={'Register'} onPress={() => {navigation.navigate('Otp')}} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#1263ac', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;