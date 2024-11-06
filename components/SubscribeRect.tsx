import React, { useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const SubscibeRect = ({
  indexNumber,
  isSubscribed,
}: {
  indexNumber: number;
  isSubscribed: boolean;
}) => {
  useEffect(() => {
    let interval;

    if (isSubscribed) {
      console.log(`${indexNumber} is subscribed`);
      interval = setInterval(() => {
        console.log(`${indexNumber} is still subscribed`);
      }, 2000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isSubscribed, indexNumber]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log('hello')}
    >
      <Text>rectangle: {indexNumber}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginHorizontal: 16,
    borderColor: 'black',
    marginTop: 5,
    padding: 8,
  },
});

export default SubscibeRect;
