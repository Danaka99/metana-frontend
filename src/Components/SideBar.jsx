import { LuBox } from "react-icons/lu";
import { FaCloud } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";



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
            <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r3t:" data-state="closed" class="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   hover:bg-zinc-100 hover:text-zinc-900   h-7 w-7">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-4 w-4">
               <path fill-rule="evenodd" d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd">
               </path>
              </svg>
            </button>
          </div>

          {/* Segment Buttons */}
          <div className="mb-4 ant-segmented css-1jmz7pr">
            <div className="flex space-x-1 mb-6 text-sm ant-segmented-group bg-gray-200 p-0.5 rounded">
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

          <div>
          <h3 className="flex items-center font-bold mb-2 text-sm">
            <TiThMenu className="mr-2" />
            Steps
          </h3>

          <p className="text-xs text-gray-500 mb-4">
            The steps users will take to complete the form
          </p>
          
          <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                  <button class="relative flex items-center w-full pl-1 transition duration-150  rounded-lg cursor-pointer hover:bg-zinc-100 bg-zinc-50">
                  <div class="absolute w-2 h-8 transform -translate-y-1/2 top-1/2">
                  </div>
                    <button class="pl-1 pr-1.5 h-8 ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="text-zinc-400 h-2.5 w-2.5">
                      <path fill-rule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5Z" clip-rule="evenodd">
                      </path>
                      </svg>
                    </button>
                    <button class="text-xs px-1.5  w-full focus:outline-none py-3">Welcome screen</button>
                     <button class=" hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-3 w-3 text-zinc-400 group-hover:text-zinc-900">
                       <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z">
                       </path>
                      </svg>
                     </button>
                    </button>
                  </li>

                  <li className="flex items-center">
                  <button class="relative flex items-center w-full pl-1 transition duration-150  rounded-lg cursor-pointer hover:bg-zinc-100 bg-zinc-50">
                  <div class="absolute w-2 h-8 transform -translate-y-1/2 top-1/2">
                  </div>
                    <button class="pl-1 pr-1.5 h-8 ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="text-zinc-400 h-2.5 w-2.5">
                      <path fill-rule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5Z" clip-rule="evenodd">
                      </path>
                      </svg>
                    </button>
                    <button class="text-xs px-1.5  w-full focus:outline-none py-3">Enter your name</button>
                     <button class=" hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-3 w-3 text-zinc-400 group-hover:text-zinc-900">
                       <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z">
                       </path>
                      </svg>
                     </button>
                    </button>
                  </li>

                  <li className="flex items-center">
                  <button class="relative flex items-center w-full pl-1 transition duration-150  rounded-lg cursor-pointer hover:bg-zinc-100 bg-zinc-50">
                  <div class="absolute w-2 h-8 transform -translate-y-1/2 top-1/2">
                  </div>
                    <button class="pl-1 pr-1.5 h-8 ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="text-zinc-400 h-2.5 w-2.5">
                      <path fill-rule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5Z" clip-rule="evenodd">
                      </path>
                      </svg>
                    </button>
                    <button class="text-xs px-1.5  w-full focus:outline-none py-3">Enter your email</button>
                     <button class=" hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-3 w-3 text-zinc-400 group-hover:text-zinc-900">
                       <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z">
                       </path>
                      </svg>
                     </button>
                    </button>
                  </li>
            
            
            <li className="reorder-ul fill-available">
              <button className="inline-flex  mb-6 items-center justify-center whitespace-nowrap font-medium ring-offset-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 w-[90px]  rounded-lg text-xs h-7 px-2.5 gap-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-3 w-3 -ml-0.5 mr-0.5 mb-6">
                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z">
                </path></svg>
                + Add field
              </button>
             <div
                class="border-t border-gray-300 my-2 w-2/ mb-8"
                role="separator" >
              </div>

            </li>
            <li className="flex items-center">
              <button class="relative flex items-center w-full pl-1 transition duration-150  rounded-lg cursor-pointer hover:bg-zinc-100 bg-zinc-50">
                  <div class="absolute w-2 h-8 transform -translate-y-1/2 top-1/2">
                  </div>
                    <button class="pl-1 pr-1.5 h-8 ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" class="text-zinc-400 h-2.5 w-2.5">
                        <path fill-rule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5Z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </button>
                    <button class="text-xs px-1.5  w-full focus:outline-none py-3">End Screen</button>
                     <button class=" hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" class="h-3 w-3 text-zinc-400 group-hover:text-zinc-900">
                        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z">
                        </path>
                      </svg>
                     </button>
              </button>
            </li>
          </ul>
        </div>
        </div>
      </div>

      {/* Main content */}
      
      <div className="flex-[3] bg-black p-8 flex items-center justify-center rounded-lg border-2 border-white">
  <div className="max-w-3xl w-full flex">
    <div className="flex-1 pr-8">
      <h1 className="text-5xl font-bold mb-4 text-white">Welcome to our form</h1>
      <p className="text-xl mb-6 text-white">This is a description of the form</p>
      <button className="bg-white text-black px-8 py-3 rounded-full text-sm">
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
