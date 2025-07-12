import { useState, useEffect } from "react";

export default function useGuests() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

  useEffect(() => {
    async function fetchGuests() {
      const response = await fetch(
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-omarr/guests"
      );
      const json = await response.json();
      setGuests(json.data);
    }

    fetchGuests();
  }, []);

  return { guests, selectedGuest, setSelectedGuest };
}
