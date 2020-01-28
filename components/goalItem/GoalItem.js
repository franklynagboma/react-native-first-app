import React from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native';

import { goalItemStyle } from './GoalItemStyle';

const goalItem = (props) => (
  <TouchableOpacity onPress ={props.onDelete.bind(this, props.id)}>
  <View style={goalItemStyle.listItem}>
    <Text>{props.title}</Text>
  </View>
  </TouchableOpacity>
);

export default React.memo(goalItem);
