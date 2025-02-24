//random float min max
export const randomFloat = (min, max) => {
     return Math.random() * (max - min) + min;
};
//split array into chunks
export const chunked = (arr, parts) => {
     let size = Math.ceil(arr.length / parts);
     let result = [];
     for (let i = 0; i < arr.length; i += size) {
          result.push(arr.slice(i, i + size));
     }
     return result;
};