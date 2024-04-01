"use client"

import React from "react"
import TokenCard from "~/app/(prices)/_components/top-movers/TokenCard"
import { useGetCoins } from "~/services/api/common/hooks"
import { coins } from "~/utils/mock"
import shuffleArray from "lodash.shuffle"
import Slider from "react-slick"

function TopMovers() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  }

  // const {
  //   data: topGrowth,
  //   isLoading: topGrowthLoading,
  //   isError: topGrowthError,
  // } = useGetCoins({
  //   timePeriod: "24h",
  //   limit: 8,
  //   orderBy: "change",
  // })

  // const {
  //   data: topReversion,
  //   isLoading: topReversionLoading,
  //   isError: topReversionError,
  // } = useGetCoins({
  //   timePeriod: "24h",
  //   limit: 8,
  //   orderBy: "change",
  //   orderDirection: "asc",
  // })

  // if (topGrowthLoading || topReversionLoading) return <p>Loading...</p>
  // if (topGrowthError || topReversionError) return <p>An error occurred!</p>
  //
  // const topMovers = shuffleArray([
  //   ...topGrowth!.data.data.coins,
  //   ...topReversion!.data.data.coins,
  // ])

  const topMovers = coins

  return (
    <div className="top-movers mt-14">
      <h2 className="text-heading capitalize">top movers</h2>
      <div className="mt-5">
        <Slider {...settings}>
          {topMovers.map((token) => (
            <TokenCard token={token} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TopMovers
