import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
export const FILTER_BY_ACTIVITIES = 'FILTER_BY_ACTIVITIES';
export const FILTER_BY_CONTINENTS = 'FILTER_BY_CONTINENTS';
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_DETAILS = 'GET_DETAILS';
export const  ORDER_BY_AREA = ' ORDER_BY_AREA';


export function getCountries(){

    return async function(dispatch){
        try{
        var json = await axios.get("http://localhost:3001/countries");
        return dispatch({
            type: GET_COUNTRIES,
            payload: json.data
        })
    }catch(error){
        console.log(error);
    }
    }
}

export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByPopulation(payload){
    return{
        type: ORDER_BY_POPULATION,
        payload
    }
}

export function filterArea(payload){
    return {
        type: ORDER_BY_AREA,
        payload
    }
}



export function filterByActivities(payload){
    return{
        type: FILTER_BY_ACTIVITIES,
        payload
    }
}

export function filterByContinents(payload){
    return{
        type: FILTER_BY_CONTINENTS,
        payload
    }
}

export function getCountryName(name){
    return async function (dispatch){
        try{
            var json = await axios.get('http://localhost:3001/countries?name=' + name);
        return dispatch({
            type: GET_COUNTRY_NAME,
            payload: json.data
        })
        }catch(error){
            console.log(error)
        }
    } 
}

export function postActivity(input){
    return async function (dispatch){
        const json = await axios.post('http://localhost:3001/activity', input)
        return dispatch({
            type: POST_ACTIVITY,
            payload: json
        })
    }
}


export function getDetails(id) {
    return (dispatch) => {
        axios.get('http://localhost:3001/countries/' + id)
            .then(json => {
                dispatch({
                    type: GET_DETAILS,
                    payload: json.data
                })
            })
    }
}

