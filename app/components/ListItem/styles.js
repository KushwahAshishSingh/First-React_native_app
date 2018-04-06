import {StyleSheet} from 'react-native';
export  const CHEVRON_SIZE = 25;

export  default StyleSheet.create({
    avtar: {
        width: 45,
        height: 45,
        borderRadius: 25,
        marginRight: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    ChevronContainer: {
    flex: 1,
    },
    chevron: {
    alignSelf: 'flex-end'
    }
    }

)