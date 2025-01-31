import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [flights,setFlights] = useState(null);
  const location = {
    lat :'19.242218017578125',
    lng : '72.85846156046128'
  }
  const getData = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports",
        headers: {
          "X-RapidAPI-Key": "248715f2camshb5af85b5cdd9826p1470f4jsn71d89a2e512f",
          "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
        },
        params: {
          lat: "19.242218017578125",
          lng: "72.85846156046128",
        },
      };
      const res = await axios.request(options).then((response) => {
        console.log(response.data.data.current)
        
        setFlights(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

      

      
      
    } catch (err) {
      
      console.error("Error:", err);
    }
  };
 
  
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const locationData = {
    status: true,
    timestamp: 1738307381235,
    data: {
      current: {
        skyId: "BOM",
        entityId: "95673320",
        presentation: {
          title: "Mumbai",
          suggestionTitle: "Mumbai (BOM)",
          subtitle: "India",
        },
        navigation: {
          entityId: "95673320",
          entityType: "AIRPORT",
          localizedName: "Mumbai",
          relevantFlightParams: {
            skyId: "BOM",
            entityId: "95673320",
            flightPlaceType: "AIRPORT",
            localizedName: "Mumbai",
          },
          relevantHotelParams: {
            entityId: "27539520",
            entityType: "CITY",
            localizedName: "Mumbai",
          },
        },
      },
      nearby: [
        {
          presentation: {
            title: "Pune",
            suggestionTitle: "Pune (PNQ)",
            subtitle: "India",
          },
          navigation: {
            entityId: "128668941",
            entityType: "AIRPORT",
            localizedName: "Pune",
            relevantFlightParams: {
              skyId: "PNQ",
              entityId: "128668941",
              flightPlaceType: "AIRPORT",
              localizedName: "Pune",
            },
            relevantHotelParams: {
              entityId: "81977372",
              entityType: "CITY",
              localizedName: "Pune",
            },
          },
        },
        {
          presentation: {
            title: "Indira Gandhi International ",
            suggestionTitle: "Indira Gandhi International (DEL)",
            subtitle: "India",
          },
          navigation: {
            entityId: "95673498",
            entityType: "AIRPORT",
            localizedName: "Indira Gandhi International ",
            relevantFlightParams: {
              skyId: "DEL",
              entityId: "95673498",
              flightPlaceType: "AIRPORT",
              localizedName: "Indira Gandhi International ",
            },
            relevantHotelParams: {
              entityId: "27540706",
              entityType: "CITY",
              localizedName: "New Delhi",
            },
          },
        },
      ],
      recent: [],
    },
  };
  const arr = locationData.data
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className='App'>
     

     
      <div id='box'>
        
      <div id='outer_a'>
        <div id='outer_b'>


        <div id='heading_section'>
       <div id='outer_a'>
        <div id='outer_b'>
          

          <h1>Flights Information</h1>

          </div>
          </div>
       </div>
          <div id='content_section'>

          <div id='a' style={windowSize.width<435 ? {flexDirection:'row'}:{flexDirection:'column'}}>
          <div id='b' style={windowSize.width<435 ? {flexDirection:'column'}:{flexDirection:'row'}}>

            <div id ='button' style={windowSize.width>435 ? {paddingLeft:'2%'}:{}}><button onClick={getData} > <div id='btnm'>Get Data</div></button> <br/><br/></div>
            <div id='item'>{flights ? <div>{JSON.stringify(flights)}</div> : <div id='content'>Click the button to get nearby flights </div>}</div>

            <div id ='button' style={windowSize.width>435 ? {paddingLeft:'2%'}:{}}><button onClick={getData}><div id='btnm'>Get Data</div></button> <br/><br/></div>
            <div id='item'>{flights ? <div>{JSON.stringify(flights)}</div> : <div id='content'>Click the button to get nearby flights </div>}</div>
            
            <div id ='button' style={windowSize.width>435 ? {paddingLeft:'2%'}:{}}><button onClick={getData}><div id='btnm'>Get Data</div></button> <br/><br/></div>
            <div id='item'>{flights ? <div>{JSON.stringify(flights)}</div> : <div id='content'>Click the button to get nearby flights </div>}</div>
      



  {/* <div id='c'>
    kosdhfd;fsajlkfj;lkasj
  </div>

  <div id='c'>
    kosdhfjljfsadfjlk;fjfjfl;
    {JSON.stringify(locationData)}
  </div> */}

         
           
        
     
            
          </div>
          </div>

          </div>
        
        
        
      </div>
      </div>
        
        
      </div>


      {/* <h1>Window Size</h1>
      <p style={windowSize.width>770?{backgroundColor:'black'}:{backgroundColor:'blue'}}>Width: {windowSize.width}</p>
      <p>Height: {windowSize.height}</p> */}
    </div>
   
  );
}

export default App;
