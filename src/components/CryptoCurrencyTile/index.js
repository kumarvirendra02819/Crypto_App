import React from 'react';
import { Text, View, Image } from 'react-native';

import cryptocurrency from '../../../assets/cryptocurrency.png'
import styles from './styles';

class CryptoCurrencyTile extends React.Component {

    render() {
        const { cryptoCurrencyData, index } = this.props
        return (
            <View style={styles.container}>
                <View style={[styles.leftView, { backgroundColor: index % 2 === 0 ? '#FFEB3B' : '#00BCD4' }]}>
                </View>
                <View style={styles.rightView}>
                    <View style={styles.starshipHeader}>
                        <Image style={styles.starshipIconView} source={cryptocurrency} />
                        <Text style={styles.starshipText}>{cryptoCurrencyData.name}</Text>
                    </View>
                    <View style={styles.starshipInfoView}>
                        <Text style={styles.starshipDataText}>Rank: {cryptoCurrencyData.cmc_rank}</Text>
                        <Text style={styles.starshipInfoText}>Value( US$ ): {cryptoCurrencyData.quote.USD.price}</Text>
                    </View>
                    <View style={styles.starshipInfoView}>
                        <Text style={styles.starshipInfoText}>Symbol: {cryptoCurrencyData.symbol}</Text>
                        <Text style={styles.starshipDataText}>Total Supply: {cryptoCurrencyData.total_supply}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default CryptoCurrencyTile;

