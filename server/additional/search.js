module.exports = (array, key) => {
    key = key.toLowerCase();
    for(let i = 0; i < array.length; i++){
        if(!array[i].name.toLowerCase().includes(key)){
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}