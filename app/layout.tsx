import "./globals.css";
import { Header } from "../components/layout";
import * as fs from 'fs'
import path from 'path'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  function getServerSideProps() {
    const pagesDirectory = path.join(process.cwd(), 'app\\(pages)\\')
    const names = fs.readdirSync(pagesDirectory);
    return names;
}

  return (
    <html lang="en">
      <body>
        <>
          <Header routes={getServerSideProps()}/>
          {children}
        </>
      </body>
    </html>
  );
}
