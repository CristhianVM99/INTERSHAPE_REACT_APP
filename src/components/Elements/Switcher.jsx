import { useState, useEffect } from 'react';

const Switcher = () => {
  const [stylePath, setStylePath] = useState('/assets/css/skin/skin-1.css');
  const [isSwitchActive, setIsSwitchActive] = useState(false);

  useEffect(() => {
    const homepage2 = /\/home-2/i;
    if (homepage2.test(window.location.href)) {
      document.body.classList.add('footer-fixed');
    } else {
      document.body.classList.remove('footer-fixed');
    }
  }, []);

  const handleSwitchToggle = () => {
    setIsSwitchActive(!isSwitchActive);
  };

  const handleSwitchSkin = (skin) => {
    switch (skin) {
      case 1:
        setStylePath('/assets/css/skin/skin-1.css');
        break;
      case 2:
        setStylePath('/assets/css/skin/skin-2.css');
        break;
      case 3:
        setStylePath('/assets/css/skin/skin-3.css');
        break;
      case 4:
        setStylePath('/assets/css/skin/skin-4.css');
        break;
      case 5:
        setStylePath('/assets/css/skin/skin-5.css');
        break;
      case 6:
        setStylePath('/assets/css/skin/skin-6.css');
        break;
      case 7:
        setStylePath('/assets/css/skin/skin-7.css');
        break;
      case 8:
        setStylePath('./assets/css/skin/skin-8.css');
        break;
      case 9:
        setStylePath('/assets/css/skin/skin-9.css');
        break;
      case 10:
        setStylePath('/assets/css/skin/skin-10.css');
        break;
      default:
        setStylePath('/assets/css/skin/skin-1.css');
        break;
    }
  };

  return (
    <>
      <link rel="stylesheet" type="text/css" href={stylePath} />
    </>
  );
};

/* =============================================================================
/
/    WEB DEVELOPER => CRISTHIAN VILLCA MAMANI
/    LINKEDIN => https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/
/
================================================================================ */ 

export default Switcher;
