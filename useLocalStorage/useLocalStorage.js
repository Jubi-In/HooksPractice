const useLocalStorage = (name, initialValue) => {
    const [currentLS, setStoredValue] = useState(initialValue);
  
    const setLS = (value) => {
      window.localStorage.setItem(name, JSON.stringify(value));
      setStoredValue(value);
    }
    return [currentLS, setLS];
  }