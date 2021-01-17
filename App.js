import React, {Component} from 'react';
import {Alert} from "react-native";
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "d2dfe6d9bf9b93494e9f2e693539770e";

export default class extends React.Component {
    state = {
        isLoading: true
    };

    getWeather = async (latitude, longitude) => {
        const {
          data: {
            main: { temp },
              weather
          }
        } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        )

        this.setState({isLoading: false, condition: weather[0].main, temp: temp});
    }

    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const {
                coords: {latitude, longitude}
            } = await Location.getCurrentPositionAsync();

            await this.getWeather(latitude, longitude);
            this.setState({isLoading: false});

        } catch (error) {
            console.log(error)
            Alert.alert("Can't find you", "So sad");
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const {isLoading, condition, temp} = this.state;
        return isLoading ? <Loading/> : <Weather temp={Math.floor(temp)} condition={condition}/>
    }
}
