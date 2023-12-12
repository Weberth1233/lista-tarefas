import { View, Text, StyleSheet } from "react-native";

export default function Tarefa({ data }){
    return(
        <View>
            <Text style={styles.text}>{data.item}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        color:'#fff',
        fontSize:16,
        backgroundColor:'#000',
        marginBottom:5,
        padding:8,
        borderRadius:8
    }
});