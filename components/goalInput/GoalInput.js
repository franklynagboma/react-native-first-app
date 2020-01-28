import React, { useState, Fragment } from 'react';
import { View, TextInput, Button, Modal } from 'react-native';

import { goalInputstyles } from './GoalInputStyle';

const goalInut = (props) => {
  // 1) Use state to get and set user input
  //since component is functional, use hooks.
  const [enteredGoal, setInputGoal] = useState('');
  const [isAddModal, setIsAddModal] = useState(false);


  const getUserGoalHandler = (inputTextValue) => {
    //Set new input goal
    setInputGoal(inputTextValue);
  };

  /**
   * If show is true, show Modal to receive user input
   * else, hide Modal and call addUserGoalHandler on App.js
   * @param {*} show 
   */
  const addButtonClickedHandler = (show, goal = '') => {
    setIsAddModal(show);

    if (!show) {
      props.addUserGoal(goal)
      //clear goal from state.
      getUserGoalHandler('');
    }
  };

  const cancelButtonClickedHandler = () => {
    setIsAddModal(false);
  }



  return (
    <Fragment>
      <Button title="Add New Goal" onPress={addButtonClickedHandler.bind(this, true)} />
      {/* Modal takes the full height and width of the screen where it is presented */}
      <Modal visible={isAddModal} animationType="slide">
        <View style={goalInputstyles.inputContainer}>
          <TextInput placeholder="Course Goal"
            style={goalInputstyles.inputField}
            onChangeText={getUserGoalHandler}
            value={enteredGoal} />

          <View style={goalInputstyles.buttonModal}>
            <View style={goalInputstyles.buttons}>
              <Button
                title="CANCEL" color="red"
                onPress={cancelButtonClickedHandler} />
            </View>

            <View style={goalInputstyles.buttons}>
              <Button
                style={goalInputstyles.buttons}
                title="ADD"
                onPress={addButtonClickedHandler.bind(this, false, enteredGoal)} />
            </View>
          </View>

        </View>
      </Modal>
    </Fragment>
  );
}

export default goalInut;