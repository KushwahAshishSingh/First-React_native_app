import React, {Component} from 'react';
import  {View, Text, ScrollView} from 'react-native';
import {Header, Actions, Info} from '../components/userDetails';
import colors from '../data/color';
import {me} from '../data/StudentData';

import {PrimaryButton } from '../components/Buttons';


class Me extends Component{
    render(){
        return(
            <ScrollView style={{backgroundColor: colors.background}}>
            <Header {...me} />
                <PrimaryButton label="Edit Profile"
                                onPress={() => null}/>
                <Actions {...me}/>
                <Info {...me}/>

            </ScrollView>
        );
    }
}
export default Me;