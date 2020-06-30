import React from 'react';
import { 
    View, 
    StyleSheet,
    Image,
    Text,
} from 'react-native';


const HeaderTitleChat = props => {
    const {avatar, title} = props;
    return (
        <View style={styles.container}>
            <Image source={{uri: avatar}} style={styles.avatar} />   
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    avatar: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        borderRadius: 15,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 30,
        paddingLeft: 10,
    },
});

export default HeaderTitleChat;
