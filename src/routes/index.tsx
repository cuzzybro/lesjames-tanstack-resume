import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    throw redirect({ to: '/resume' })
  },
  component: Home,
})

function Home() {
  return null
}
