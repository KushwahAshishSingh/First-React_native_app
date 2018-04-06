import {StyleSheet, Dimensions} from 'react-native';
import  colors from '../../data/color';
const window = Dimensions.get('window');
export const ICON_SIZE = 25;
export  default  StyleSheet.create({
    image: {
        width: window.width / 2,
        height: window.width / 2,
        borderRadius: window.width / 4,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical: 20,
    },
    name:{
        fontSize: 22,
        marginTop: 10,
        color: colors.primaryText,
    },
    actionContainer:{
      borderTopWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderTopColor: colors.border,
      borderBottomColor: colors.border,
        paddingVertical: 10,
        backgroundColor: colors.background,
    },
    actionRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:10,
        padding: 5,
    },
    actionInfo:{
        flexDirection:'column',
    },
    actionLabel:{
        fontSize: 16,
        //color: colors.subtleText,
        marginBottom: 2,
        color: 'red'
    },
    actionBody:{
        fontSize: 16,
        color: colors.primaryText,
        marginBottom: 2,
    },
    actionIcons: {
        flexDirection: 'row'
    },
    actionIcon: {
        marginLeft: 13,
    },
    InfoContainer:{
        paddingVertical: 2,

    },

});
