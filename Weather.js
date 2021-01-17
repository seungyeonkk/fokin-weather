import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native"
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ['#4da0b0', '#d39d38'],
        title: "Haze",
        subtitle: "우박이 내립니다."
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ['#536976', '#292E49'],
        title: "Thunderstorm",
        subtitle: "천둥 번개를 동반한 비가 내립니다."
    },
    Drizzle: {
        iconName: "weather-pouring",
        gradient: ['#acb6e5', '#86fde8'],
        title: "Drizzle",
        subtitle: "안개비가 내립니다."
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ['#00416A', '#E4E5E6'],
        title: "Rain",
        subtitle: "비가 옵니다."
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ['#6190E8', '#A7BFE8'],
        title: "Snow",
        subtitle: "눈이 내립니다."
    },
    Atmosphere: {
        iconName: "weather-cloudy",
        gradient: ['#3a6186', '#89253e'],
        title: "Atmosphere",
        subtitle: "구름이 많고 흐립니다."
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ['#FF5F6D', '#FFC371'],
        title: "Clear",
        subtitle: "맑은 날씨입니다."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ['#3a6186', '#89253e'],
        title: "Clouds",
        subtitle: "구름이 많고 흐립니다."
    }
}

export default function Weather({ temp, condition }) {
    return(
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}</Text>
            </View>
           {/* <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subtitle}</Text>
            </View>*/}
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600"
    },
    textContainer: {
        alignItems: "flex-start"
    }
});
