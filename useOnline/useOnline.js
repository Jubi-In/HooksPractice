const useOnline = () => {
    const [status, setStatus] = useState(navigator.onLine);
    const handle = () => {
      setStatus(navigator.onLine);
    }
  
    useEffect(() => {
      window.addEventListener("online", handle);
      window.addEventListener("offline", handle);
      return () => {
        window.removeEventListener("online", handle);
        window.removeEventListener("offline", handle);
      }
    }, []);
  
    return status;
  }