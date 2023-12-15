import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-600 to-indigo-600 text-white">
      <header className="w-full bg-gray-800 py-4 text-center text-white">
        <h1 className="text-3xl font-extrabold">CodeSphere</h1>
      </header>
      <main className="flex w-full grow items-center justify-center p-4">
        {children}
      </main>
      <footer className="w-full bg-gray-800 py-2 text-center text-white">
        <p>&copy; 2023 CodeSphere. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
