import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const value =  AsyncStorage.getItem('@storage_Key');
const api = axios.create({
    baseURL: 'https://api-skins.herokuapp.com/',
    timeout: 1000,
    headers: {"x-access-token": value}
});

export default api;