import React, { Component } from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    View,
} from 'react-native';
import PreLoader from '../../components/PreLoader';
import _ from '../../services/i18n';

const { width, height } = Dimensions.get('window');
const margin = width * 0.05;


export default class ShowImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };
    }

    render() {
        const {image} = this.props.route.params;
        const {loading} = this.state;

        if (loading) {
            return (<PreLoader />);
        }

        return (
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={{ uri: image }} 
                    // onError={e => {console.log(error)}}
                    // onLoadStart={(e) => {
                    //     console.log(e);
                    //     this.setState({loading: true})
                    // }} 
                    // onLoadEnd={() => {
                    //     console.log('end');
                    //     this.setState({loading: false})
                    // }} 
                    // loadingIndicatorSource={v => {console.log(v)}}

                />
            </View>
        );
    }
};


const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    image: {
        flex: 1
    }
});
