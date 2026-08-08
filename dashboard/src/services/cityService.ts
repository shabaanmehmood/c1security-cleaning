import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_CSC_API_KEY;

const headers = {
  "X-CSCAPI-KEY": API_KEY,
};

export interface City {
  id: number;
  name: string;
  country_code: string;
  state_code: string;
  latitude: string;
  longitude: string;
}

interface State {
  iso2: string;
  name: string;
}

export const fetchAustralianCities = async (
  prefix: string = ""
): Promise<string[]> => {
  try {
    // 1. Get all Australian states
    const statesResponse = await axios.get<State[]>(
      "https://api.countrystatecity.in/v1/countries/AU/states",
      { headers }
    );

    // 2. Fetch cities for every state
    const cityResponses = await Promise.all(
      statesResponse.data.map((state) =>
        axios.get<City[]>(
          `https://api.countrystatecity.in/v1/countries/AU/states/${state.iso2}/cities`,
          { headers }
        )
      )
    );

    // 3. Combine all cities
    const cities = cityResponses.flatMap(
      (response) => response.data
    );

    // 4. Get unique city names
    const uniqueCityNames = Array.from(
      new Set(cities.map((city) => city.name))
    );

    // 5. Filter by prefix if provided
    const filteredCityNames = prefix
      ? uniqueCityNames.filter((city) =>
          city.toLowerCase().startsWith(prefix.toLowerCase())
        )
      : uniqueCityNames;

    // 6. Sort alphabetically
    return filteredCityNames.sort((a, b) =>
      a.localeCompare(b, undefined, {
        sensitivity: "base",
      })
    );
  } catch (error) {
    console.error("Error fetching Australian cities:", error);
    return [];
  }
};