import * as React from 'react';
import Head from 'next/head';
import Map, {Source, Layer} from 'react-map-gl'  
import Counties from "../json/counties.json"


import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZmF0bW9vc2UiLCJhIjoiY2t1eWY0ZXRoMmhiMzJ3bzZnczcyMXZ1NyJ9._RrkxwKkDAlgErLRDaVcEA'; // Set your mapbox token here


// async function getGJSON() {
//   const res = await fetch('https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/WA-53-washington-counties.json')
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
//   const json = await res.json()
//   console.log(json)
//   return json
//   }

export default function MapPage() {


  const washington = {
    id: 'state',
    type: 'fill',
    paint: {
      'fill-color': '#4E3FC8',
      'fill-opacity': 0.50
    }
  };

  const bounds = [
    [-126.10320918844974,44.53678474556878], // Southwest coordinates
    [-114.48225400636878,49.98966527759603] // Northeast coordinates
    ];


  return (
    <div>
      <Head>
        <title>react-map-gl example</title>
      </Head>

      <Map
      
        initialViewState={{
          latitude: 47.3,
          longitude: -121,
          zoom: 6.5,
          minZoom: 6,
          maxZoom: 12,
          maxBounds: bounds

        }}
        style={{width: '100%', height: '100vh'}}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
      <Source id="my-data" type="geojson" data={Counties}>
        <Layer {...washington} />
      </Source>

      </Map>
    </div>
  );
}