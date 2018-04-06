import React from 'react';
import {View, Platform, TouchableOpacity,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles, {ICON_SIZE} from './styles';
import colors from '../../data/color';
import Rows from './Rows';
const Actions = ({email, MobileNumber}) => {
    return (
        <View style={styles.actionContainer}>

            <Rows
            label="email"
            body={email}
            actions={[
                {
                    onPress: () => null,
                    iosIcon: 'ios-mail',
                    androidIcon: 'md-mail',

                },
            ]}
            />



            <View style={styles.actionRow}>
                <View style={styles.actionInfo}>
                    <Text style={styles.actionLabel}>email</Text>
                    <Text style={styles.actionBody}>{email}</Text>
                </View>

                <View style={styles.actionIcons}>
                    <TouchableOpacity
                        onPress={()=> null}>
                        <Icon
                        color={colors.link}
                        size={ICON_SIZE}
                        style={styles.actionIcon}
                        name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
                        />
                    </TouchableOpacity>
                </View>
            </View>








            {/*<Rows*/}
                {/*label="MobileNumber"*/}
                {/*body={MobileNumber}*/}
                {/*actions={[*/}
                    {/*{*/}
                        {/*onPress: () => null,*/}
                        {/*iosIcon: 'ios-call',*/}
                        {/*androidIcon: 'md-call',*/}
                    {/*},*/}

                    {/*{*/}
                        {/*onPress: () => null,*/}
                        {/*iosIcon: 'ios-text',*/}
                        {/*androidIcon: 'md-text',*/}
                    {/*},*/}
                {/*]}*/}
            {/*/>*/}

            <View style={styles.actionRow}>
                <View style={styles.actionInfo}>
                    <Text style={styles.actionLabel}>MobileNumber</Text>
                    <Text style={styles.actionBody}>{MobileNumber}</Text>
                </View>

                <View style={styles.actionIcons}>
                    <TouchableOpacity
                        onPress={()=> null}>
                        <Icon
                            color={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={()=> null}>
                        <Icon
                            color={colors.link}
                            size={ICON_SIZE}
                            style={styles.actionIcon}
                            name={Platform.OS === 'ios' ? 'ios-text' : 'md-text'}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

export default Actions;