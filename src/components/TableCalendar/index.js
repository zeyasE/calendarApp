import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MyProvider } from '../../provider';
import { mapDate } from '../../utils/CalculateDate';
import { NameDays } from '../../constants/Calendar';

export default TableCalendar = () => {
    const { isDate } = useContext(MyProvider);
    const RowTable = ({ value, style }) => {
        return (
            <View style={{ ...style?.row, ...styles.row }}>
                {
                    value?.map((element, index) => 
                        <View key={index} style={{ ...style?.cell, ...styles.cell }}>
                            <Text>{element}</Text>
                        </View>
                    )
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <RowTable value={Object.values(NameDays)} />
            {
                [...mapDate(isDate)].map((element, index) => <RowTable key={index} value={element} index={index} />)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "black",
    },
    row: {
        flex: 1,
        // alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    cell: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        margin: '3%'
    },
});
