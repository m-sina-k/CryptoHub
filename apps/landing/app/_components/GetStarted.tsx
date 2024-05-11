import React from "react"
import Link from "next/link"
import { Button } from "@ui/components"

function GetStarted() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <p className="text-twc_secondary text-sm">ACCEPT AND BILL CRYPTO</p>
      <h1 className="text-twc_primary mb-5 mt-2 max-w-[750px] text-center text-[35px] font-bold leading-none md:text-[50px]">
        Pay in the most popular crypto currencies
      </h1>
      <p className="text-twc_muted max-w-[400px] text-center">
        Send invoices, collect payment, convert payouts to fiat currency, or
        keep the cryptocurrency.
      </p>
      <Button variant="rounded" className="mt-7">
        <Link href="/">Get started</Link>
      </Button>
    </div>
  )
}

export default GetStarted
