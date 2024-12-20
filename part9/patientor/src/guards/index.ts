export function isString (text: unknown): text is string {
  return typeof text === 'string' || text instanceof String;
}

export const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};