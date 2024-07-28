const  getRoomId = () => {
   const characters = "abcdefghijklmnopqrstuvwxyz";
   const segmentLength = 3;
   const segments = 3;
   let result = "";

   for (let i = 0; i < segments; i++) {
      let segment = "";
      for (let j = 0; j < segmentLength; j++) {
         const randomIndex = Math.floor(Math.random() * characters.length);
         segment += characters[randomIndex];
      }
      result += segment;
      if (i < segments - 1) {
         result += "-";
      }
   }

   return result;
}

export default getRoomId;
