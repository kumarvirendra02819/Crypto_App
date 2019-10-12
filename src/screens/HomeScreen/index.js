import React from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';

import styles from './styles';
import CryptoCurrencyTile from '../../components/CryptoCurrencyTile'

import { fetchApi } from '../../api'
import ApiConstants from '../../api/ApiConstants'
import AppConstants from '../../utils/constants'

import { connect } from 'react-redux';
import { getCryptocurrencies } from '../../actions'

class HomeScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {
            refreshing: true
        };
    }

    componentDidMount() {

        //fetching cryptocurrency data 
        fetchApi(ApiConstants.LATEST_CRYPTOCURRENCY)
            .then((responseJson) => {
                this.setState({ refreshing: false })
                this.props.getCryptocurrencies(responseJson.data)
            }).catch((error) => {
                this.setState({ refreshing: false });
                console.log(error)
            })
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });

        //getting the cryptocurrency data on refresh
        fetchApi(ApiConstants.LATEST_CRYPTOCURRENCY)
            .then((responseJson) => {
                this.setState({ refreshing: false })
                this.props.getCryptocurrencies(responseJson.data)
            }).catch((error) => {
                this.setState({ refreshing: false });
                console.log(error)
            })
    }

    render() {
        const { cryptoCurrencyData } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{AppConstants.CRYPTOCURRENCY_HEADER}</Text>
                </View>
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />} style={styles.scroll}>
                    <View style={styles.body}>
                        {
                            cryptoCurrencyData.map((cryptoData, index) => {
                                return <CryptoCurrencyTile key={index} index={index} cryptoCurrencyData={cryptoData} />
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cryptoCurrencyData: state.cryptocurrencyReducer.cryptocurrencyData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCryptocurrencies: (payload) => {
            dispatch(getCryptocurrencies(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

