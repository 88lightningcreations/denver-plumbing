
/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@supabase/supabase-js"],
  devIndicators: {
    allowedDevOrigins: [
      "https://9000-firebase-denver-plumbing-1764020400034.cluster-hlmk2l2htragyudeyf6f3tzsi6.cloudworkstations.dev",
    ],
  },
};

export default nextConfig;
