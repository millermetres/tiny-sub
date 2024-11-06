import React, { useContext, useEffect } from 'react';
import { SubscriptionContext } from '@/context/SubscriptionContext';
import { Text, StyleSheet, View } from 'react-native';

const SubscibeRect = ({ indexNumber }: { indexNumber: number }) => {
  // pass data from some central place instead
  // const { subscriptions } = useContext(SubscriptionContext);

  // useEffect(() => {
  //   const isSubscribed = !!subscriptions[indexNumber];
  //   if (isSubscribed) {
  //     console.log(`${indexNumber} is subscribed`);
  //     interval = setInterval(() => {
  //       console.log(`${indexNumber} is still subscribed`);
  //     }, 2000);
  //   }
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [subscriptions, indexNumber]);

  return (
    <View style={styles.container}>
      <Text>rectangle: {indexNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginHorizontal: 16,
    borderColor: 'black',
    marginTop: 5,
    padding: 8,
    height: 100,
  },
});

export default SubscibeRect;
