import AsyncStorage from '@react-native-async-storage/async-storage';

export const getValue = async (key: string) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        console.error(e);
    }

}

export const getObjectValue = async (key: string) => {
  try {
    const value = await getValue(key);
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  } catch (e) {
    console.error(e);
  }
};

export const setValue = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.error(e);
    }
}

export const setObjectValue = async (key: string, value: Object) => {
    try {
        const jsonValue = JSON.stringify(value);
        await setValue(key, jsonValue);
    } catch (e) {
        console.error(e);
    }
}