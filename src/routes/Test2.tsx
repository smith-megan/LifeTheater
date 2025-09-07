import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Test2')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Test2"!</div>
}
