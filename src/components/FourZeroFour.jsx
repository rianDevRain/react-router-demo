/** @format */

import { useLocation } from 'react-router-dom';

export function FourZeroFour() {
    let location = useLocation();

    return (
      <div>
        <h1>
          404 Page not found 
        </h1>
        <h2>
            You typed yout typed <code>{location.pathname}</code>
        </h2>
        <h3>
            Please try clicking in the navigation above
        </h3>
        
      </div>
    );
}
