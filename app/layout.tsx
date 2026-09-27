import "./globals.css"; import type {Metadata} from "next";
export const metadata:Metadata={title:"HomeLedger — Shared Household Finance",description:"A private household expense and budget tracker",viewport:"width=device-width, initial-scale=1, viewport-fit=cover"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
