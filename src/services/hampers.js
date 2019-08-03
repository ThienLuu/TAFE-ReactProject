//import axios from 'axios';
//const data = require('./data.json');
const hamperData = require('./hamperData.json')

export const searchHampers = function (search_value, callback){
    //callback(data);
    callback(hamperData)

    // axios.get('' + search_value + '')
    //     .then(response => {
    //         callback(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
};
