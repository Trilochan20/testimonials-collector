"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const siteDetailsSchema = z.object({
  siteName: z.string().min(1, "Site Name is required"),
  companyName: z.string().min(1, "Company Name is required"),
  siteUrl: z
    .string()
    .min(1, "Site URL is required")
    .url("Invalid URL")
    .regex(
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
      "Invalid URL format"
    ),
  description: z.string().optional(),
});

type SiteDetailsForm = z.infer<typeof siteDetailsSchema>;

const SiteDetails: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SiteDetailsForm>({
    resolver: zodResolver(siteDetailsSchema),
  });

  const onSubmit = (data: SiteDetailsForm) => {
    console.log("Form Values:", data);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="siteName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Site Name
          </label>
          <input
            {...register("siteName")}
            id="siteName"
            type="text"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.siteName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.siteName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Business Company Name
          </label>
          <input
            {...register("companyName")}
            id="companyName"
            type="text"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.companyName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.companyName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="siteUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Business Site URL
          </label>
          <input
            {...register("siteUrl")}
            id="siteUrl"
            type="url"
            placeholder="https://example.com"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.siteUrl && (
            <p className="mt-1 text-sm text-red-600">
              {errors.siteUrl.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Short Description About Your Business
          </label>
          <textarea
            {...register("description")}
            id="description"
            rows={3}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SiteDetails;
