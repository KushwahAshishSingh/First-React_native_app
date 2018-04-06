this.process.navigation.navigate('DemoScreen', {name:"ashish", email:"singh@gmail.com"});

class NavigationAndState extends Component{
    updateName = () => {
        this.props.navigation.setParams({name: 'ankit'})
    };

    saveProfile = () =>{
        this.props.navigation.goBack();
    }

    rennder(){
        const {name, email} = this.props.navigation.state.params;
    }
}