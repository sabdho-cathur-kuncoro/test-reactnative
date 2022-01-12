import React from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import img1 from "../assets/images/1.png"
import img2 from "../assets/images/2.png"
import Fontisto from "react-native-vector-icons/Fontisto"

import { InterstitialAd, TestIds, AdEventType} from '@react-native-firebase/admob';

const HomeScreen = ({navigation}) => {
    const showInterstitialAd = () => {
        // Create a new instance
        const interstitialAd = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

        // Add event handlers
        interstitialAd.onAdEvent((type, error) => {
            if (type === AdEventType.LOADED) {
                interstitialAd.show();
            }
        });

        // Load a new advert
        interstitialAd.load();
        }
    const adsTes = ()=> {
        navigation.navigate("Detail");
        showInterstitialAd();
    }
    
    return (
        <SafeAreaView style={{flex: 1, padding: 15, backgroundColor: "#FFF"}}>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{color: "#000", fontSize: 18, fontWeight: "400"}}>Hello,</Text>
                <Text style={{color: "#000", fontSize: 36, fontWeight: "700"}}>Juana Antonieta</Text>

                <TouchableOpacity style={{position: "absolute", borderWidth: 1, borderColor: "#BEBAB3", width: 46, height: 46, borderRadius: 23, alignItems: "center", justifyContent: "center", right: 0, top: 20}}>
                    <Fontisto name='bell' size={24} color='#000' />
                </TouchableOpacity>
                
                <View style={{marginTop: 10}}>
                    <TextInput style={{width: "100%", borderWidth: 1, borderRadius: 7, borderColor: "#BEBAB3", }} placeholder='Search course'>
                    </TextInput>
                    <TouchableOpacity activeOpacity={0.8} style={{position: "absolute", right: 10, top: 15}}>
                        <Fontisto name='search' size={24} color='#000' />
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: 10, flexDirection: "row"}}>
                    <Text style={{color: "#000"}}>Category: </Text>
                    <View style={{marginLeft: 5, width: 54, height: 27, backgroundColor: "#65AAEA", alignItems: "center", justifyContent: "center", borderRadius: 10}}><Text style={{color: "#FFF"}}>#CSS</Text></View>
                    <View style={{marginLeft: 5, width: 54, height: 27, backgroundColor: "#65AAEA", alignItems: "center", justifyContent: "center", borderRadius: 10}}><Text style={{color: "#FFF"}}>#UX</Text></View>
                    <View style={{marginLeft: 5, width: 54, height: 27, backgroundColor: "#65AAEA", alignItems: "center", justifyContent: "center", borderRadius: 10}}><Text style={{color: "#FFF"}}>#Swift</Text></View>
                    <View style={{marginLeft: 5, width: 54, height: 27, backgroundColor: "#65AAEA", alignItems: "center", justifyContent: "center", borderRadius: 10}}><Text style={{color: "#FFF"}}>#UI</Text></View>
                </View>

                <TouchableOpacity onPress={adsTes} activeOpacity={0.8} style={{borderColor: "#BEBAB3", marginTop: 30, width: "100%", height: 300, borderWidth: 1, borderRadius: 7}}>
                    <View style={{backgroundColor: "#F8F2EE", width: "100%", height: 200, borderRadius: 7, alignItems: "center"}}>
                        <Image source={img1} style={{width: 343, height: 138, top: 10}} resizeMode="cover" />
                        <View style={{position: "absolute", bottom: 7, right: 7, justifyContent: "center", alignItems: "center", width: 64, height: 27, backgroundColor: "#65AAEA", borderRadius: 12}}><Text style={{color: "#FFF"}}>$ 50</Text></View>
                    </View>
                    <View style={{paddingTop: 10, paddingHorizontal: 15}}>
                        <Text style={{color: "#048a0b"}}>3 h 30 min</Text>
                        <Text style={{color: "#000", fontSize: 26}}>UI</Text>
                        <Text style={{color: "#000"}}>Advanced mobile interface design</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={{borderColor: "#BEBAB3", marginTop: 30, width: "100%", height: 300, borderWidth: 1, borderRadius: 7}}>
                    <View style={{backgroundColor: "#E6EDF4", width: "100%", height: 200, borderRadius: 7, alignItems: "center", justifyContent: "center"}}>
                        <Image source={img2} style={{width: 343, height: 138, top: 0}} resizeMode="cover" />
                        <View style={{position: "absolute", bottom: 7, right: 7, justifyContent: "center", alignItems: "center", width: 64, height: 27, backgroundColor: "#65AAEA", borderRadius: 12}}><Text style={{color: "#FFF"}}>$ 50</Text></View>
                    </View>
                    <View style={{paddingTop: 10, paddingHorizontal: 15}}>
                        <Text style={{color: "#048a0b"}}>3 h 30 min</Text>
                        <Text style={{color: "#000", fontSize: 26}}>UI</Text>
                        <Text style={{color: "#000"}}>Advanced mobile interface design</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
// F8F2EE