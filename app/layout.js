import Nav from "@/Components/Nav"

import "./globals.css";
import Provider from "@/Components/Provider";



export const metadata = {
  title: "Prompt Genertor",
  description: "Discover & Share A.I Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}

          </main>
        </Provider>
      </body>
    </html>
  );
}
