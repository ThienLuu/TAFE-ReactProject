import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

class Footer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{width: 30, height: 30}}
                    source={require('../../assets/Copyright-Symbol-PNG-File.png')}
                />
                <Text style={styles.text}>opyright</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#EEE2DC',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'black',
        borderTopWidth:  2
    },
    text: {
        fontSize: 20,
        // paddingVertical: 5,
        // paddingHorizontal: 8,
    }
});

export default Footer;
