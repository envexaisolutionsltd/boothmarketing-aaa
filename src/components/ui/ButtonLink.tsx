import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type Props = { to: string; children: React.ReactNode; secondary?: boolean }

export function ButtonLink({ to, children, secondary }: Props) {
  return <Link to={to} className={secondary ? 'btn-secondary' : 'btn-primary'}>{children}<ArrowRight size={16} strokeWidth={1.8} /></Link>
}
