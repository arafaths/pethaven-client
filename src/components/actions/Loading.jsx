import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-15">
      <div className="relative">
        {/* spinning border */}
        <div className="w-15 h-15 border-4 border-gray-700 border-t-orange-500 rounded-full animate-spin"></div>

        {/* logo center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/PetHaven.png" alt="Loading" width={40} height={40} className='w-10 h-10'/>
        </div>
      </div>
    </div>
  );
};

export default Loading;