import React, { useEffect } from "react";

function withLogger<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
) {
  const WithLogger: React.FC<P> = (props) => {
    useEffect(() => {
      console.log(`[withLogger] ${componentName} mounted`);
      return () => {
        console.log(`[withLogger] ${componentName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  WithLogger.displayName = `WithLogger(${componentName})`;
  return WithLogger;
}

export default withLogger;