import React from 'react';
import { Outlet} from "react-router-dom";
import '@/styles/MobileLayout.css';
const ConsumerLayout: React.FC<{
 
}> = ({  }) => {
  return (
    <div className="mobile-wrapper">
      <div className="mobile-layout">
            <Outlet />
      </div>
    </div>
  );
};
     


export default ConsumerLayout;

