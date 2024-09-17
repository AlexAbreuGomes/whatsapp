import { View, Text, FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { chatItemData } from "../../data/chatData";
import { ChatItemTypes } from "../../types/chatTypes";
import { ChatRender } from "../../components/chat"; 

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />

        

            {/* FlatList sem ScrollView para evitar comportamento inesperado */}
            <FlatList
                data={chatItemData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }: { item: ChatItemTypes }) => (
                    <ChatRender chatItem={item} />
                )}
                // Remove qualquer padding extra
                contentContainerStyle={{ padding: 0, margin: 0 }}
                // Para garantir que não haverá espaçamento entre os itens
                ItemSeparatorComponent={() => <View style={{ height: 0 }} />} 
            />
        </SafeAreaView>
    );
}
