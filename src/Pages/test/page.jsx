import React, { useRef, useState, useEffect } from "react";

import { geocode } from 'react-geocode';

import { setKey } from 'react-geocode';

export default function Test() {
  const [location, setLocation] = useState('')
    const extractPostalCode = (place) => {
        let postalCode = null;
        if (place.address_components) {
          place.address_components.forEach((component) => {
            if (component.types.includes('postal_code')) {
              postalCode = component.long_name;
            }
          });
        }
        return postalCode;
      };
      
    
  const passwordregx =
  /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
setKey('AIzaSyDE83Koe2R_WZ1oOAt5SDicYKUBcBFLwy0');

const addressInputRef = useRef(null);

useEffect(() => {
  const autocomplete = new window.google.maps.places.Autocomplete(
    addressInputRef.current
  );

  autocomplete.setFields(['address_components', 'geometry']);

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      console.log('No details available for input: ' + place.name);
      return;
    }
  });
}, []);
    // console.log('Restaurant Logo:', restaurantLogo);

    // const response = await geocode('address', location);
    // console.log(response);

    // const lat = response.results[0].geometry.location.lat;
    // const lng = response.results[0].geometry.location.lng;
    // const postalCode = extractPostalCode(response.results[0]);

    // const coordinates = {
    //   latitude: lat,
    //   longitude: lng,
    // };

    
  return (
    <div>
      <div className="form_control">
        <label htmlFor="First name">Enter location</label>
        <input
          id="address"
          ref={addressInputRef}
          defaultValue={location}
          //   required
          type="text"
          className="h-14 border-2 border-blue-500"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </div>
  );
}
