"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define color themes
const colorThemes = [
  {
    name: "Ocean",
    colors: {
      primary: "bg-blue-500",
      secondary: "bg-teal-400",
      text: "text-gray-800",
      dark: {
        primary: "bg-blue-700",
        secondary: "bg-teal-600",
        text: "text-gray-200",
      },
    },
  },
  {
    name: "Forest",
    colors: {
      primary: "bg-green-500",
      secondary: "bg-yellow-400",
      text: "text-gray-800",
      dark: {
        primary: "bg-green-700",
        secondary: "bg-yellow-600",
        text: "text-gray-200",
      },
    },
  },
  {
    name: "Sunset",
    colors: {
      primary: "bg-orange-500",
      secondary: "bg-pink-400",
      text: "text-gray-800",
      dark: {
        primary: "bg-orange-700",
        secondary: "bg-pink-600",
        text: "text-gray-200",
      },
    },
  },
];

const testimonialLayouts = ["masonry", "carousel"] as const;

const settingsSchema = z.object({
  colorTheme: z.string(),
  testimonialLayout: z.enum(testimonialLayouts),
  isDarkMode: z.boolean(),
});

type SettingsForm = z.infer<typeof settingsSchema>;

const SettingsPage: React.FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SettingsForm>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      colorTheme: colorThemes[0].name,
      testimonialLayout: "masonry",
      isDarkMode: false,
    },
  });

  const isDarkMode = watch("isDarkMode");

  const onSubmit = (data: SettingsForm) => {
    console.log("Settings:", data);
  };

  return (
    <div className=" min-h-screen">
      <section className="pt-24 px-6 max-w-3xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Color Theme Selection */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Color Theme</h2>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-sm font-medium">Dark Mode:</span>
              <Controller
                name="isDarkMode"
                control={control}
                render={({ field }) => (
                  <button
                    type="button"
                    onClick={() => field.onChange(!field.value)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      field.value ? "bg-indigo-600" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        field.value ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                )}
              />
            </div>
            <Controller
              name="colorTheme"
              control={control}
              render={({ field }) => (
                <div className="grid grid-cols-3 gap-4">
                  {colorThemes.map((theme) => (
                    <button
                      key={theme.name}
                      type="button"
                      onClick={() => field.onChange(theme.name)}
                      className={`p-4 rounded-lg border-2 ${
                        field.value === theme.name
                          ? "border-indigo-500"
                          : "border-transparent"
                      }`}
                    >
                      <div className="flex space-x-2 mb-2">
                        <div
                          className={`w-6 h-6 rounded-full ${
                            isDarkMode
                              ? theme.colors.dark.primary
                              : theme.colors.primary
                          }`}
                        />
                        <div
                          className={`w-6 h-6 rounded-full ${
                            isDarkMode
                              ? theme.colors.dark.secondary
                              : theme.colors.secondary
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          isDarkMode
                            ? theme.colors.dark.text
                            : theme.colors.text
                        }`}
                      >
                        {theme.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            />
          </div>

          {/* Testimonial Layout Selection */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Testimonial Layout</h2>
            <Controller
              name="testimonialLayout"
              control={control}
              render={({ field }) => (
                <div className="grid grid-cols-2 gap-4">
                  {testimonialLayouts.map((layout) => (
                    <button
                      key={layout}
                      type="button"
                      onClick={() => field.onChange(layout)}
                      className={`p-4 rounded-lg border-2 ${
                        field.value === layout
                          ? "border-indigo-500"
                          : "border-gray-200"
                      }`}
                    >
                      <div className="h-24 mb-2 bg-gray-200 rounded flex items-center justify-center">
                        {layout === "masonry" ? (
                          <div className="grid grid-cols-3 gap-1 p-2">
                            {[...Array(6)].map((_, i) => (
                              <div
                                key={i}
                                className="bg-gray-300 h-4 w-full rounded"
                              />
                            ))}
                          </div>
                        ) : (
                          <div className="flex space-x-1">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="bg-gray-300 h-20 w-16 rounded"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="text-sm font-medium capitalize">
                        {layout}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300"
          >
            Save Settings
          </button>
        </form>
      </section>
    </div>
  );
};

export default SettingsPage;
