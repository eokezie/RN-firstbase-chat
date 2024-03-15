import React from 'react'

import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';


const Signup = () => {
  const [loading, setLoading] = React.useState(false)
  const router = useRouter();
  
  const emailRef = React.useRef('')
  const passwordRef = React.useRef('')
  const usernameRef = React.useRef('')
  const profileRef = React.useRef('')

  const handleRegister = () => {
    if (!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current) {
        Alert.alert('Sign Up', 'Please fill all the fields')
        return
    }


  };

  return (
    <CustomKeyboardView className='flex-1'>
      <StatusBar style='dark' />
      <View style={{paddingTop: hp(8), paddingHorizontal: wp(5)}} className='flex-1 gap-12'>
        <View className='items-center'>
            <Image 
                style={{ height: hp(20)}} 
                resizeMode='contain'
                source={require('../assets/images/register.png')} 
            />
        </View>
        <View className='gap-10'>
            <Text style={{ fontSize: hp(3)}} className='font-bold tracking-wider text-center text-neutral-800'>Sign Up</Text>
            {/* Inputs for signin */}
            <View className='gap-5'>
                <View style={{height: hp(6)}} className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'>
                    <Feather name='user' size={hp(2.3)} color='gray' />
                    <TextInput 
                        onChange={(value) => usernameRef.current=value}
                        style={{ fontSize: hp(1.8) }} 
                        className='flex-1 font-semibold text-neutral-700'
                        placeholder='Username'
                        placeholderTextColor={'gray'}
                    />
                </View>
                <View style={{height: hp(6)}} className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'>
                    <Octicons name='mail' size={hp(2.3)} color='gray' />
                    <TextInput 
                        onChange={(value) => emailRef.current=value}
                        style={{ fontSize: hp(1.8) }} 
                        className='flex-1 font-semibold text-neutral-700'
                        placeholder='Email address'
                        placeholderTextColor={'gray'}
                    />
                </View>
                <View style={{height: hp(6)}} className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'>
                    <Octicons name='lock' size={hp(2.3)} color='gray' />
                    <TextInput 
                        onChange={(value) => passwordRef.current=value}
                        style={{ fontSize: hp(1.8) }} 
                        className='flex-1 font-semibold text-neutral-700'
                        secureTextEntry
                        placeholder='Password'
                        placeholderTextColor={'gray'}
                    />
                </View>
                <View style={{height: hp(6)}} className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'>
                    <Feather name='image' size={hp(2.3)} color='gray' />
                    <TextInput 
                        onChange={(value) => profileRef.current=value}
                        style={{ fontSize: hp(1.8) }} 
                        className='flex-1 font-semibold text-neutral-700'
                        placeholder='Profile'
                        placeholderTextColor={'gray'}
                    />
                </View>
            </View>

            <View>
                {
                    loading ? (
                        <View className='flex-row justify-center'>
                            <Loading size={hp(6)} />
                        </View>
                    ) : (
                        <TouchableOpacity style={{ height: hp(6) }} className='bg-indigo-500 rounded-xl justify-center items-center' onPress={handleRegister}>
                            <Text style={{ fontSize: hp(2.5) }} className='text-white font-bold tracking-wider'>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    )
                }
            </View>

            <View className='flex-row justify-center'>
                <Text style={{ fontSize: hp(1.7) }} className='font-semibold text-nuetral-500'>Already have an account? </Text>
                <Pressable onPress={() => router.push('signin')}>
                    <Text style={{ fontSize: hp(1.7) }} className='font-bold text-indigo-500'>Sign In</Text>
                </Pressable>
            </View>
        </View>
      </View>
    </CustomKeyboardView>
  )
}

export default Signup