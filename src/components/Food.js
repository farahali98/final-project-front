
import { makeStyles } from '@material-ui/core/styles';
import FooterPage from './FooterPage';
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { BsSearch } from "react-icons/bs";
import SimpleMap from '../map/SimpleMap';
import Group from './Group'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Food = () => {
    const classes = useStyles();
    const [food, setFood] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        setFilteredData(
            food.filter((food) =>
                food.name.toLowerCase().includes(search.toLowerCase())
            ));
    }, [search, Food]);

    useEffect(() => {
        Axios.get('http://127.0.0.1:8000/api/food').then((response) => {
            setFood(response.data);
            console.log(response.data)
        })

    }, [])

    useEffect(() => {
        setFilteredData(
            food.filter((food) =>
                food.name.toLowerCase().includes(search.toLowerCase())
            ));
    }, [search, food])
const FoodNumber=food.length;

    return (
        <div>
            {/* <Group/> */}
            <center>
                <div className="Header-nav">
                    <form className="search">
                        <div className="search__wrapper">
                            <input value={search} placeholder="Find Food..." type="text" name="" className="search__field" onChange={(e) => { setSearch(e.target.value) }} />
                            <button style={{backgroundColor:'red'}}><BsSearch/></button>
                        </div>
                    </form>
                </div>
            </center>
            <h2>Food ({FoodNumber})</h2>
            <center>
            <div className="food">
                {(filteredData.length == 0) ? <div>no result</div> :
                    filteredData.map((food) => {
                        return <div key={food.id} style={{ width: '200px' }}>
                            <img src={"http://localhost:8000/storage/" + food.image}/>
                           <div className="description"> <h3>{food.name}</h3>
                            <div>type: {food.type}</div>
                            <div>quantity:{food.quantity}</div>
                            </div>
                        </div>
                    })}
            </div>
            </center>
            <SimpleMap/>
            <FooterPage />
        </div>)
}
export default Food;