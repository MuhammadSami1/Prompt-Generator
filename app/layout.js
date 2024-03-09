import Nav from "@/Components/Nav"
import "./globals.css";



export const metadata = {
  title: "Prompt Genertor",
  description: "Discover & Share A.I Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}

        </main>
      </body>
    </html>
  );
}
