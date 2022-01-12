import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import img1 from "../assets/images/3.png"
import img2 from "../assets/images/4.png"
import AntDesign from "react-native-vector-icons/AntDesign"

import { TestIds, BannerAd, BannerAdSize, InterstitialAd, AdEventType } from '@react-native-firebase/admob';

const DetailScreen = ({navigation}) => {
    
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FFF", padding: 15}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.goBack()} style={{position: 'absolute', justifyContent: "center", alignItems: "center", left: 5, width: 46, height: 46, borderRadius: 23, borderWidth: 1, borderColor: "#BEBAB3"}}>
                    <AntDesign name='left' size={20} color="#000" />
                </TouchableOpacity>
                <View style={{top: 5, width: "100%", height: 50, alignItems: "center"}}>
                    <Text style={{fontSize: 28, fontWeight: "400", color: "#000"}}>HTML</Text>
                </View>
                <Text style={{fontSize: 22, fontWeight: "400", color: "#000", textAlign: "center"}}>Tags For Headers</Text>
                <Text style={{textAlign: "center"}}>3 of 11 lessons</Text>

                <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 15}}>
                    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor: "#F8F2EE", width: 120, height: 50, borderBottomLeftRadius: 20, borderTopLeftRadius: 20, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontSize: 16, fontWeight: "700"}}>Lessons</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor: "#F8F2EE", width: 120, height: 50, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontSize: 14}}>Tests</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor: "#F8F2EE", width: 120, height: 50, borderTopRightRadius: 20, borderBottomRightRadius: 20, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontSize: 14}}>Discuss</Text>
                    </TouchableOpacity>
                </View>

                <View onPress={()=> navigation.navigate("Detail")} activeOpacity={0.8} style={{marginTop: 10, width: "100%", height: 250, borderRadius: 7, backgroundColor: "#E6EDF4"}}>
                    <Image source={img1} style={{width: 350, height: 150, top: 10}} resizeMode="cover" />
                    <View style={{position: "absolute", bottom: 7, right: 7, justifyContent: "center", alignItems: "center"}}><Image source={img2} /></View>
                </View>

                <Text style={{marginTop: 20, fontSize: 22, fontWeight: "700", color: "#000"}}>Introduction</Text>
                <Text style={{textAlign: "left"}}>
                    You can launch a new career in web develop-
ment today by learning HTML & CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, 
a lot of determination, and a teacher you trust.
Once the form data has been validated on the client-side, it is okay to submit the form. And, since we covered validation in the previous article, we're ready to submit! This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns.
                </Text>
            </ScrollView>
            <BannerAd
            unitId={TestIds.BANNER}
            size={BannerAdSize.SMART_BANNER}
            requestOptions={{
            requestNonPersonalizedAdsOnly: true,}}
            onAdLoaded={() => {
            console.log('Advert loaded');}}
            onAdFailedToLoad={(error) => {
            console.error('Advert failed to load: ', error);}}
            />
        </SafeAreaView>
    )
}

export default DetailScreen
