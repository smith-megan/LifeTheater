import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/Brochure")({
  component: Brochure,
})

function Brochure() {
  return <div className="p-2">Download our brochure!</div>
}
