import { NEXTJS_CONFIG } from "../_config/talent-data";

export const metadata = NEXTJS_CONFIG.metadata;

export default function Layout({ children }) {
  return children;
}
