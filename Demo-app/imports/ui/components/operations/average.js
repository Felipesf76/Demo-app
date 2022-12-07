const average = (array) => {
   let add = 0;
   for (const element of array) {
      add += parseFloat(element);
   }
   const result = add / array.length;
   return result;
};

export default average;
