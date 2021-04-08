const useFadeIn = (duration = 1, delay = 5) => {
    const element = useRef();
    useEffect(() => {
      if (typeof duration !== "number" || typeof delay !== "number") {
        return;
      } else {
        if (element.current) {
          const { current } = element;
          current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
          current.style.opacity = 1;
        }
      }
    }, []);
    return { ref: element, style: { opacity: 0 } };
  };

  function App() {
    const fadeInH1 = useFadeIn();
    const fadeInP = useFadeIn();
    return (
      <div>
        <div>
          <h1 {...fadeInH1}>hello</h1>
          <p {...fadeInP}>hahaha</p>
        </div>
      </div>
    );
  }