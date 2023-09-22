import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../common/utils/Colors';
import Constants from '../../common/utils/Constants';
import { getCurrentDateString } from '../../common/utils/time';

export default function Header() {
  const date = new Date();
  const weekDayName = Constants.weekDays[date.getDay()];
  const dateString = getCurrentDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.weekDay}>{weekDayName}</Text>
      <Text style={styles.month}>{dateString}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
  },
  weekDay: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.textWhite,
    textAlign: 'center',
  },
  month: {
    marginTop: 20,
    fontSize: 20,
    color: Colors.secondaryTextGray,
    textAlign: 'center',
  },
});
