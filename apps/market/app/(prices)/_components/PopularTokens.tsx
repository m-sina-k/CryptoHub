"use client"

import Image from "next/image"
// import { useGetCoins } from "~/services/api/common/hooks"
import { coins } from "~/utils/mock"
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
  }

  // const {
  //   data: popularTokens,
  //   isLoading,
  //   isError,
  // } = useGetCoins({
  //   timePeriod: "1h",
  //   orderBy: "change",
  //   limit: 14,
  // })

  // if (isLoading) return <p>Loading...</p>
  // if (isError) return <p>an error occurred!</p>

  return (
    <div>
      <h2 className="text-heading capitalize">what others are trading</h2>
      <div className="mt-5">
        <Slider {...settings}>
          {coins.map((token) => (
            <div key={token.uuid} className="bg-twc_accent py-2">
              <div className="border-r-1 border-r-twc_border flex items-center justify-center gap-3 px-2">
                <Image
                  width={24}
                  height={24}
                  src={token.iconUrl}
                  alt={token.symbol}
                />
                <p className="truncate">{token.name}</p>
                <p className="text-twc_muted">{token.symbol}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PopularTokens
