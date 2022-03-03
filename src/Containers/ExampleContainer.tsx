import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme, ThemeState } from '@/Store/Theme'
import Zeroconf from 'react-native-zeroconf'

  var net = require('net');
const zeroconf = new Zeroconf()

const ExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  const [
    fetchOne,
    { data, isSuccess, isLoading, isFetching, error },
  ] = useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }))
  }
  console.log("fdfmdfmdkmdf");
  zeroconf.on('start', () =>  console.log('The scan has started.'))
  
  zeroconf.on('found', (f) =>console.log('found the services',f))
  zeroconf.on("resolved",(data)=>{
  console.log("data found",data);
   
    
   

  })
  useEffect(()=>{
   
    console.log("Meghraj");
   
    zeroconf.scan("http","tcp","local");
    zeroconf.unpublishService("sunlightenacp");
    zeroconf.publishService('http',"tcp","local","Meghraj",12345,{
    name:"Meghraj",
    ip:"192.168.0.121"
  });


 
// OR, if not shimming via package.json "browser" field:
// var net = require('react-native-tcp')
 
var server = net.createServer(function(socket:any) {
  socket.write('excellent!');
}).listen(12345);
 
var client = net.createConnection(12345);
 
client.on('error', function(error:any) {
  console.log(error)
});
 
client.on('data', function(data:any) {
  console.log('message was received', data)
});

  

  },[])

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    > 
    <View><Text>Hey...</Text></View>
    </ScrollView>
  )
}

export default ExampleContainer
