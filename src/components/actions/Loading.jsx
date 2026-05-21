import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative">
        {/* spinning border */}
        <div className="w-20 h-20 border-4 border-gray-700 border-t-orange-500 rounded-full animate-spin"></div>

        {/* logo center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/logo.png" alt="Loading" width={45} height={45} />
        </div>
      </div>
    </div>
  );
};

export default Loading;