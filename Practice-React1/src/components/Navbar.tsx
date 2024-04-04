import { useState } from "react";

export default function Nav() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }
  return (
    <div>
      <nav className="navbar">
        <h1>Mexican Resturant</h1>
        <button onClick={handleClick}>Options</button>
        {show && (
          <ul>
            <li>
              <button>Start Order</button>
            </li>
            <li>
              <button>Menu</button>
            </li>
            <li>
              <button>Contact Us</button>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
