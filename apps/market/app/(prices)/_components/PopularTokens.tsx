"use client"

import Image from "next/image"
import Link from "next/link"
import Error from "~/components/common/Error"
import Loading from "~/components/common/Loading"
import { useGetCoins } from "~/services/api/common/hooks"
import Slider from "react-slick"

function PopularTokens() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  const {
    data: popularTokens,
    isLoading,
    isError,
  } = useGetCoins({
    timePeriod: "1h",
    orderBy: "change",
    limit: 14,
  })

  if (isLoading)
    return (
      <div className="h-[150px]">
        <Loading />
      </div>
    )
  if (isError)
    return (
      <div className="h-[150px]">
        <Error errorMessage="Error while loading popular coins." />
      </div>
    )

  return (
    <div className="px-5">
      <h2 className="text-heading capitalize">what others are trading</h2>
      <div className="mt-5">
        <Slider {...settings}>
          {popularTokens?.data.data.coins.map((token) => (
            <div key={token.uuid} className="bg-twc_accent py-2">
              <Link href={`/coin/${token.uuid}`}>
                <div className="border-r-1 border-r-twc_border flex items-center justify-center gap-3 px-2">
                  <Image
                    width={24}
                    height={24}
                    className="size-6"
                    src={token.iconUrl}
                    alt={token.symbol}
                  />
                  <p className="truncate">{token.name}</p>
                  <p className="text-twc_muted">{token.symbol}</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PopularTokens
