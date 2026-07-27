"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  applicationSchema,
  ApplicationFormValues,
} from "@/validators/ApplicationForm";
import React, { useState } from "react";
import { Loader2, Upload, CheckCircle2 } from "lucide-react";
import { auth } from "@/lib/fireBase";
import { uploadFile } from "@/lib/uploadFile";
import applicationFormPost from "@/lib/applicationFormPost";
interface ApplicationFormProps {
  jobId: string;
  jobSlug: string;
}
export default  function ApplicationForm({
  jobId,
  jobSlug,
}: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const user = auth.currentUser;
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      addressInformation: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postcode: "",
        country: "",
      },
      compliance: {
        compliance1: "",
        compliance2: "",
        compliance3: "",
        compliance4: "",
        compliance5: "",
      },
      otherInformation: {
        coverLetter: "",
        experience: "",
        availability: "",
      },
    },
  });
 

  const selectedFile = watch("resume");
  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true);

    try {
      const uploadFormData = new FormData();

      uploadFormData.append("file", data.resume);


      const uploadResult = await uploadFile(uploadFormData);

      const { resume, ...formData } = data;

      const result = await applicationFormPost({
        ...formData,
        jobId,
        jobSlug,
        resumeUrl: uploadResult.resumeUrl,
      });

      console.log(result.message);

      setSubmitSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white border border-blue-100 rounded-3xl text-center space-y-4 shadow-sm">
        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
        <h2 className="text-2xl font-bold text-blue-950">
          Application Submitted!
        </h2>
        <p className="text-slate-600">
          Thank you for applying. We will review your application and get back
          to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto bg-white p-6 sm:p-10 border border-blue-100 rounded-3xl shadow-sm space-y-8"
    >
      {/* Personal Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-950 border-b border-slate-100 pb-2">
          Personal Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
              First Name *
            </label>
            <input
              type="text"
              {...register("firstName")}
              className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            {errors.firstName && (
              <p className="text-rose-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
              Last Name *
            </label>
            <input
              type="text"
              {...register("lastName")}
              className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            {errors.lastName && (
              <p className="text-rose-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
              Email Address *
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            {errors.email && (
              <p className="text-rose-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              {...register("phoneNumber")}
              className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            {errors.phoneNumber && (
              <p className="text-rose-500 text-xs mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Resume Upload */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-blue-950 border-b border-slate-100 pb-2">
          Resume (PDF, max 5MB) *
        </h3>
        <div className="border-2 border-dashed border-blue-200 bg-blue-50/20 rounded-2xl p-6 text-center space-y-2">
          <Upload className="w-8 h-8 text-blue-500 mx-auto" />
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            id="resume-upload"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setValue("resume", file, { shouldValidate: true });
            }}
          />
          <label
            htmlFor="resume-upload"
            className="inline-block px-4 py-2 bg-blue-600 text-white font-medium text-xs rounded-xl cursor-pointer hover:bg-blue-700 transition-colors"
          >
            {selectedFile ? "Change Resume" : "Upload Resume"}
          </label>
          {selectedFile && (
            <p className="text-xs font-medium text-emerald-600 mt-2">
              Selected: {selectedFile.name}
            </p>
          )}
        </div>
        {errors.resume && (
          <p className="text-rose-500 text-xs mt-1">
            {errors.resume.message as string}
          </p>
        )}
      </div>

      {/* Address Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-950 border-b border-slate-100 pb-2">
          Address Information
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
              Address Line 1 *
            </label>
            <input
              type="text"
              {...register("addressInformation.addressLine1")}
              className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            {errors.addressInformation?.addressLine1 && (
              <p className="text-rose-500 text-xs mt-1">
                {errors.addressInformation.addressLine1.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
              Address Line 2
            </label>
            <input
              type="text"
              {...register("addressInformation.addressLine2")}
              className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
                City *
              </label>
              <input
                type="text"
                {...register("addressInformation.city")}
                className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none"
              />
              {errors.addressInformation?.city && (
                <p className="text-rose-500 text-xs mt-1">
                  {errors.addressInformation.city.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
                State *
              </label>
              <input
                type="text"
                {...register("addressInformation.state")}
                className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none"
              />
              {errors.addressInformation?.state && (
                <p className="text-rose-500 text-xs mt-1">
                  {errors.addressInformation.state.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
                Postcode *
              </label>
              <input
                type="text"
                {...register("addressInformation.postcode")}
                className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none"
              />
              {errors.addressInformation?.postcode && (
                <p className="text-rose-500 text-xs mt-1">
                  {errors.addressInformation.postcode.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
                Country *
              </label>
              <input
                type="text"
                {...register("addressInformation.country")}
                className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none"
              />
              {errors.addressInformation?.country && (
                <p className="text-rose-500 text-xs mt-1">
                  {errors.addressInformation.country.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Questions */}
      {/* Compliance Questions */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-950 border-b border-slate-100 pb-2">
          Compliance Questions
        </h3>
        <div className="space-y-4">
          {(
            [
              "compliance1",
              "compliance2",
              "compliance3",
              "compliance4",
              "compliance5",
            ] as const
          ).map((key, index) => {
            return (
              <div key={key}>
                <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
                  Compliance Question {index + 1} *
                </label>
                <input
                  type="text"
                  {...register(`compliance.${key}`)}
                  className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none"
                />
                {errors.compliance?.[key] && (
                  <p className="text-rose-500 text-xs mt-1">
                    {errors.compliance[key]?.message}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Other Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-950 border-b border-slate-100 pb-2">
          Other Information
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
              Cover Letter
            </label>
            <textarea
              rows={4}
              {...register("otherInformation.coverLetter")}
              className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
                Relevant Experience
              </label>
              <input
                type="text"
                {...register("otherInformation.experience")}
                className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-blue-950 uppercase mb-1">
                Availability / Notice Period
              </label>
              <input
                type="text"
                {...register("otherInformation.availability")}
                className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-100 rounded-xl text-sm text-blue-950 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </button>
    </form>
  );
}