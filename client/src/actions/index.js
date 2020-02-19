// import axios to get data from api
import axios from "axios"

// naming correction
export const GET_DOG_DATA = "GET_DOG_DATA";


export const getDogData = () => dispatch => {

    axios
        .get("https://random.dog/")
        .then(res => {
            console.log(res);
            dispatch({ type: GET_DOG_DATA, payload: res.data.url });
        })
        .catch(err => {
            console.error("error fetching data from api. err: ", err);

        });
}