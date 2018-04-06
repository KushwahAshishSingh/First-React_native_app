import  React from 'react';
import {View, Text,TouchableHighlight,Platform,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, {CHEVRON_SIZE} from './styles';
import Icons from "../Icons";
import colors from '../../data/color';


const ListItem = ({contact, onPress}) =>{
    const name = `${contact.name}`
    const scores = `${contact.scores.score} ${contact.scores.type}`
    const id = `${contact._id}`
   //  const scoress = `${contact.scores.score1}`



    return(
        <TouchableHighlight
            onPress={onPress}
            underlayColor={colors.rowUnderlay}
        >

            <View style={styles.row}>
                <Image
                    source={{uri: contact.picture }}
                    style={styles.avtar}

                    />
                <View>
                    <Text>{name}</Text>
                        <Text>{id}</Text>
                    <Text>{scores}</Text>

                </View>
                 <View style={styles.ChevronContainer}>
                     <Icon
                     name="ios-arrow-forward"
                     size={CHEVRON_SIZE}
                     style={styles.chevron}
                     />
                 </View>

            </View>

        </TouchableHighlight>
    )
};

export default ListItem;