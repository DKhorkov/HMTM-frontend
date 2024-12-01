import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <div className="absolute h-full w-full bg-[radial-gradient(#d4d6da_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="relative flex justify-center items-center min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
