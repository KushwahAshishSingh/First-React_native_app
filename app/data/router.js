import React from 'react';
import  {StackNavigator, TabNavigator,DrawerNavigator} from 'react-navigation';
import  Icon from 'react-native-vector-icons/Ionicons'
import {Button,Platform} from 'react-native'
import Contact from '../screens/Contact'
import Details from '../screens/Details'
import Me from '../screens/Me';
import NewContact from '../screens/NewContact';



const LeftDrawerButton = ({ navigation }) => {
    if(Platform.OS === 'android'){
        return <Button title="Open" onPress={() => navigation.navigate('DrawerOpen')}/>
    }
    return null;
}

export const ContactsStack = StackNavigator({
    Contact:{
        screen: Contact,
        title: 'Contact',
        navigationOptions:(props) => ({
            headerTitle:'Contact',
            headerLeft: <LeftDrawerButton {...props} />,
        }),
    },
    Details: {
        screen: Details,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}`,
        }),
    },
});


export const NewContactStack = StackNavigator({
    NewContact: {
        screen: NewContact,
        navigationOptions: (props) => ({
            headerTitle: 'New Contact',
            headerLeft: <LeftDrawerButton {...props} />,
        }),
    }
});
export const MeStack = StackNavigator({
    Me:{
        screen: Me,
        navigationOptions:(props) => ({
            headerTitle:'New Contact',
            headerLeft: <LeftDrawerButton {...props} />,
        }),
    },
});



export const Tabs = TabNavigator({
    Contact:{
        screen: ContactsStack,
        navigationOptions:{
            tabBarLabel: 'Contacts',
            tabBarIcon: ({tintColor}) => <Icon name="ios-list" size={35} color={tintColor} />
        }
    },
    NewContact:{
        screen: NewContactStack,
        navigationOptions:{
            tabBarLabel: 'New Contact',
            tabBarIcon: ({tintColor}) => <Icon name="ios-add" size={35} color={tintColor} />
        }
    },
    Me:{
      screen: MeStack,
        navigationOptions:{
            tabBarLabel: 'Me',
            tabBarIcon: ({tintColor}) => <Icon name="ios-contact" size={35} color={tintColor} />
        }
    },
})











export const Drawer = DrawerNavigator({
    Contact: {
        screen: ContactsStack,
        navigationOptions:{
            drawerLabel: 'Contacts'
        }
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions:{
            drawerLabel: 'New Contact'
        }
    },
    Me: {
        screen: MeStack,
        navigationOptions:{
            drawerLabel: 'Me'
        }
    }
})



