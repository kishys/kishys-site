import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Open a same-origin file in a new tab and also trigger a download.
// Opens a blank tab immediately to avoid popup blockers, fetches the resource,
// creates a blob URL, navigates the new tab to it (so it displays) and
// programmatically triggers a download via an anchor with `download`.
export async function openAndDownload(url: string, filename?: string) {
  if (typeof window === "undefined") return;
  const newTab = window.open("", "_blank");
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch file");
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    if (newTab) newTab.location.href = blobUrl;

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = blobUrl;
    a.download = filename || url.split("/").pop() || "download";
    document.body.appendChild(a);
    a.click();
    a.remove();

    // Revoke after a delay to give the browser time to start the download/view.
    setTimeout(() => URL.revokeObjectURL(blobUrl), 60 * 1000);
  } catch (err) {
    // Fallback: close the opened tab (if any) and open the URL normally.
    if (newTab) newTab.close();
    console.error(err);
    window.open(url, "_blank");
  }
}
