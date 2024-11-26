import { findDefaultOrFirst } from "../utils/banner.utils";
import type { Gradient, GradientDirection } from "./banner.types";

export const GRADIENTS = [
  { name: "Kumiko", class: "from-teal-400 to-blue-500", default: true },
  { name: "Hyper", class: "from-pink-500 via-red-500 to-yellow-500" },
  { name: "Ocean", class: "from-green-300 via-blue-500 to-purple-600" },
  { name: "Cotton Candy", class: "from-pink-300 via-purple-300 to-indigo-400" },
  { name: "Gotham", class: "from-gray-700 via-gray-900 to-black" },
  { name: "Sunset", class: "from-indigo-200 via-red-200 to-yellow-100" },
  { name: "Mojave", class: "from-yellow-100 via-yellow-300 to-yellow-500" },
  { name: "Rainbow", class: "from-red-400 via-yellow-400 to-green-400" },
  { name: "Forest", class: "from-green-400 via-green-500 to-green-600" },
  { name: "Sky", class: "from-blue-400 via-blue-500 to-blue-600" },
  { name: "Fire", class: "from-red-400 via-red-500 to-red-600" },
  { name: "Earth", class: "from-yellow-400 via-yellow-500 to-yellow-600" },
  { name: "Water", class: "from-blue-400 via-blue-500 to-blue-600" },
  { name: "Metal", class: "from-gray-400 via-gray-500 to-gray-600" },
  { name: "Aurora", class: "from-purple-400 via-purple-500 to-purple-600" },
  { name: "Flamingo", class: "from-pink-400 via-pink-500 to-pink-600" },
  { name: "Beach", class: "from-teal-400 via-teal-500 to-teal-600" },
  { name: "Lemonade", class: "from-yellow-400 via-yellow-500 to-yellow-600" },
  { name: "Lavender", class: "from-indigo-400 via-indigo-500 to-indigo-600" },
  { name: "Rose", class: "from-red-400 via-red-500 to-red-600" },
  { name: "Mint", class: "from-green-400 via-green-500 to-green-600" },
  { name: "Bubblegum", class: "from-pink-400 via-pink-500 to-pink-600" },
  { name: "Lime", class: "from-lime-400 via-lime-500 to-lime-600" },
  { name: "Tangerine", class: "from-orange-400 via-orange-500 to-orange-600" },
  { name: "Sherbet", class: "from-orange-400 via-orange-500 to-yellow-400" },
  { name: "Coral", class: "from-red-400 via-pink-500 to-yellow-400" },
  { name: "Candy Corn", class: "from-yellow-400 via-orange-500 to-red-400" },
] as const;

export const GRADIENT_DIRECTIONS = [
  { name: "Right", value: "bg-gradient-to-r", default: true },
  { name: "Left", value: "bg-gradient-to-l" },
  { name: "Bottom", value: "bg-gradient-to-b" },
  { name: "Top", value: "bg-gradient-to-t" },
  { name: "Bottom Right", value: "bg-gradient-to-br" },
  { name: "Bottom Left", value: "bg-gradient-to-bl" },
  { name: "Top Right", value: "bg-gradient-to-tr" },
  { name: "Top Left", value: "bg-gradient-to-tl" },
] as const;

export const DEFAULT_CONFIG = {
  title: "KumikoJS",
  version: "",
  subtitle: "CQRS x Server Sent Events",
  gradient: findDefaultOrFirst<Gradient>(GRADIENTS),
  direction: findDefaultOrFirst<GradientDirection>(GRADIENT_DIRECTIONS),
} as const;
