import React, { useState, Component } from 'react';
import { StyleSheet, View, ScrollView, Button, FlatList } from 'react-native';

//components
import GoalInput from './components/goalInput/GoalInput';
import GoalItem from './components/goalItem/GoalItem';

/**
 * App to get user input and display on a list view.
 */
//converted to class for single class state
export default class App extends Component {

  // //2) State for goal list
  // const [courseGoals, setCouseGoals] = useState([]);

  //use constructor, create state
  constructor(props) {
    super(props);

    this.state = {
      courseGoals: []
    }
  }

  /**
   * Add entered goal to course goal state list
   */
  addUserGoalHandler = (inputGoal) => {
    //if inputGoal is empty, return
    if(!inputGoal || inputGoal === '') {
      return;
    }
    
    //Add goal depending on old goals using useState callback.
    //since state must be added depending on previous state goals. 
    const goals = [...this.state.courseGoals, {
      /**
      * Use key or id for FlatList auto-keyExtractor
      * otherwise, any key name and assign a keyExtractor on FlatList component
      */
      //key: Math.random().toString(),
      //id: Math.random().toString(),
      uid: Math.random().toString(),
      value: inputGoal
    }];

    this.setState({
      courseGoals: goals
    });


    // setCouseGoals((previousGoals) => [...previousGoals, {
    //   /**
    //    * Use key or id for FlatList auto-keyExtractor
    //    * otherwise, any key name and assign a keyExtractor on FlatList component
    //    */
    //   //key: Math.random().toString(),
    //   //id: Math.random().toString(),
    //   uid: Math.random().toString(),
    //   value: enteredGoal
    // }]);

  }

  /**
     * Delete saved goal from course goal state list
     */
    
    deleteGoalHandler = (goalId) => {
      // delete goal item using filter, since will have id
      //second approach could be to use slice where goalId will be passed
      //to findIndex((id) => id === goalId) then, delete the item
      const courseGoals = this.state.courseGoals.filter((goal) => goal.uid !== goalId);

      this.setState({
        courseGoals
      });

    }


  render() {
    return (
      <View style={styles.screen}>

        {/* Gooal inputs */}
        <GoalInput
          addUserGoal={this.addUserGoalHandler} />

        {/* Add goal list */}
        <FlatList
          data={this.state.courseGoals}
          renderItem={(itemData) => (
            <GoalItem 
              title ={itemData.item.value} 
              id ={itemData.item.uid}
              onDelete ={this.deleteGoalHandler}/>)}
          keyExtractor={(item, index) => item.uid} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
