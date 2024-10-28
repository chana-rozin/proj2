export const getStorageData = (category) => {
    const data = JSON.parse(localStorage.getItem(category));
    return (data && (Date.now() - data.time) < 60000) ? data.data : null;
}

export const saveDataToStorage = (category, data) => {
    localStorage.setItem(category, JSON.stringify({ data, time: Date.now() }));
}