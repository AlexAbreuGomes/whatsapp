import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ChatItemTypes } from "../types/chatTypes"; 
import { SafeAreaView } from "react-native-safe-area-context";

type Props = { 
    chatItem: ChatItemTypes
}

export const ChatRender = ({ chatItem }: Props) => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.container}>
                <Image source={{ uri: chatItem.foto }} style={styles.image} />
                <View>
                    <Text style={styles.name}>{chatItem.nome}</Text>
                    <Text style={styles.message}>{chatItem.msg}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        width: '100%',
        height: 80,
        borderWidth: 1,  // Reduzindo a borda
        borderColor: '#4702e9',
        alignItems: "center",
       
        padding: 10,  // Espaçamento interno
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        borderWidth: 1,  // Borda menor
        borderColor: '#2dff03',
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    message: {
        fontSize: 14,
        color: "#666",
    }
});
