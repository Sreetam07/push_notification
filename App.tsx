import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    requestPermissionAndroid();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const requestPermissionAndroid = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('Permission granted');
    } else {
      Alert.alert('Permission denied');
    }
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
