import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import axios from 'axios';
import User from '../components/User';
import { FlatList } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

export default function Funtional(){
    const [users, setUsers] = useState([]);
    const [prev, setPrev] = useState([]);

    const [loaded] = useFonts({
        'DancingScript': require('../assets/fonts/DancingScript.ttf'),
    });

    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        }
        fetchData();
        return()=>{
            alert("Functional Component has been unmounted!");
        }
    }, []);

    useEffect(()=>{
        if(prev.length){
            alert("User has been deleted!");
        }
    }, [users]);

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity 
                onLongPress={()=>{
                    Alert.alert(
                        "Delete User",
                        "This user will be deleted permanently!",
                        [
                            {
                            text: "OK",
                            onPress: () => {
                                let hold = users.slice();
                                let index = users.indexOf(item);
                                setPrev(hold);
                                hold.splice(index, 1)
                                setUsers(hold)
                            },
                            style: "cancel"
                            },
                            { text: "CANCEL" }
                        ]
                        );
                }}
            >
                <User user={item} key={item.id} />
            </TouchableOpacity>
        );
    }

    return(
        <View>
            <StatusBar 
                backgroundColor={"#0C2D48"}
            />
            
            <View style={{padding: 20}}>
                <Text style={{fontSize: 18, fontFamily: "DancingScript"}}>This is a Functional Component</Text>
            </View>

            <FlatList 
                data={users}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                initialNumToRender={10}
                style={{marginBottom: 60}}
            />
            
        </View>
    );
}