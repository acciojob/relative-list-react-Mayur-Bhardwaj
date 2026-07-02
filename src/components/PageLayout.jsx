import React from "react";

function PageLayout({ header, footer, children }) {
  return(
    <div>
      {header}
      {footer}
      {children}
    </div>
  );
}
export default PageLayout;