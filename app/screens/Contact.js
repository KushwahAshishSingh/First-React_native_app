import React, {Component} from 'react';
import  {Button,View, Text,FlatList} from 'react-native';
import {StudentData} from '../data/StudentData';
import {Icons} from '../components/Icons'
import Details from './Details'
import {ListItem} from '../components/ListItem';


class Contact extends Component{

    handleRowPress = (item) =>{
        this.props.navigation.navigate('Details', item);
    };
    render(){
const {navigate} = this.props.navigation;

        return(
            <View style={{flex:1 }}>

                <FlatList
                style={{flex:1}}
                data={StudentData}
                renderItem={({item})=>
                    <ListItem contact={item} onPress= {() => this.handleRowPress(item)} />
                }
                keyExtractor = {(item) => item._id}
                />

                </View>
        );
    }
}
export default Contact;
