import { getStorageData, saveDataToStorage } from "./utills";

export const getJewelry = () => {
    return getStorageData('jewelry') || fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json()).then(data => {
            saveDataToStorage('jewelry', data);
            return data;
        });
};

export const getElectronics = () => {
    return getStorageData('electronics') || fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json()).then(data => {
            saveDataToStorage('electronics',data);
            return data;
        })
};