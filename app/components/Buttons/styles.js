import {StyleSheet} from 'react-native';
import colors from '../../data/color';
export default StyleSheet.create({
    primaryButtonContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    primaryButton:{
        borderColor: colors.border,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: colors.link
    },
    primaryButtonText:{
        paddingVertical: 8,
        paddingHorizontal: 20,
        color: '#fff',
        fontSize: 14,
        fontWeight:'500'
    },

    });