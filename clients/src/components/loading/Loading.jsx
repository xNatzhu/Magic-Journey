import { useState, useEffect } from "react";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black z-50 ${
        isLoading ? "" : "hidden"
      }`}
    >
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#9DC08B]"></div>
    </div>
  );
}

export default Loading;
