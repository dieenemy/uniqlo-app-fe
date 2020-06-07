import React, { createContext, useState } from 'react';

export const OtherFunction = createContext();

const OtherFunctionProvider = ({ children }) => {
  const [show, setShow] = React.useState(false);

  const [height, setHeight] = React.useState(0);

  const [visible, setVisible] = React.useState(false);

  const [filterProduct, setFilterProducts] = useState();

  const cssClass = () => {
    setVisible((visible) => !visible);
  };

  const filterPrice = (data) => {
    data.sort((a, b) => b.price - a.price);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener('scroll', () => {});
  });

  return (
    <OtherFunction.Provider
      value={{
        height,
        cssClass,
        visible,
        filterProduct,
        setFilterProducts,
        show,
        setShow,
        filterPrice,
      }}
    >
      {children}
    </OtherFunction.Provider>
  );
};

export default OtherFunctionProvider;
