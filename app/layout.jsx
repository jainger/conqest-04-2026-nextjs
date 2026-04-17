import './globals.css';

export const metadata = {
  title: 'Jailbreak the Agent — Qest Insurance CTF',
  description: 'Extract the secret code. Fewest prompts wins.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
