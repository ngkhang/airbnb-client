import { fileURLToPath } from "url";

import createJITI from "jiti";
import type { NextConfig } from "next";

const jiti = createJITI(fileURLToPath(import.meta.url));

jiti("./src/config/env/server.ts");
jiti("./src/config/env/client.ts");

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

