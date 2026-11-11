/** The first line every agent-authored GitHub message must carry. */
export const DISCLOSURE = 'This is by an automated agent, not a human.'

/**
 * Prefixes the disclosure line unless the text already begins with it, so a delivery reply that already carries the line
 * is not doubled. Whitespace-only text becomes the line alone.
 */
export function withDisclosure(text: string): string {
  if (text.trimStart().startsWith(DISCLOSURE)) return text
  return text.trim() ? `${DISCLOSURE}\n\n${text}` : DISCLOSURE
}
