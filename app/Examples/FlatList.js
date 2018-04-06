import React, {Component} from 'react';
import  {View, Text,FlatList} from 'react-native';
import {StudentData} from '../data/StudentData';

class FlatList extends Component{
    static navigationOptions = {
        title: "Contact",
        header: false
    };
    render(){
        return(
            <View style={{flex:1, padding: 30}}>
                   <FlatList
                    style={{flex:1,padding:30}}
                    data={StudentData}
                    renderItem={({item})=><View> <Text> {item.name}</Text></View>}
                    keyExtractor = {(item) => item.name}
                />
            </View>
        );
    }
}
export default Contact;