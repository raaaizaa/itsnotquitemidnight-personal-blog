'use client';

import Clarity from '@microsoft/clarity';

export default function ClarityProvider() {
  Clarity.init(process.env.NEXT_PUBLIC_MICROSOFT_CLARITY!);
  return <></>;
}
