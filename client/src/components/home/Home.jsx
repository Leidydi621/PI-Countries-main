import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    getCountries,
    orderByName, 
    orderByPopulation, 
    filterByActivities, 
    filterByContinents,
    filterArea
} from '../../actions/index';
import Card from '../card/Card';
import Paginado from '../paginado/Paginado';
import SearchBar from '../searchBar/SearchBar';
import style from './Home.module.css';




export default function Home() {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries)
    const allCountries2 = useSelector((state) => state.allCountries)
    const continentCountries = allCountries2.map(el => el.continent)
    const continentOrder = continentCountries.filter((item,index) => {
        return continentCountries.indexOf(item) === index;
    })

    const continentSort = continentOrder.sort(function(a,b){
     if(a > b){
         return 1
     }
     if(b > a){
         return -1
     }
     return 0
    })

    const [,setOrden] = useState('')
    const [,setOrden2] = useState('')
    const [,setOrden3] = useState('')
    const [currentPage, setCurrentPage] = useState(1) // PÁGINA INICIAL
    const [countriesPerPage] = useState(12)

    const indexOfLastCountry = currentPage * countriesPerPage //12
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage //0
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry) 

    const paginado =  (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getCountries())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
    }

    function handleSort(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }
    
    function handleSort2(e){
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value))
        setCurrentPage(1);
        setOrden2(`Ordenado ${e.target.value}`)
            }   

    function handleSort3(e){
        e.preventDefault();
        dispatch(filterArea(e.target.value))
        setCurrentPage(1)
        setOrden3(`Ordenado ${e.target.value}`)
    } 
        
    function handleFilterTypes(e){
        dispatch(filterByActivities(e.target.value))
    }
        
    function handleFilterContinent(e){
        dispatch(filterByContinents(e.target.value))
        setCurrentPage(1);    
    }
        
        
    
  return (
    <div className={style.page}>
        <header className={style.header}>
            <div className={style.container_header}>
                <Link to= '/activity'>
                    <button className={style.btn}>
                    ⁙  New Activity
                    </button>
                </Link>
                <h1 >Countries  </h1>
                <button className={style.btn} onClick={e => {handleClick(e)}}> 
                    Charge all!
                </button>
            </div>
            {/* <div onChange = {e => {handleSort3(e)}}>
                <button> Area</button>
            </div> */}
        </header>
        <div container_nav>
            <div className={style.nav}>
                <SearchBar/>
                <div className={style.select}>
                    <select className={style.filter} onChange = {e => {handleFilterTypes(e)}}>
                        <option value='all'>Activity Type</option> {/* orden por actividad */}
                        {
                        allCountries2.map(el => el.activities.map(e => (

                        <option value={e.name} key={e.id}>{e.name}</option>
                        )))
                        }

                    </select>
                    <select className={style.order} onClick={e => {handleSort2(e)}}>
                        <option>Order By Population</option>
                        <option value='more'>More</option> {/* orden población */}
                        <option value='less'>Less</option>
                    </select>
                    <select className={style.order} onClick={e => {handleSort(e)}}>
                        <option>Order By Name</option>
                        <option value='asc'>A-Z</option>  {/* orden alfabético */}
                        <option value='desc'>Z-A</option>
                    </select>
                    <select className={style.filter} onChange = {e => {handleFilterContinent(e)}}>
                        <option>Continents</option>               {/* orden por continente */}
                        {
                             continentSort.map(el => 
                             <option value={el} key={el}>{el}</option>
                            )
                        }
                    </select>

                </div>
            
            </div>
                <div className={style.paginado}>
                    <div className={style.containerP}>
                    <Paginado
                        countriesPerPage = {countriesPerPage}
                        allCountries = {allCountries.length}
                        paginado = {paginado}
                    />
                    </div>
                </div>   
            <div className={style.content}>
                <div className={style.grid}>
                {currentCountries.map(c => {
                    return(
                   <Link  to={"/details/" + c.id}  key={c.id}>
                    <Card name={c.name} img={c.img} continent={c.continent} key={c.id}/>
                    </Link>
                 )
                })
                }
                </div>
            </div>
        </div>
    </div>
  );
}