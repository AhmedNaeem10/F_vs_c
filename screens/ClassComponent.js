import React from 'react';
import {View, StatusBar, ScrollView, Text, TouchableOpacity, Alert, FlatList} from 'react-native';
import User from '../components/User';
import axios from 'axios';
import { useFonts } from 'expo-font';

class Class extends React.Component{
    constructor(props){
        super(props);
        this.state = {data:[], prev: []}
        
    }

    async componentDidMount(){
        const [loaded] = useFonts({
            'DancingScript': require('../assets/fonts/DancingScript.ttf'),
        });

        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.setState({data: response.data})
    }

    componentDidUpdate(){
        if(this.state.prev.length){
            alert("User has been deleted!");
        }
    }

    componentWillUnmount(){
        alert("Class component has been unmounted!");
    }

    renderItem = ({item}) => {
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
                                let index = this.state.data.indexOf(item);
                                alert(index)
                                this.setState({prev: this.state.data});
                                this.state.data.splice(index, 1);
                                this.setState({data: this.state.data});
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

    render(){
        return(
            <View>
                <StatusBar 
                    backgroundColor={"#0C2D48"}
                />
               
                <View style={{padding: 20}}>
                    <Text style={{fontSize: 18, fontFamily: "DancingScript"}}>This is a Class Component</Text>
                </View>

                <FlatList 
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    initialNumToRender={10}
                    style={{marginBottom: 60}}
                />
        </View>
        );
    }

}

export default Class;