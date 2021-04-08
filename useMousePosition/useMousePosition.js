const useMousePosition = () => {
    const [mPosition, setMPosition] = useState({
      x: 0,
      y: 0
    });
  
    const handle = event => {
      const { clientX: x, clientY: y } = event;
      setMPosition({ x, y });
    };
  
    useEffect(() => {
      window.addEventListener("mousemove", handle);
      return () => {
        window.removeEventListener("mousemove", handle);
      }
    }, []);
  
    return mPosition;
  }
  