const useLockScroll = () => {
    const [isLocked, setLocked] = useState(false);
  
    const lockScroll = () =>  {
      document.body.style.overflow = 'hidden';
      document.querySelector('html').scrollTop = window.scrollY;
      setLocked(true);
    }
    const unlockScroll = () =>  {
      document.body.style.overflow = 'visible';
      setLocked(false);
    }
  
    return [isLocked, {lockScroll, unlockScroll}];
  }