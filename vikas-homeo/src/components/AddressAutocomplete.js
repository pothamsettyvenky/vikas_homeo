import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

export default function AddressAutocomplete({ onSelect }) {

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async ({ value }) => {

    if (value.length < 3) return;

    const res = await fetch(
      `https://photon.komoot.io/api/?q=${value}&limit=5`
    );

    const data = await res.json();

    const formatted = data.features.map(item => ({
      address: item.properties.name + ", " +
               item.properties.city + ", " +
               item.properties.state,
      lat: item.geometry.coordinates[1],
      lng: item.geometry.coordinates[0]
    }));

    setSuggestions(formatted);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = suggestion => suggestion.address;

  const renderSuggestion = suggestion => (
    <div>{suggestion.address}</div>
  );

  const onSuggestionSelected = (e, { suggestion }) => {

    setValue(suggestion.address);

    onSelect({
      address: suggestion.address,
      lat: suggestion.lat,
      lng: suggestion.lng
    });

  };

  const inputProps = {
    placeholder: "Enter your address",
    value,
    onChange: (_, { newValue }) => setValue(newValue)
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={fetchSuggestions}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      onSuggestionSelected={onSuggestionSelected}
      inputProps={inputProps}
    />
  );

}