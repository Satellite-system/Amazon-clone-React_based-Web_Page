import React,{useState, useEffect} from 'react'
import './Styles/Location.css'
import axios from 'axios'
import ReactCountryFlag from 'react-country-flag'
import loader from '../Recourses/loader.gif'

const Location = () => {
   var [country,setCountry] = useState(null);

   useEffect(() => {
      axios.get('https://ipapi.co/json/').then((response) => {
         let data = response.data;
         setCountry(data.country_code);
         console.log("Country is: ",country)
     }).catch((error) => {
         console.log(error);
     });
   })

  return (
    <div className='location'>
       {country?
       <ReactCountryFlag countryCode={country} svg
       style={{
         width: '2em',
         height: '2em',
     }}
     /> :
     <img src={loader} alt="" className='location__loader'/>

   }
      {/* } */}
       </div>
  )
}

export default Location