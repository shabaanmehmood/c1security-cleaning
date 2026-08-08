"use client";

import "leaflet/dist/leaflet.css";
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { fetchAustralianCities } from "@/services/cityService";
import { fetchCityCoordinates } from "@/services/locationService";

const AUSTRALIA_BOUNDS = L.latLngBounds([-44.0, 112.0], [-10.0, 154.0]);
const defaultCenter: [number, number] = [-25.2744, 133.7751];

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function MapUpdater({
  position,
  zoomLevel,
}: {
  position: [number, number];
  zoomLevel: number;
}) {
  const map = useMap();
  React.useEffect(() => {
    map.setView(position, zoomLevel);
    map.setMaxBounds(AUSTRALIA_BOUNDS);
    map.on("drag", () => {
      map.panInsideBounds(AUSTRALIA_BOUNDS, { animate: false });
    });
  }, [position, zoomLevel, map]);
  return null;
}

const AustraliaMap: React.FC = () => {
  const [query, setQuery] = useState("");
  const [position, setPosition] = useState<[number, number]>(defaultCenter);
  const [locationName, setLocationName] = useState<string>("");
  const [zoomLevel, setZoomLevel] = useState(5);
  const [allCities, setAllCities] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [showList, setShowList] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // 🧠 Fetch and cache all cities ONCE
  useEffect(() => {
    const loadCities = async () => {
      try {
        setLoading(true);
        const cities = await fetchAustralianCities("");
        setAllCities(cities);
      } catch (err) {
        console.error("Failed to fetch cities:", err);
      } finally {
        setLoading(false);
      }
    };
    loadCities();
  }, []);

  // 🕓 Debounce user typing
  const [debouncedQuery, setDebouncedQuery] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);
    return () => clearTimeout(timer);
  }, [query]);

  // 🔍 Filter results efficiently
  const filteredCities = useMemo(() => {
    return allCities.filter((city) =>
      city.toLowerCase().startsWith(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery, allCities]);

  // 📍 Handle input
  const handleInputChange = (value: string) => {
    setQuery(value);
    setShowList(true);
  };

  // 📍 City selection
  const handleCitySelect = useCallback(async (cityName: string) => {
    setQuery(cityName);
    setShowList(false);

    const location = await fetchCityCoordinates(cityName);

    if (location) {
      setPosition([location.lat, location.lon]);
      setLocationName(location.displayName);
      setZoomLevel(10);
    } else {
      alert("City not found on map!");
    }
  }, []);

  // 🔎 On clicking Search button
  const handleSearchClick = () => {
    if (!query.trim()) return;
    const found = allCities.some(
      (city) => city.toLowerCase() === query.toLowerCase()
    );
    if (found) {
      handleCitySelect(query);
    } else {
      alert("No city with such name in Australia!");
    }
  };

  // 🖱️ Hide list when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl tracking-tight text-blue-950 mt-10 font-semibold o-outfit">
        Locations We Serve
      </h1>
      <div className="w-20 h-1 bg-blue-950 mx-auto rounded-full"></div>

      {/* 🔍 Search Bar */}
      <div
        ref={dropdownRef}
        className="relative flex z-[1200] w-full max-w-md mb-6 gap-2 mt-4"
      >
        <input
          type="text"
          placeholder={
            loading ? "Loading cities..." : "Search Australian city..."
          }
          value={loading ? "" : query}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => setShowList(true)}
          disabled={loading}
          className={`flex-grow border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none ${
            loading ? "text-gray-400 cursor-not-allowed bg-gray-50" : ""
          }`}
        />

        <button
          onClick={handleSearchClick}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          Search
        </button>

        {/* 🧩 Dropdown */}
        {showList && !loading && filteredCities.length > 0 && (
          <div className="absolute z-40 bg-white border border-gray-300 rounded-md mt-12 w-full shadow-lg max-h-60 overflow-y-auto">
            {filteredCities.map((city, idx) => (
              <li
                key={idx}
                onClick={() => handleCitySelect(city)}
                className="p-2 hover:bg-blue-100 cursor-pointer"
              >
                {city}
              </li>
            ))}
          </div>
        )}

        {!loading && showList && filteredCities.length === 0 && (
          <div className="absolute z-40 bg-white border border-gray-300 rounded-md mt-12 w-full shadow-lg p-3 text-gray-500 text-sm text-center">
            No matching cities found.
          </div>
        )}
      </div>

      {/* 🗺️ Map */}
      <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={defaultCenter}
          zoom={5}
          minZoom={4}
          maxZoom={14}
          scrollWheelZoom
          style={{ height: "100%", width: "100%" }}
          maxBounds={AUSTRALIA_BOUNDS}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapUpdater position={position} zoomLevel={zoomLevel} />
          {locationName && (
            <Marker position={position}>
              <Popup>{locationName}</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default AustraliaMap;
