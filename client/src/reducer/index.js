import {
    GET_COUNTRIES, 
    GET_DETAILS, 
    FILTER_BY_ACTIVITIES, 
    FILTER_BY_CONTINENTS, 
    ORDER_BY_NAME, 
    ORDER_BY_POPULATION, 
    GET_COUNTRY_NAME,
    POST_ACTIVITY, 
    ORDER_BY_AREA
} from "../actions";


const initialState = {
    countries : [],
    allCountries: [],
    details: [],
    area: []
}
function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            return{
            ...state,
            countries: action.payload,
            allCountries: action.payload,
            area : action.payload
            }
        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'asc'?
            state.countries.sort(function(a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()){
                    return -1
                }
                return 0
            })
            :action.payload === 'desc'?
            state.countries.sort(function(a,b){
                if(a.name > b.name){
                    return -1
                }
                if(a.name > b.name){
                    return 1
                }
                return 0
            }): state.countries
            return {
                ...state,
                countries: sortedArr
            }

        case ORDER_BY_POPULATION:
            let sortedArr2 = action.payload === 'more'?
            state.countries.sort(function(a,b){
                if(a.population > b.population){
                    return -1
                }
                if(a.population > b.population){
                    return  1
                }
                return 0
            }): action.payload === 'less'?
            state.countries.sort(function(a,b){
                if(a.population > b.population){
                    return 1
                }
                if(b.population > a.population){
                    return -1
                }
                return 0
            }): state.countries
            return {
                ...state,
                countries: sortedArr2
            }

            case  ORDER_BY_AREA:
                let sort = state.area.sort((a,b) => a.area - b.area)
                return{
                    ...state,
                    area: sort
                }
    
    

        case FILTER_BY_ACTIVITIES:
            const result = action.payload 
            const typesFiltered = state.allCountries.filter(el => el.activities.some(e => e.name === result))
    
            return{
                ...state,
                countries: typesFiltered
            }

        case FILTER_BY_CONTINENTS:
            const result1 = action.payload
            const continentsFiltered = state.allCountries.filter(el => el.continent === result1)
            return{
               ...state,
               countries: continentsFiltered
            }
        case GET_COUNTRY_NAME:
            if(!action.payload[0]){
             alert("country wasn't found")
            }else{
            return{
                ...state,
                countries: action.payload
            }
            }
         
        case POST_ACTIVITY:
            return{
                ...state
            }

        case GET_DETAILS:
            return{
                ...state,
                details: action.payload
            }
        

        default:
            return state;
    }
}
        
        
        
        
export default rootReducer;
