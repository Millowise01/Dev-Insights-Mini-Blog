export function getPreview(content: string, wordCount = 12): string {
  const words = content.trim().split(/\s+/);
  return words.length > wordCount
    ? words.slice(0, wordCount).join(" ") + "…"
    : content;
}

export function isNew(datePosted: string): boolean {
  const postedTime = new Date(datePosted).getTime();
  const hoursSince = (Date.now() - postedTime) / (1000 * 60 * 60);
  return hoursSince >= 0 && hoursSince <= 24;
}