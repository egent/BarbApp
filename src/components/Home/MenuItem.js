import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text, 
    Image,
    Dimensions,
    Linking,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const margin = width * 0.05;


export default class MenuItem extends Component {
    render() {
        const {
            icon,
            name,
            qty,
            url = false,
            screenName = '',
            navigation,
            borderColor = 'rgba(255, 94, 137, 0.2)',
        } = this.props;
        return (
            <TouchableOpacity
                style={[styles.menuContainer,{borderColor}]}
                onPress={() => { 
                    if (url !== false) {
                        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
                    } else {
                        if (screenName.length > 0) {
                            navigation.navigate(screenName);
                        }
                    }
                 }}
            >
                <Text style={styles.menuText}>{name}</Text>
                <View style={styles.menuIconContainer}>
                    <View>
                        <Image source={icon} style={styles.menuIcon} />
                        {
                            qty > 0 && (
                                <View style={styles.countContainer}>
                                    <Text style={styles.counter}>{qty}</Text>
                                </View>
                            )
                        }
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({

    menuContainer: {
        flexDirection: 'row',
        marginTop: margin,
        marginHorizontal: margin,
        paddingHorizontal: margin ,
        paddingVertical: margin * 0.5,
        borderWidth: 1,
        borderRadius: 4,
        alignItems: 'center',
    },
    menuText: {
        flex: 3,
        color: '#336699',
        fontSize: 15,
    },
    menuIconContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    menuIcon: {
        width: 48,
        height: 48,
        resizeMode: 'contain',
    },
    countContainer: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: '#FF5E89',
        width: 18,
        height: 18,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
        color: '#fff',
        fontSize: 10,
        textAlign: 'center',
    },
});
