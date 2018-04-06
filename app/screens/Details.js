import React, {Component} from 'react';
import  {View, Text,ScrollView,FlatList} from 'react-native';
import  {Header, Actions,Info} from '../components/userDetails';
import colors from '../data/color';


class Details extends Component{
    render(){
        const contact = this.props.navigation.state.params

        return(
            <View style={{backgroundColor: colors.background }}>
                <Header {...contact}/>
                <ScrollView>
                <Actions {...contact}/>
                <Info {...contact}/>
                </ScrollView>
            </View>
        );
    }
}
export default Details;




