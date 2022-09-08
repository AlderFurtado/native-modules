import React, { useState } from 'react';
import { View, Button, NativeModules, ActivityIndicator,Text } from 'react-native';
const { LoopOperationModule } = NativeModules

export default function App() {
  const [statusMethodJs, setStatusMethodJs] = useState("idle")
  const [statusMethodNative, setStatusMethodNative] = useState("idle")
  
  const execBigOperationWithJavascript = () => {
    setStatusMethodJs("loading")
    let t0 = performance.now()
    
    for (let i = 0; i < 100;i++){
      for (let i = 0; i < 100000000;i++){
      }
    }; 

    let t1 = performance.now()
    
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
    setStatusMethodJs("Finished in"+(t1 - t0))
  }

  const execBigOperationWithNativeModule = async () => {
    setStatusMethodNative("loading")
    let t0 = performance.now()
    
    await LoopOperationModule.execBigLoop()
  
    let t1 = performance.now()
    
    console.log("Call to doSomething took native " + (t1 - t0) + " milliseconds.")
    setStatusMethodNative("Finished in"+(t1 - t0))
  }

  return (
    <View style={{flexDirection:"row", flex:1,justifyContent:"flex-start"}}>
      <View style={{flex:1}}>
        <Button title='Run method js' onPress={() => {
          execBigOperationWithJavascript()
        }}/>
        
        {statusMethodJs == "loading" && <ActivityIndicator />}
        
        {statusMethodJs != "idle" 
        && statusMethodJs != "loading" &&
        <Text>{statusMethodJs}</Text>
        }
      </View>
      <View style={{flex:1}}>
        <Button title='Run method native' onPress={() => {
          execBigOperationWithNativeModule()
        }}/>
        {statusMethodNative == "loading" && <ActivityIndicator />}
        
        {statusMethodNative != "idle" 
        && statusMethodNative != "loading" &&
        <Text>{statusMethodNative}</Text>
        }
      </View>
    </View>
  );
}

