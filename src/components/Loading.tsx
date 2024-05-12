import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Loading;
