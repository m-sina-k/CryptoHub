import Logo from "~/components/common/Logo"

function Footer() {
  return (
    <div className="bg-twc_foreground mt-10 py-5">
      <div className="container">
        <div className="flex">
          <section>
            <Logo />
          </section>
        </div>
        <div className="mt-2">
          <p className="text-twc_muted text-xs">
            Copyright 2024 CryptoHub.com. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
