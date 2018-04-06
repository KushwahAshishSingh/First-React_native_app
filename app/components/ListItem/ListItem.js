import  React from 'react';
import {View, Text,TouchableHighlight,Platform,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, {CHEVRON_SIZE} from './styles';
import Icons from "../Icons";
import colors from '../../data/color';


const ListItem = ({contact, onPress}) =>{

    const name = `${contact.name}`
    const scores = `${contact.scores[0].score}`+ "  " +`${contact.scores[0].type}`
    const scores1 = `${contact.scores[1].score}`+ "  " +`${contact.scores[1].type}`
    const scores2 = `${contact.scores[2].score}`+ "  " +`${contact.scores[2].type}`
    const id = `${contact._id}`



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
                    <Text>ID :  {id}</Text>
                    <Text>NAME :  {name}</Text>
                  <View style={{flex: 1, flexDirection:'column-reverse'}}> <Text>{scores}</Text><Text> {scores1} </Text> <Text>{scores2}</Text>
                  </View>
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