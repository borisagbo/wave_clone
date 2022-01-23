import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
const data = [
    {
        id:1,
        title:"Retrait",
        price:"-1.000",
        date: "Jan. 18, 12:40"
    },
    {
        id:2,
        title:"Retrait",
        price:"-3.000",
        date: "Jan. 18, 12:40"
    },
    {
        id:4,
        title:"Retrait",
        price:"-1.500",
        date: "Jan. 18, 12:40"
    },
    {
        id:5,
        title:"Retrait",
        price:"-1.500",
        date: "Jan. 18, 12:40"
    },
    {
        id:25,
        title:"Retrait",
        price:"-1.500",
        date: "Jan. 18, 12:40"
    },
    {
        id:59,
        title:"Retrait",
        price:"-1.500",
        date: "Jan. 18, 12:40"
    }

]

const Item = ({ item }) => (
    <View style={styles.itemBox}>
        <View>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
        </View>
        <Text style={styles.price}>{item.price}</Text>
    </View>
);
export default function Log(){


    const renderItem = ({ item }) => {

        return (
            <ScrollView>
                <Item item={item}/>
            </ScrollView>

        );
    };

    return(
     <SafeAreaView style={styles.container}>
             <FlatList
                 data={data}
                 renderItem={renderItem}
                 keyExtractor={(item) => item.id}
             />



     </SafeAreaView>
    );

}

const  styles=StyleSheet.create({
    container:{
        marginTop:60,
        alignSelf:"center",
        width:"90%",
        backgroundColor: "#ffffff",

        display: "flex",
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    },
    itemBox:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:10,
        marginVertical: 20

    },
    text:{
        color:"#1a1d4b",
        fontSize:20,
        fontWeight:"bold",

    },

    price:{
        color:"#1a1d4b",
        fontSize:20,
        fontWeight:"bold"
    },
    date:{
        color:"#797979",
        fontSize:15,
        fontWeight:"bold",
    }


})
