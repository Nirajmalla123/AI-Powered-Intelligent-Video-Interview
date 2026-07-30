import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  PlayCircle,
  Search,
  Filter,
  Briefcase,
  CheckCircle,
  Timer,
} from "lucide-react";



const interviews = [
  {
    id: 1,
    title: "Python Fundamentals",
    company: "AI Interview System",
    date: "28 Jul 2026",
    duration: "30 mins",
    status: "Scheduled",
  },
  {
    id: 2,
    title: "Data Structures",
    company: "AI Interview System",
    date: "26 Jul 2026",
    duration: "45 mins",
    status: "Completed",
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    company: "AI Interview System",
    date: "30 Jul 2026",
    duration: "60 mins",
    status: "Scheduled",
  },
];

export default function InterviewsPage() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filtered = interviews.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        <div>
          <h1 className="text-3xl font-bold">
            Interviews
          </h1>

          <p className="text-slate-500 mt-2">
            View and manage all your interview sessions.
          </p>
        </div>

        <button
            onClick={() => navigate("/start-interview")}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow"
        >
        <PlayCircle size={20} />
        Start Interview
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow border p-6">
          <Calendar className="text-blue-600 mb-3" />
          <h2 className="text-3xl font-bold">3</h2>
          <p className="text-slate-500">
            Total Interviews
          </p>
        </div>

        <div className="bg-white rounded-xl shadow border p-6">
          <Timer className="text-orange-500 mb-3" />
          <h2 className="text-3xl font-bold">2</h2>
          <p className="text-slate-500">
            Scheduled
          </p>
        </div>

        <div className="bg-white rounded-xl shadow border p-6">
          <CheckCircle className="text-green-600 mb-3" />
          <h2 className="text-3xl font-bold">1</h2>
          <p className="text-slate-500">
            Completed
          </p>
        </div>

      </div>

      <div className="bg-white rounded-xl border shadow p-5">

        <div className="flex flex-col md:flex-row gap-4 mb-6">

          <div className="flex-1 relative">

            <Search
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search interviews..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-lg py-2 pl-10 pr-3"
            />

          </div>

          <button className="flex items-center justify-center gap-2 border rounded-lg px-5 py-2 hover:bg-slate-100">
            <Filter size={18} />
            Filter
          </button>

        </div>

        <div className="space-y-5">

          {filtered.map((item) => (

            <div
              key={item.id}
              className="border rounded-xl p-5 hover:shadow-md transition"
            >

              <div className="flex flex-col md:flex-row md:justify-between gap-4">

                <div>

                  <h2 className="text-xl font-semibold">
                    {item.title}
                  </h2>

                  <div className="flex items-center gap-2 text-slate-500 mt-2">
                    <Briefcase size={16} />
                    {item.company}
                  </div>

                  <div className="flex gap-6 mt-4 text-sm text-slate-500">

                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {item.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {item.duration}
                    </div>

                  </div>

                </div>

                <div className="flex flex-col items-end justify-between">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.status}
                  </span>

                  <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                    View Details
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}