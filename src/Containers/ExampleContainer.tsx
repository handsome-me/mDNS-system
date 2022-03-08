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
//import { io } from "socket.io-client";
const { Server_socket } = require("socket.io");
import { cos } from 'react-native-reanimated'
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

  var server:any;

  function builtSocket(){
   
    console.log('websocket')

const URL = "http://192.168.0.140";
 
const io = new Server_socket(server);

 
io.on('connection', (socket:any) => {
  console.log('a user connected');
});


     
  }
  useEffect(()=>{
    
   
      console.log("Meghraj");
     
      zeroconf.scan("http","tcp","local");
      zeroconf.unpublishService("sunlightenacp");
      zeroconf.publishService('http',"tcp","local","Meghraj",12345,{
      name:"Meghraj",
      ip:"192.168.0.121"
      });
  
      
    
  });

  
 
// OR, if not shimming via package.json "browser" field:
var net = require('react-native-tcp')
 var skt;
 let sockets:any=[];
 server = net.createServer((socket:any) => { 
  const sockAddress=socket['_address']['address'];
  socket.on('close', (data:any) => { 
    const index = sockets.findIndex( (o:any) => { 
      const Address=o['_address']['address'];
        return (Address===sockAddress) && 
(o.remotePort === socket.remotePort); 
    }); 
    if (index !== -1) sockets.splice(index, 1); 
sockets.forEach((sock:any) => { 
  const address=sock['_address']['address'];
sock.write(`${address} disconnected\n`); 
}); 
 
}); 



  socket.on('data', (data:any) => { 
    
    const d1="Hey hi.....";
    sockets.forEach((sock:any) => { 
      const address=sock['_address']['address'];
      const port=sock['_address']['port'];
      console.log("address",address,"---port",port);
    sock.write(`${address}:${port} said ${d1}\n`); 
    }); 
     }); 
   } ).listen(12345);

 
server.on('connection',  (socket:any) => { 
      console.log("buffer",socket);
  const str = socket.toString('utf8');//Buffer.from(socket.toString(), 'base64').toString('ascii'); 
      console.log('--decodedJsonObject-->', str)
  
   var clientAddress = `${socket.remoteAddress}:${socket.remotePort}`; 
  console.log(`new client connected: ${clientAddress}`); 
  sockets.push(socket);
 
   }); 


   


// var client = net.createConnection(12345,()=>{
//    // Write on the socket
//    console.log("writing to client......");
//    client.write('Hello server!');
   
// });
 
 
 
// client.on('data', function(data:any) {
//   console.log('message was received', data)
//   // socket.write('excellent!');
// });

  

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
    <Button title='Build Socket' onPress={()=>{
      //builtSocket();
    }}></Button>
    <View><Text>Hey...</Text></View>
    </ScrollView>
  )
}

export default ExampleContainer
