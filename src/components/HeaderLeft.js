import React from 'react';
import { 
    TouchableOpacity, 
    Dimensions,
    Image,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const paddingHorizontal = width * 0.05;

const iconLeft = require('../assets/images/icon_back.png');


const HeaderLeft = props => {

    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: paddingHorizontal,
            }}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 40,}}
            onPress={() => { 
                props.navigation.goBack() 
            }}
        >
         <Image source={iconLeft} style={{width: 48, height: 48, resizeMode: 'contain'}} />   
        </TouchableOpacity>
    );
};

export default HeaderLeft;
