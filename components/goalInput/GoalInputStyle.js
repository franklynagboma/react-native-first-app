import { StyleSheet } from 'react-native';

export const goalInputstyles = StyleSheet.create({
  inputContainer: {
    flex: 1, /** This works exactly like layout-weight in Android. */
    flexDirection: 'column', /** Default */
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputField: {
    width: '80%',
    minHeight: 50,
    padding: 5,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 0.5
  },
  buttonModal: {
    width: '70%',
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  buttons: {
    width: '40%'
  }

});