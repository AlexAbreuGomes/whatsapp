import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black'
        }}>
            <Tabs.Screen
                name="(status)"
                options={{
                    title: 'Status',
                    tabBarIcon: ({ color }: { color: string }) => <FontAwesome size={28} name="circle-o" color={color} />,
                }}
            />

            <Tabs.Screen
                name="(calls)"
                options={{
                    title: 'Calls',
                    tabBarIcon: ({ color }: { color: string }) => <FontAwesome size={28} name="phone" color={color} />,
                }}
            />

            <Tabs.Screen
                name="(camera)"
                options={{
                    title: 'Camera',
                    tabBarIcon: ({ color }: { color: string }) => <FontAwesome size={28} name="camera" color={color} />,
                }}
            />

            <Tabs.Screen
                name="index"
                options={{
                    title: 'chats',
                    tabBarIcon: ({ color } : { color: string } ) => <FontAwesome size={28} name="comments" color={color} />,
                }}
            />

            <Tabs.Screen
                name="(settings)"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color } : { color: string } ) => <FontAwesome size={28} name="gear" color={color} />,
                }}
            />

            
        </Tabs>
    );
}
