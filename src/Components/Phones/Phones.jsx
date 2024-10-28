import axios from 'axios';
import { useEffect, useState } from 'react';
import { BarChart, Bar,XAxis,YAxis, Tooltip } from 'recharts';


const Phones = () => {
const [phones,setPhones] = useState([])

useEffect( () => {
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then( data => {
        let phonesData = data.data.data ;
let phonesWithFakeData = phonesData.map( phone => {
    const obj = {
        name: phone.phone_name ,
        price: phone.slug.split('-')[1] 
    }
    return obj ;
} )
console.log(phonesWithFakeData) ;
setPhones(phonesWithFakeData)
    } )
} , [] )

    return (
        <div>
            <BarChart width={1500} height={500} data={phones}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="price"></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="price" fill="pink"></Bar>
            </BarChart>
        </div>
    );
};

export default Phones;