import {StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
const margin = width * 0.05;


export default StyleSheet.create({
    avatarContainer: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        marginTop: margin,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        resizeMode: 'contain',
    },
    name: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 20,
    },
    spec: {
        marginTop: 5,
        fontSize: 14,
        lineHeight: 17,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    infoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: margin,
        marginHorizontal: margin,
        borderTopColor: 'rgba(0, 0, 0, 0.05)',
        borderTopWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.05)',
        borderBottomWidth: 1,
        padding: 13,
    },
    tarif: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '600',
        color: '#FF5E89',
    },
    tarifDate: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 12,
        lineHeight: 14,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
