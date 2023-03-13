import counties from '../json/counties.json'
import * as React from 'react';
import Head from 'next/head'
import {useState, useEffect, useMemo, useCallback} from 'react';
import Map, {Source, Layer} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import useSWR from 'swr'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZmF0bW9vc2UiLCJhIjoiY2t1eWY0ZXRoMmhiMzJ3bzZnczcyMXZ1NyJ9._RrkxwKkDAlgErLRDaVcEA'; // Set your mapbox token here





export default function MapPage() {

    // Main issue lies in fetching the correct API data.
    // Hovering brings up county name, we want to use that county name in the API endpoint
    // to display the relevent county data. I do not know how to fetch based on user action
    // All fetching code has been removed

  const [hoverInfo, setHoverInfo] = useState(null);



  const onHover = useCallback(event => {
    const {
      features,
      point: {x, y}
    } = event;
    const hoveredFeature = features && features[0];

    // prettier-ignore
    setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
  }, []);




  const bounds = [
    [-126.10320918844974,44.53678474556878], // Southwest coordinates
    [-114.48225400636878,49.98966527759603] // Northeast coordinates
    ];

    //I don't know what this does and if I change it, everything breaks
    const countyLayer = {
      id: 'data',
      type: 'fill',
      paint: {
        'fill-color': {
          property: 'percentile',
          stops: [
            [0, '#CBC3E3'],
            [1, '#CBC3E3'],
            [2, '#CBC3E3'],
            [3, '#CBC3E3'],
            [4, '#CBC3E3'],
            [5, '#CBC3E3'],
            [6, '#CBC3E3'],
            [7, '#CBC3E3'],
            [8, '#CBC3E3']
          ]
        },
        'fill-opacity': 0.8
      }
    };


    const layers = [
      '0-300',
      '300-600',
      '600-900',
      '900-1200',
      '1200-1500',
      '1500-1800',
      '1800-2100',
      '2100 and more',
    ];
    const colors = [
      '#FFEDA070',
      '#FED97670',
      '#FEB24C70',
      '#FD8D3C70',
      '#FC4E2A70',
      '#E31A1C70',
      '#BD002670',
      '#80002670',
    ];


  return (
    <div>
      <Head>
        <title>Map</title>
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
        interactiveLayerIds={['data']}
        onMouseMove={onHover}
      >
        <Source type="geojson" data={counties}>
        <Layer {...countyLayer} />
        </Source>

          <div className='map-overlay' style={{position: 'absolute', zIndex: 1}}>
            <h2>US population density</h2>
            <p>Hover over a County!</p>
            <div id='text-description'>
            /* From the hover data, get the county name and use it to fetch the couny specific API
            */
            {hoverInfo && (
              <p>County: {hoverInfo.feature.properties.name}</p>

            )}
            </div>

          </div>
          
            <div className="map-legend" style={{ position: 'absolute', bottom: 0, left: 0, padding: '10px', backgroundColor: 'white' }}>
              <b>Population Density (cases/10k)</b>
              <br />
              <br />
              {layers.map((layer, i) => (
                <div key={i}>
                  <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: colors[i], marginRight: '5px' }}></span>
                  {layer}
                </div>
              ))}
            </div>

    

      </Map>
    </div>
  );
}