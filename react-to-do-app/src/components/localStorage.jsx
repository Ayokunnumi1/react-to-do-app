export const SaveToLocalStorage = () => {
    return (
       localStorage.setItem('Task Array', JSON.stringify('Task Array'))
   );
}

export const GetFromLocalStorage = () => {
    const getData = localStorage.getItem('');
    if (getData) {
        return JSON.parse(getData);
    }
    return [];
}