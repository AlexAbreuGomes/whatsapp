import { View, Text, ScrollView, StatusBar ,Dimensions } from "react-native";
import { Router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";



const screenWidth = Dimensions.get('window').width;

export default function App() {

    return(
        <SafeAreaView>
            <ScrollView>
                <StatusBar/>
                <View>
                    <View>
                        
                    </View>
                    <View>
                        
                    </View>
                    <View>
                        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}