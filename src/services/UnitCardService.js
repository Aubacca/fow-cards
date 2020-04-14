// class UnitCardServcie {
//   static async getUnitCards() {
//     setTimeout(() => {
//       return [];
//     }, 5000);
//   }
// }

import axios from "axios";

async function getUnitCards() {
  axios
    .get("http://localhost:8000/cards")
    .then(response => {
      console.log("getUnitCards>response:", response);
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return [];
    })
    .finally(() => console.log("getUnitCards>finally!!!"));
}

export { getUnitCards };
