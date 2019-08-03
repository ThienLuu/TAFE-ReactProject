import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity, Alert
} from 'react-native';

class Header extends Component {
    render() {
        return (
            <View>
                <View style={styles.container_heading}>
                    <Text style={styles.title}>Grande Gift</Text>
                </View>
                <View style={styles.container_search}>
                    <TextInput
                        placeholder="Search hampers..."
                        style={styles.input}

                        onBlur={showInputAlert}
                        // value={this.props.input}
                        // onChangeText={this.props.onSearchChange}
                        // underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity
                        style={styles.button_search}
                        onPress = {showButtonAlert}
                        //onPress={this.props.onSearch}
                    >
                        <Text style={styles.button_text_search}>GO</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                  <TouchableOpacity
                  style={styles.button}
                  onPress={this.props.onSearch}
                  >
                    <Text
                        style={{color: '#AC3B61', fontSize: 20}}
                        // style={styles.button_text}
                        // style={this.props.getOrientation(styles.button, styles.button_text)}
                    >Show all Hampers</Text>
                  </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const showButtonAlert = () => {
    Alert.alert(
        'This feature is currently disabled.'
    )
}

const showInputAlert = () => {
    Alert.alert(
        'This feature is currently disabled'
    )
}

const styles = StyleSheet.create({
    container_heading: {
        flexDirection: 'row',
        backgroundColor: '#EEE2DC',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
    },
    title: {
      fontSize: 60,
        color: '#AC3B61'
    },
    container_search: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#EEE2DC',
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 5,
        fontSize: 18
    },
    button_search: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 5,
        marginLeft: 10
    },
    button_text_search: {
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: '#EDC7B7',
        borderRadius: 5,
        alignItems: 'center',
        padding: 5,
        width: 200,
        borderWidth: 1
    },
    button_text: {
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 8,
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#EEE2DC',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        borderBottomColor: 'black',
        borderBottomWidth:  2
      }
});

export default Header;
