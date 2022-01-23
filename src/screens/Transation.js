import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import qrcode from "../../assets/qrcode.jpeg"
import { Icon } from 'react-native-elements';
import Log from "../components/Log";
export default function Transation() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.solde}>155 f</Text>
                <View style={styles.qrContainer}>
                    <ImageBackground source={require('../../assets/bg.png')} resizeMode="cover" style={styles.image}>
                        <View style={styles.codeQr}>
                            <Image
                                style={styles.logo}
                                source={require('../../assets/qrcode.jpeg')}
                            />
                        </View>
                    </ImageBackground>

                </View>

            </View>
            <View style={styles.flotContainer}>
                <View>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/send-ico.png')} />
                    <Text>TRANSFERT</Text>
                </View>
                <View style={{backgroundColor:"#343434",height:"100%",width:1}}/>
                <View>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/factur-ico2.png')} />

                    <Text>FACTURE</Text>
                </View>

            </View>
            <View style={styles.down}>
                <Log/>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'


    },
    top:{
        backgroundColor: '#545fd5',
        height:'45%',
        width: '100%',
        justifyContent: "center",

        alignItems:"center"


    },
    down:{
        backgroundColor: '#ffffff',
    },
    qrContainer:{
        justifyContent: "center",
        alignItems:"center",
        width : "70%",
        height: 150,
        borderRadius: 10,
        backgroundColor:"#ffffff"

    },
    solde:{
        color:'#ffffff',
       textAlign:"center",
        fontSize:25,
        fontWeight:"bold"


    },
    codeQr:{
        borderRadius:10,
        width : 130,
        height: 130,
        backgroundColor:"#ffffff"

    },
    logo: {
        width: "100%",
        height: "100%",
    },
    flotContainer:{
        borderRadius:10,
        zIndex:3,
        alignSelf:"center",
        marginTop:"65%",
        position:"absolute",
        backgroundColor:"#ffffff",
        height:55,
        width:"90%",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        flexDirection:"row",
        justifyContent:"space-around",
},
    icon:{
        width: 45,
        height: 45,
        alignSelf:"center",
        marginTop:10
    },
    image: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 50,
    },
});
