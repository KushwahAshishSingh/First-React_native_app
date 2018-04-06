import React, {Component} from 'react';
import  {ScrollView,View,Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import colors from '../data/color';
import { TextInput } from '../components/TextInput';
import {PrimaryButton} from '../components/Buttons';

const fields= [
    { placeholder: 'First Name', stateKey: 'firstName'},
    { placeholder: 'Last Name', stateKey: 'lastName'},
    { placeholder: 'Email', stateKey: 'Email', keyboardType: 'email-address'},
    { placeholder: 'Phone Number', stateKey: 'phoneNumber'},
    { placeholder: 'City', stateKey: 'City'},
    { placeholder: 'Birthday', stateKey: 'Birthday'},
    { placeholder: 'Registered', stateKey: 'Registered'},
    { placeholder: 'UserName', stateKey: 'UserName'},

]

class NewContact extends Component{

    constructor(props){
        super(props);
        this.state={};
    }

    onInputChange = (text, stateKey) =>{
        const mod={};
        mod[stateKey]= text;
        this.setState(mod);

    }
    handleSubmit = (index, override = false) =>{
        if(index === fields.length - 1 || override){
            alert('Submit');
        }
        else{
            const nextField = fields[index + 1];
            this[nextField.stateKey].focus();
        }
    }

    render(){
        return(
            <KeyboardAwareScrollView style={{backgroundColor: colors.background}}>

                {
                    fields.map((field, index) => (
                        <TextInput
                        key={field.stateKey}
                        onChange={(text) => this.onInputChange(text, field.stateKey)}
                        returnKeyType={index === fields.length -1 ? 'done' : 'next'}
                        onSubmitEditing={()=> this.handleSubmit(index)}
                        ref={(input) => this[field.stateKey] = input}
                        {...field}
                        />
                    ))
                }

            {/*<TextInput*/}
                {/*placeholder="First Name"*/}
                {/*onChangeText={(text) => this.onInputChange(text, 'firstName')}*/}
            {/*/>*/}
             {/*<TextInput*/}
                {/*placeholder="Second Name"*/}
                {/*onChangeText={(text) => this.onInputChange(text, 'lastName')}*/}

             {/*/>*/}

             <View>
                 <Text style={{justifyContent: 'center', alignItems:'center', paddingVertical:40}}></Text>
                 <PrimaryButton
                 label="Save"
                 onPress={()=> this.handleSubmit(0, true)}
                 />
             </View>
            </KeyboardAwareScrollView>
        );
    }
}
export default NewContact;