
const useDeviceOrientation = () => {
    const [orientation, setOrientation] = useState({
      alpha: null,
      beta: null,
      gamma: null
    });
  
    const handle = event => {
      const { alpha, beta, gamma } = event;
      setOrientation({ alpha, beta, gamma });
    }
  
    useEffect(() => {
      window.addEventListener("deviceorientation", handle);
      return () => window.removeEventListener("deviceorientation", handle);
    }, []);
  
    return orientation;
  };