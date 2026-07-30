import { useState } from "react";
import {
  FileText,
  UploadCloud,
  Trash2,
  Download,
} from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import SectionCard from "@/components/common/SectionCard";
import PrimaryButton from "@/components/common/PrimaryButton";

export default function ResumePage() {
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="space-y-8">

      <PageHeader
        title="Resume"
        subtitle="Upload your latest resume before starting interviews."
      />

      <div className="max-w-4xl">

        <SectionCard title="Resume Management">

          {!resumeUploaded ? (

            <div className="space-y-8">

              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center">

                <UploadCloud
                  size={60}
                  className="mx-auto text-blue-600"
                />

                <h2 className="mt-5 text-2xl font-bold">
                  Upload Your Resume
                </h2>

                <p className="mt-3 text-slate-500">
                  PDF or DOCX only
                </p>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-8 block w-full rounded-lg border bg-white p-3"
                  onChange={(e) =>
                    setFile(
                      e.target.files?.[0] || null
                    )
                  }
                />

                <div className="mt-8">

                  <PrimaryButton
                    disabled={!file}
                    onClick={() => setResumeUploaded(true)}
                  >
                    Upload Resume
                  </PrimaryButton>

                </div>

              </div>

            </div>

          ) : (

            <div className="rounded-2xl border border-green-200 bg-green-50 p-8">

              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div className="flex items-center gap-5">

                  <div className="rounded-xl bg-white p-4 shadow">

                    <FileText
                      size={42}
                      className="text-blue-600"
                    />

                  </div>

                  <div>

                    <h2 className="text-xl font-bold">

                      Resume Uploaded Successfully

                    </h2>

                    <p className="mt-2 text-slate-600">

                      Resume_2026.pdf

                    </p>

                    <p className="text-sm text-slate-500">

                      Uploaded just now

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <button className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-white">

                    <Download size={18} />

                    Download

                  </button>

                  <button
                    onClick={() =>
                      setResumeUploaded(false)
                    }
                    className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700"
                  >

                    <Trash2 size={18} />

                    Delete

                  </button>

                </div>

              </div>

            </div>

          )}

        </SectionCard>

        <SectionCard title="Resume Tips">

          <div className="space-y-4 text-slate-600">

            <p>
              ✔ Keep your resume to one page whenever possible.
            </p>

            <p>
              ✔ Include your latest projects and technical skills.
            </p>

            <p>
              ✔ Mention internships and certifications.
            </p>

            <p>
              ✔ Use PDF format for the best compatibility.
            </p>

          </div>

        </SectionCard>

      </div>

    </div>
  );
}