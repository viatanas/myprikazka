import "./globals.css";

export const metadata = {
  title: "MyPrikazka - Персонализирани детски книжки",
  description:
    "Детска книжка, в която лицето на твоето дете е героят. Персонализирана история на български за деца 3–7 г.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body className="antialiased">{children}</body>
    </html>
  );
}
