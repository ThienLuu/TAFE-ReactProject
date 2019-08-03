import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

class Body extends Component {

    renderHampers(hampers) {
        return hampers.map(hamper => {
            return (
              <View key={hamper.hamperId} style={styles.item}>
                <Text  style={styles.text}>
                    Name: {hamper.name}
                </Text>
                <Text>
                  Price: ${hamper.price}
                </Text>
              </View>

            )
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.renderHampers(this.props.results)}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    text: {
        fontSize: 18
    },
    item: {
      borderWidth: 1
    }
});

export default Body;
