import './globals.css'

export const metadata = {
  title: 'Día de las Flores Amarillas',
  description: 'Un regalo especial para ti',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}