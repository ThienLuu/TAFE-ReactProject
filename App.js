import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text
} from 'react-native';
import * as HamperService from './src/services/hampers';
import Header from "./src/components/header";
import Body from "./src/components/body";
import Footer from "./src/components/footer"

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            search_value: '',
            orientation: this.getOrientation(),
            results: []
        };
    }

    renderOrientation(p){
        switch(this.state.orientation){
            case 'portrait' :
                return(p);
                break;
            case 'landscape' :
                return(<View style={styles.portraitView}>
                            <Text style={styles.portraitText}>PLEASE USE IN PORTRAIT MODE</Text>
                        </View>
                        );
                break;
            default :
                return null;
        }
    }

    getOrientation(){
        const {width, height} = Dimensions.get('window');
        if (height > width){
            return 'portrait';
        }
        else{
            return 'landscape';
        }
    }

    onLayout(){
        this.setState({orientation: this.getOrientation()})
    }

    onSearchChange(value){
        this.setState({
            search_term: value
        })
    }

    onSearch(){
        HamperService.searchHampers(this.state.search_value,
            response => {
                this.setState({ results: response.Search});
            });
        console.log(this.state.results)
    }

    render() {
        return (
        <View style={styles.container} onLayout={this.onLayout.bind(this)}>
            <Header
                input={this.state.search_value}
                onSearchChange={this.onSearchChange.bind(this)}
                onSearch={this.onSearch.bind(this)}
            />
            {this.renderOrientation(
                <Body
                    results={this.state.results}
                />
            )}
            <Footer/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    portraitView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    portraitText: {
        fontSize: 50,
        textAlign: 'center'
    },
});
