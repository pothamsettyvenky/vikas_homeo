import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";

export default function AddressAutocomplete({ value = "", onSelect }) {

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  /* Sync parent value with internal state */
  useEffect(() => {

    setInputValue(value || "");

    if (!value) {
      setSuggestions([]);
    }

  }, [value]);

  const fetchSuggestions = async ({ value }) => {

    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    const res = await fetch(
      `https://photon.komoot.io/api/?q=${value}&limit=5`
    );

    const data = await res.json();

    const formatted = data.features.map(item => ({
      address:
        (item.properties.name || "") +
        ", " +
        (item.properties.city || "") +
        ", " +
        (item.properties.state || ""),
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

    setInputValue(suggestion.address);

    onSelect({
      address: suggestion.address,
      lat: suggestion.lat,
      lng: suggestion.lng
    });

  };

  const inputProps = {
    placeholder: "Enter your address",
    value: inputValue,
    onChange: (_, { newValue }) => setInputValue(newValue)
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