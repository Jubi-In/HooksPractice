const useKeyPress = targetkey => {
    const [keyPress, setKeyPress] = useState(false);
  
    const upHandler = event => {
      const { key } = event;
      if (targetkey === key) {
        setKeyPress(false);
      }
    }
  
    const downHandler = event => {
      const { key } = event;
      if (targetkey === key) {
        setKeyPress(true);
      }
    }
  
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    });
  
    return keyPress;
  }