export const activeLink = (path: string, link: string) => {
  return path === link ? 'font-bold': '';
}