import { useContext } from 'react';
import { StyleSheet, View, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TableCalendar from '../../components/TableCalendar';
import { MyProvider } from '../../provider';

export default Calendar = () => {

  const { increaseMonth, decreaseMonth } = useContext(MyProvider);
  const touchCoordinate = (e) => {
    if (e.nativeEvent?.locationY > 0) {
      increaseMonth();
    } else if (e.nativeEvent?.locationY < 0) {
      decreaseMonth();
    }
    // console.log(e.nativeEvent)
  }

  return (
    <View style={styles.container}>
      <StatusBar
        style='auto'
      />
      <TouchableWithoutFeedback onPressOut={touchCoordinate} >
        <ScrollView>
          <TableCalendar />
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
