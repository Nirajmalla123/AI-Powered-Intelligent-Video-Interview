import {
  ClipboardList,
  FileText,
  BarChart3,
  CheckCircle2,
  Clock3,
  PlayCircle,
} from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import StatCard from "@/components/common/StatCard";
import SectionCard from "@/components/common/SectionCard";
import PrimaryButton from "@/components/common/PrimaryButton";

const recentInterviews = [
  {
    id: 1,
    role: "Python Fundamentals",
    status: "Completed",
    score: "86%",
    date: "25 Jul 2026",
  },
  {
    id: 2,
    role: "Data Structures",
    status: "Completed",
    score: "91%",
    date: "23 Jul 2026",
  },
  {
    id: 3,
    role: "Machine Learning",
    status: "Pending",
    score: "--",
    date: "Today",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Dashboard"
        subtitle="Welcome back. Here's an overview of your interview progress."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Interviews"
          value={12}
          icon={ClipboardList}
        />

        <StatCard
          title="Completed"
          value={9}
          icon={CheckCircle2}
        />

        <StatCard
          title="Reports"
          value={9}
          icon={BarChart3}
        />

        <StatCard
          title="Resume Uploaded"
          value="Yes"
          icon={FileText}
        />

      </div>

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <SectionCard title="Recent Interviews">

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b">

                    <th className="py-3 text-left">
                      Topic
                    </th>

                    <th className="py-3 text-left">
                      Date
                    </th>

                    <th className="py-3 text-left">
                      Status
                    </th>

                    <th className="py-3 text-left">
                      Score
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {recentInterviews.map((item) => (

                    <tr
                      key={item.id}
                      className="border-b last:border-0"
                    >

                      <td className="py-4 font-medium">
                        {item.role}
                      </td>

                      <td>
                        {item.date}
                      </td>

                      <td>

                        <span
                          className={`rounded-full px-3 py-1 text-sm ${
                            item.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.status}
                        </span>

                      </td>

                      <td className="font-semibold">
                        {item.score}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </SectionCard>

        </div>

        <SectionCard title="Quick Actions">

          <div className="space-y-4">

            <PrimaryButton className="w-full flex items-center justify-center gap-2">

              <PlayCircle size={20} />

              Start New Interview

            </PrimaryButton>

            <button className="w-full rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium hover:bg-slate-100">

              View Reports

            </button>

            <button className="w-full rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium hover:bg-slate-100">

              Update Profile

            </button>

          </div>

          <div className="mt-8 rounded-xl bg-blue-50 p-5">

            <div className="flex items-center gap-3">

              <Clock3 className="text-blue-600" />

              <div>

                <p className="font-semibold">

                  Next Interview

                </p>

                <p className="text-sm text-slate-500">

                  Machine Learning

                </p>

              </div>

            </div>

          </div>

        </SectionCard>

      </div>

    </div>
  );
}