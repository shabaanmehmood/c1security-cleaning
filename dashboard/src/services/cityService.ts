import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_CSC_API_KEY;
const headers = { "X-CSCAPI-KEY": API_KEY };

export interface City {
  id: number;
  name: string;
  country_code: string;
  state_code: string;
  latitude: string;
  longitude: string;
}

export const fetchAustralianCities = async (prefix: string): Promise<string[]> => {
  try {
    const response = await axios.get<City[]>(
  `https://api.countrystatecity.in/v1/countries/AU/cities`,
  { headers }
);
    const cityNames = response.data.map((city) => city.name);
    const uniqueCityNames = Array.from(new Set(cityNames));

    const sortedCityNames = uniqueCityNames.sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" })
    );

    return sortedCityNames;
  } catch (error) {
    console.error("Error fetching Australian cities:", error);
    return [];
  }
};
