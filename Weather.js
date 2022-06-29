import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#e6dada','#274046'],
        title:'На улице идет дождь',
        subtitle:'Возьмите зонтик!',
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#283048','#859398'],
        title:'Сиди дома!',
        subtitle:'Ты видишь что на улице?',
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#283048','#859398'],
        title:'Морось!',
        subtitle:'Возможно скоро дождь усилится!',
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff '],
        title:'На улице снег!',
        subtitle:'Одевайтесь потеплее!',
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88','#3f4c6b'],
        title:'Ни черта не видно в тумане',
        subtitle:'Зато как в Сайлент Хилле',
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2','#2F80ED'],
        title:'На улице смог',
        subtitle:'Не выходи без необходимости',
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#5c258d','#4389a2'],
        title:'На улице снежок',
        subtitle:'Лепите снеговиков',
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891','#94716B'],
        title:'Пыльно!',
        subtitle:'Лучше закрыть окна',
    },
    Fog: {
        iconName: '',
        gradient: ['#b993d6','#8ca6db'],
        title:'Туман - туманище',
        subtitle:'Ничего не видно',
    },
    Sand: {
        iconName: '',
        gradient: ['',''],
        title:'Пески',
        subtitle:'откуда в воздухе песок?',
    },
    Ash: {
        iconName: '',
        gradient: ['#606c88','#3f4c6b'],
        title:'Пепел',
        subtitle:'Везде пепел',
    },
    Squall: {
        iconName: '',
        gradient: ['',''],
        title:'',
        subtitle:'',
    },
    Tornado: {
        iconName: '',
        gradient: ['',''],
        title:'Торнадо',
        subtitle:'Не надо на улицу, бегом в укрытие!',
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#1fa2ff','#a6ffcb'],
        title:'Солнечная погода!!!',
        subtitle:'Иди гулять, хватит сидеть дома!!!',
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757f9a','#d7dde8'],
        title:'Облака',
        subtitle:'Белогривые лошадки',
    },
};

export default function Weather({temperature, condition, pressure, humidity, city}) {
    return(
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
                    <StatusBar barStyle="light-content"/>
                    <View style={styles.halfContainer}>
                        <Text style={styles.textCity}>{city}</Text>
                        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={90} color="white" />
                        <Text style={styles.temp}>{temperature} °C</Text>
                        <Text style={styles.textWeather}>Давление: {pressure} HPA</Text>
                        <Text style={styles.textWeather}>Влажность: {humidity} %</Text>
                    </View>
                    <View style={{...styles.halfContainer, ...styles.textContainer}}>
                        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                    </View>
            </LinearGradient>
    )
}

Weather.propTypes = {
    temperature: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Smoke", "Haze", "Dust", "Fog",
     "Sand", "Ash", "Squall", "Tornado", "Clear", "Clouds"]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    title: {
        color: "white",
        fontSize: 36,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600",
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    },
    textCity: {
        fontSize: 32,
        color: "white",
    },
    textWeather: {
        fontSize: 24,
        color: "white",
        marginBottom: 10,
    },
})