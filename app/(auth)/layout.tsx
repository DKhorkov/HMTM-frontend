import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-400/10">
      {children}
    </div>
  );
};

export default Layout;
