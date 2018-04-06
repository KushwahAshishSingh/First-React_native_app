import  React from 'react';
import {View, ScrollView} from 'react-native';
import moment from 'moment';
import styles from './styles';
import Rows from './Rows';

const Info = ({DOB, city}) =>{
    return (
        <View style={styles.InfoContainer}>
            <Rows
            label="city"
            body={city}
            />
            <Rows
            label="DOB"
            body={moment(DOB).format('MMMM Do, YYYY')}
           // body={DOB}
            />
        </View>

    );
}
export  default Info;