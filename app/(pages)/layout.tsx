import "../globals.css";
import { Header } from "../../components/layout";

export const metadata = {
  title: "Programa Contábil",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  );
}
