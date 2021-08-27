import React, { FC, useEffect, useRef, useState } from 'react';

const Header: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const menuEl = useRef<HTMLUListElement | null>(null);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  const handleCloseToggle = (e: any) => {
    if (toggle && (!menuEl.current || !menuEl.current?.contains(e.target))) {
      setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleCloseToggle);

    return () => window.removeEventListener('click', handleCloseToggle);
  });

  return (
    <div className="bg-red-100 py-4 flex justify-between px-4">
      <div>Header</div>
      <div className="relative">
        <button onClick={onClickToggle}>Toggle</button>
        {toggle && (
          <ul ref={menuEl} className="absolute bg-white p-4 -left-4">
            <li>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
            <li>menu4</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
