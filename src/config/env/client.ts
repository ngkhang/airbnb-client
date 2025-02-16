/* eslint-disable no-process-env */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const envClient = createEnv({
  client: {
    NEXT_PUBLIC_API_BACKEND: z.string(),
  },
  onValidationError: (error) => {
    // eslint-disable-next-line no-console
    console.error(`❌ Invalid environment variables: ${error[0].path}`);
    process.exit(1);
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {
    NEXT_PUBLIC_API_BACKEND: process.env.NEXT_PUBLIC_API_BACKEND,
  },
});
