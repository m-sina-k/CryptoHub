import React from "react"
import Link from "next/link"
import { Button } from "@ui/components"

function Error({
  errorMessage = "⚠️ An error occurred!",
  showBackToHome = false,
}: {
  errorMessage?: string
  showBackToHome?: boolean
}) {
  return (
    <div className="mx-auto my-0 flex h-full min-w-[270px] max-w-[90%] flex-col items-center justify-center">
      <p className="border-red bg-red/20 min-w-80 rounded-md border-2 px-5 py-2 text-center text-white">
        {errorMessage}
      </p>
      <br />
      {showBackToHome && (
        <Button variant="link">
          <Link href="/">Back to Home</Link>
        </Button>
      )}
    </div>
  )
}

export default Error
