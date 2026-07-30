import {
  Trophy,
  Brain,
  Mic,
  Eye,
  Smile,
  MessageSquare,
  Download,
} from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import SectionCard from "@/components/common/SectionCard";
import PrimaryButton from "@/components/common/PrimaryButton";

export default function ReportsPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Interview Report"
        subtitle="View your AI interview analysis and overall performance."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-blue-600 p-6 text-white">
          <Trophy size={34} />
          <h2 className="mt-4 text-3xl font-bold">
            87%
          </h2>
          <p>Overall Score</p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <Brain
            className="text-blue-600"
            size={34}
          />
          <h2 className="mt-4 text-3xl font-bold">
            91%
          </h2>
          <p>Technical Knowledge</p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <Mic
            className="text-blue-600"
            size={34}
          />
          <h2 className="mt-4 text-3xl font-bold">
            84%
          </h2>
          <p>Communication</p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <Eye
            className="text-blue-600"
            size={34}
          />
          <h2 className="mt-4 text-3xl font-bold">
            88%
          </h2>
          <p>Confidence</p>
        </div>

      </div>

      <SectionCard title="Performance Breakdown">

        <div className="space-y-6">

          <div>
            <div className="mb-2 flex justify-between">
              <span>Technical Skills</span>
              <span>91%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-200">
              <div className="h-3 w-[91%] rounded-full bg-blue-600"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <span>Problem Solving</span>
              <span>86%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-200">
              <div className="h-3 w-[86%] rounded-full bg-green-500"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <span>Communication</span>
              <span>84%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-200">
              <div className="h-3 w-[84%] rounded-full bg-orange-500"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <span>Confidence</span>
              <span>88%</span>
            </div>

            <div className="h-3 rounded-full bg-slate-200">
              <div className="h-3 w-[88%] rounded-full bg-purple-500"></div>
            </div>
          </div>

        </div>

      </SectionCard>

      <div className="grid gap-6 lg:grid-cols-2">

        <SectionCard title="AI Feedback">

          <div className="space-y-5">

            <div className="flex gap-3">
              <Brain className="text-blue-600" />
              <p>
                Strong technical understanding with
                clear explanations.
              </p>
            </div>

            <div className="flex gap-3">
              <Mic className="text-blue-600" />
              <p>
                Voice clarity is good but speaking pace
                can be improved.
              </p>
            </div>

            <div className="flex gap-3">
              <Smile className="text-blue-600" />
              <p>
                Positive facial expressions detected
                throughout the interview.
              </p>
            </div>

            <div className="flex gap-3">
              <MessageSquare className="text-blue-600" />
              <p>
                Answers were relevant and well
                structured.
              </p>
            </div>

          </div>

        </SectionCard>

        <SectionCard title="Recommendations">

          <ul className="space-y-4 list-disc pl-5 text-slate-600">

            <li>
              Improve response speed.
            </li>

            <li>
              Practice behavioural questions.
            </li>

            <li>
              Maintain eye contact consistently.
            </li>

            <li>
              Continue solving DSA problems.
            </li>

            <li>
              Practice mock interviews weekly.
            </li>

          </ul>

          <div className="mt-8">

            <PrimaryButton>

              <span className="flex items-center gap-2">

                <Download size={18} />

                Download PDF Report

              </span>

            </PrimaryButton>

          </div>

        </SectionCard>

      </div>

    </div>
  );
}