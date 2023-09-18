export const SaveToLocalStorage = () => {
    localStorage.setItem('Task Array', JSON.stringify('Task Array'));
}

export const GetFromLocalStorage = () => {
    const getData = localStorage.getItem('Task Array');
    if (getData) {
        return JSON.parse();
    }
    return [];
}