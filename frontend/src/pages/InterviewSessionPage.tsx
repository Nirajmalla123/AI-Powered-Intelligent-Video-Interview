import { useParams } from "react-router-dom";
import {
  Video,
  Mic,
  Clock,
  Play,
} from "lucide-react";


export default function InterviewSessionPage() {

  const { id } = useParams();


  return (

    <div className="space-y-8">


      <div>

        <h1 className="text-3xl font-bold">
          Interview Session
        </h1>

        <p className="text-slate-500 mt-2">
          AI powered interview assessment
        </p>

      </div>



      <div className="grid lg:grid-cols-3 gap-6">


        {/* Camera Area */}

        <div className="
          lg:col-span-2
          bg-black
          rounded-2xl
          h-[420px]
          flex
          items-center
          justify-center
          text-white
        ">

          <div className="text-center">

            <Video
              size={50}
              className="mx-auto mb-4"
            />

            <p>
              Camera Preview
            </p>

          </div>

        </div>



        {/* Status Panel */}

        <div className="
          bg-white
          border
          rounded-2xl
          p-6
          space-y-5
        ">


          <div>

            <h2 className="text-xl font-semibold">
              Current Question
            </h2>

            <p className="mt-3 text-slate-600">
              Explain the concept of Python decorators.
            </p>

          </div>



          <div className="flex items-center gap-3">

            <Mic className="text-green-600"/>

            <span>
              Microphone Ready
            </span>

          </div>



          <div className="flex items-center gap-3">

            <Clock className="text-orange-500"/>

            <span>
              Time Remaining: 02:00
            </span>

          </div>



          <button
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-xl
              flex
              justify-center
              items-center
              gap-2
            "
          >

            <Play size={20}/>

            Start Recording

          </button>


        </div>


      </div>


    </div>

  );

}