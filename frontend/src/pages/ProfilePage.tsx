import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  MapPin,
} from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import SectionCard from "@/components/common/SectionCard";
import PrimaryButton from "@/components/common/PrimaryButton";


export default function ProfilePage() {

  return (

    <div className="space-y-8">


      <PageHeader
        title="Candidate Profile"
        subtitle="Manage your personal information and professional profile."
      />


      <div className="grid gap-8 lg:grid-cols-3">


        {/* Left Profile Card */}

        <SectionCard title="Profile">

          <div className="flex flex-col items-center">


            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-100">

              <User
                size={56}
                className="text-blue-600"
              />

            </div>


            <h2 className="mt-5 text-xl font-bold">
              Niraj Malla
            </h2>


            <p className="text-slate-500">
              Computer Engineering Student
            </p>



            <div className="mt-6 w-full space-y-4">


              <div className="flex items-center gap-3">

                <Mail size={18} />

                <span>
                  niraj@email.com
                </span>

              </div>



              <div className="flex items-center gap-3">

                <Phone size={18} />

                <span>
                  +977-98XXXXXXXX
                </span>

              </div>



              <div className="flex items-center gap-3">

                <MapPin size={18} />

                <span>
                  Nepal
                </span>

              </div>


            </div>



            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </a>


              <a
                href="#"
                className="text-gray-700 hover:text-black"
              >
                GitHub
              </a>

            </div>


          </div>


        </SectionCard>




        {/* Right Content */}


        <div className="space-y-8 lg:col-span-2">



          <SectionCard title="Basic Information">


            <div className="grid gap-5 md:grid-cols-2">


              <div>

                <label className="mb-2 block font-medium">
                  Full Name
                </label>


                <input
                  className="w-full rounded-xl border p-3"
                  placeholder="Full Name"
                />

              </div>



              <div>

                <label className="mb-2 block font-medium">
                  Email
                </label>


                <input
                  className="w-full rounded-xl border p-3"
                  placeholder="Email"
                />

              </div>




              <div>

                <label className="mb-2 block font-medium">
                  Phone
                </label>


                <input
                  className="w-full rounded-xl border p-3"
                  placeholder="Phone"
                />

              </div>




              <div>

                <label className="mb-2 block font-medium">
                  Location
                </label>


                <input
                  className="w-full rounded-xl border p-3"
                  placeholder="Location"
                />

              </div>



            </div>


          </SectionCard>





          <SectionCard title="Education">


            <div className="flex items-center gap-3 rounded-xl border p-4">


              <GraduationCap className="text-blue-600" />


              <div>

                <h3 className="font-semibold">
                  Bachelor of Computer Engineering
                </h3>


                <p className="text-sm text-slate-500">
                  University Name
                </p>


              </div>


            </div>


          </SectionCard>





          <SectionCard title="Experience">


            <div className="flex items-center gap-3 rounded-xl border p-4">


              <Briefcase className="text-blue-600" />


              <div>

                <h3 className="font-semibold">
                  AI & ML Projects
                </h3>


                <p className="text-sm text-slate-500">
                  Portfolio Projects
                </p>


              </div>


            </div>


          </SectionCard>





          <SectionCard title="Skills">


            <div className="flex flex-wrap gap-3">


              {[
                "Python",
                "FastAPI",
                "React",
                "SQL",
                "Machine Learning",
                "Deep Learning",
                "OpenCV",
                "Git",
              ].map((skill) => (


                <span
                  key={skill}
                  className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                >

                  {skill}

                </span>


              ))}


            </div>


          </SectionCard>





          <div className="flex justify-end">


            <PrimaryButton>
              Save Profile
            </PrimaryButton>


          </div>



        </div>



      </div>


    </div>

  );

}