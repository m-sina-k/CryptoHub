"use client"

import React from "react"
import TokenCard from "~/app/(prices)/_components/top-movers/TokenCard"
import CustomTooltip from "~/components/common/CustomTooltip"
import { coins } from "~/utils/mock"
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
    <div className="top-movers mt-14 px-5">
      <div className="item-center flex gap-2">
        <h2 className="text-heading capitalize">top movers</h2>
        <CustomTooltip
          text={
            "Top movers are the tokens with the largest price movements (increases and decreases) over the past 24 hour"
          }
          side={"right"}
        />
      </div>
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
