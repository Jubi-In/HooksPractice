const useGeolocation = () => {
    const [geo, setGeo] = useState({
      coords: { lat: null, long: null },
      error: null
    });
  
    const success = pos => {
      const { coords: { latitude: lat, longitude: long } } = pos;
      setGeo({ coords: { lat, long } });
    }
  
    const error = err => {
      setGeo({ error: err.message });
    }
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(success, error);
    }, []);
  
    return geo;
  }