"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";

type Props = {
  appUrl: string;
  iosUrl: string | null;
  androidUrl: string | null;
  shareId: string;
};

export function InviteActions({ appUrl, iosUrl, androidUrl, shareId }: Props) {
  const [copied, setCopied] = useState(false);

  async function copyInvitation() {
    // Copy the invitation's public HTTPS URL, NOT the custom-scheme URL.
    // Preserves the share ID; recipients can reopen it after installing the app.
    try {
      const url = new URL(window.location.href);
      url.search = "";
      url.hash = "";
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
    } catch {
      // Avoid claiming success when clipboard access is denied.
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium text-[#607B3F]">Invitation ready</p>
      <a href={appUrl} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#171812] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#40572A]">
        Open in HERE <ArrowUpRight size={17} />
      </a>
      {(iosUrl || androidUrl) ? (
        <div className="flex flex-col gap-3 sm:flex-row">
          {iosUrl && <a href={iosUrl} rel="noopener noreferrer" className="flex-1 rounded-full border border-[#607B3F]/30 px-4 py-3 text-sm font-medium hover:bg-[#F7F4EE]">Get HERE for iPhone</a>}
          {androidUrl && <a href={androidUrl} rel="noopener noreferrer" className="flex-1 rounded-full border border-[#607B3F]/30 px-4 py-3 text-sm font-medium hover:bg-[#F7F4EE]">Get HERE for Android</a>}
        </div>
      ) : (
        <p className="text-sm text-[#607B3F]">If you're a HERE tester, install the app using your TestFlight invitation. Public store links will appear here when available.</p>
      )}
      <button type="button" onClick={copyInvitation} className="mx-auto inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm text-[#40572A] underline-offset-4 hover:underline">
        {copied ? <Check size={16}/> : <Copy size={16}/>} {copied ? "Link copied" : "Copy invitation link"}
      </button>
      <p className="text-xs leading-5 text-[#607B3F]">If you install HERE after receiving this invitation, return to the original link to see the gathering. Your invitation ID stays the same.</p>
      <span className="sr-only">Invitation identifier: {shareId}</span>
    </div>
  );
}
