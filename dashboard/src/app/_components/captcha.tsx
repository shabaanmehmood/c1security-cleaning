
"use client";

import { Turnstile } from "@marsidev/react-turnstile";

interface Props {
  onVerify: (token: string) => void;
}

export default function TurnstileCaptcha({
  onVerify,
}: Props) {
  const siteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return (
      <p className="text-sm text-red-500">
        CAPTCHA site key is missing.
      </p>
    );
  }

  return (
    <Turnstile
      siteKey={siteKey}
      onSuccess={(token) => onVerify(token)}
      onExpire={() => onVerify("")}
      onError={() => onVerify("")}
      options={{
        theme: "light",
        size: "flexible",
      }}
    />
  );
}
