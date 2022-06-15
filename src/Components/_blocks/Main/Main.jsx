import React, {useState, useEffect} from 'react';
import cl from './Main.module.css'
import data from './../../../data.json'



const Main = () => {
    const list_ = data;

    const [list, setList] = useState(list_);
    const [search, setSearch] = useState('')
    const [bol, setBol] = useState(false);


    const onCh = (e) => {
        setSearch(e.target.value)
        e.target.value ? setBol(true) : setBol(false)
    }

    const carFilter = (sear, dat) => {
        return dat.filter(({car_model}) => 
            car_model.toLowerCase().includes(sear.toLowerCase())
        )
    }

    useEffect(()=> {
        const Deob = setTimeout(() => {
            const uk = carFilter(search, list_)
            setList(uk)
        },300)
        return() => clearTimeout(Deob)
    }, [search])



    return (
        <main>
            <div className={cl.param_block}>
                <input onChange={onCh} className={cl.inp} placeholder='write your car'/>
            </div>
            <ul className={cl.listed}>
                {
                    bol ? list.map((car) => <li className={cl.car}>{car.car_model}</li>) : console.log('false')
                }
            </ul>
        </main>
    );
};

export default Main;