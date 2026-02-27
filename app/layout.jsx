import './globals.css'

export const metadata = {
  title: 'Dundobi - European Doberman Breeding Program',
  description: 'Elite breeding program for European Dobermans in Miami, Florida. Health tested, temperament verified.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
