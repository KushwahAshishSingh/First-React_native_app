import React,{Component} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const Header = ({ picture, name}) =>{
    return(
        <View style={styles.headerContainer}>
            <Image
            source={{uri: picture}}
            style={styles.image}
            />
            <Text style={styles.name}>
                {name}
            </Text>
        </View>
    )
};
export  default Header;