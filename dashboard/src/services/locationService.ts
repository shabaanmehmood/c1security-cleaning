
export const fetchCityCoordinates = async (cityName: string) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?countrycodes=au&q=${encodeURIComponent(
        cityName
      )}&format=json&limit=1`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch location data");
    }

    const results = await response.json();
    if (results.length > 0) {
      const loc = results[0];
      return {
        lat: parseFloat(loc.lat),
        lon: parseFloat(loc.lon),
        displayName: loc.display_name,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching city coordinates:", error);
    return null;
  }
};
