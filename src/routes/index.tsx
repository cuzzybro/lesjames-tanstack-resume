import { createFileRoute } from '@tanstack/react-router'
import Resume from '../components/Resume'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return <Resume />
}
