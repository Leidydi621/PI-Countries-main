import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryName} from "../../actions/index"
import style from "./SearchBar.module.css";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handInputChange(e){
      e.preventDefault()
      setName(e.target.value)
    }

    function handleSubmit(e){
       e.preventDefault()
       dispatch(getCountryName(name))
    }

    return(
        <div className={style.search}>
            <input className={style.searchInput}
                type = 'text'
                placeholder="Where are your next holidays? . . ."
                onChange= {e => handInputChange(e)}
            />
        
            <button className={style.btn} type="submit" onClick = {e => handleSubmit(e)}>Search</button>
        </div>
    )
}
