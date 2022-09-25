import { useState } from 'react';

const useInternetChecker = () => {
  const [internetStatus, setInternetStatus] = useState(true);

  const checkStatus = () => {
    if(navigator.onLine) {
      setInternetStatus(true);
    } else {
      setInternetStatus(false);
    }
  }

  window.addEventListener("online", checkStatus);
  window.addEventListener("offline", checkStatus);

  return internetStatus;
}

export { useInternetChecker };