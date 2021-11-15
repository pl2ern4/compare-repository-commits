function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
export const getUniqueColor = array=> {
        let randomColor =  generateRandomColor();
        if(array.indexOf(randomColor)>-1){
            return getRandomColor(array);
        }
    return randomColor;
}