import React from 'react';
import style from './Paginado.module.css';

export default function Paginado({countriesPerPage, allCountries, paginado}){

    const pageNumber= []

    for(let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <nav>
            <ul>
                {pageNumber?.map(num => {
                    return(
                      <button className={style.btn} key={num} onClick={()=> paginado(num)}>{num}</button>
                    )
                    
                })}
            </ul>
        </nav>
    )
}