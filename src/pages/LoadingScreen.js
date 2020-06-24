import React from 'react';
import { ActivityIndicator, View, StatusBar } from 'react-native';

export default function LoadingScreen() {
  
  return (
    <>
      <ActivityIndicator size="large" color="#087E85" style={{ 
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }} />
      <StatusBar hidden={true} />
    </>
  );
}
