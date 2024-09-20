import { LuBox } from "react-icons/lu";
import { FaCloud } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const WelcomeScreen = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      
      <div className="flex-[1] bg-white p-4 border-r border-gray-200">
        <div className='w-[20.8rem] h-full bg-white px-5 pt-4 flex flex-col relative'>
          <div className="flex items-center mb-4 justify-between gap-1">
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 transition duration-150">
             
              <a href="#" className="cursor-pointer flex items-center hover:text-blue-600 transition duration-150">
                <LuBox/>&nbsp; Dashboard
              </a>
              <span>&gt;</span>
              <a href="#" className="cursor-pointer hover:text-blue-600 transition duration-150">
                Frontend
              </a>
            </div>
            <svg
              className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600 transition duration-150"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>

          {/* Segment Buttons */}
          <div className="mb-4 ant-segmented css-1jmz7pr">
            <div className="flex space-x-1 mb-2 text-sm ant-segmented-group bg-gray-200 p-0.5 rounded">
              <button className="bg-gray-200 text-gray-600 hover:bg-white hover:text-gray-600 px-3 py-1 rounded">
                Content
              </button>
              <button className="bg-gray-200 text-gray-600 hover:bg-white hover:text-gray-600 px-3 py-1 rounded">
                Design
              </button>
              <button className="bg-gray-200 text-gray-600 hover:bg-white hover:text-gray-600 px-3 py-1 rounded">
                Share
              </button>
              <button className="bg-gray-200 text-gray-600 hover:bg-white hover:text-gray-600 px-3 py-1 rounded">
                Replies
              </button>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      {/* Main content */}
      
      <div className="flex-[3] bg-black p-8 flex items-center justify-center rounded-lg border-2 border-white">
  <div className="max-w-3xl w-full flex">
    <div className="flex-1 pr-8">
      <h1 className="text-5xl font-bold mb-4 text-white">Welcome to our form</h1>
      <p className="text-xl mb-6 text-white">This is a description of the form</p>
      <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold">
        Start
      </button>
    </div>
    <div className="w-64 h-64 bg-green-500 rounded-lg overflow-hidden">
      <img
        src="/api/placeholder/256/256"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>



      
      {/* Footer */}
        {/* Footer */}
{/* Footer */}
<div className="absolute bottom-4 left-4 flex items-center gap-10">
  {/* Left Container Div */}
  <div className="flex items-center space-x-2">
    <button className="whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-zinc-700 bg-black hover:bg-zinc-700 transition duration-150 rounded-lg w-40 h-10 text-white text-xs font-medium flex items-center justify-center">
      <FaCloud />&nbsp; Save &amp; Publish
    </button>
    <button className="flex items-center justify-center w-40 h-10 px-4 py-2 text-xs font-medium rounded-lg hover:bg-rose-100 text-rose-500">
      <RiDeleteBin5Line />&nbsp; Delete
    </button>
  </div>
</div>



    </div>
  );
};

export default WelcomeScreen;
