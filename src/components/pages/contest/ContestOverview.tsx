import { awardData, contestFormatData, contestTheme, timelineData } from "@/src/constants/ContestOverviewTabItems";
import ContestAwardCard from "../../common/ContestAwardCard";
import { Button } from "../../ui/button";
import { ChevronsRight } from "lucide-react";
import { OverviewHeader } from "../../common/ContestOverviewHeader";

const ContestOverview = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* Contest timeline */}
      <div>
        <OverviewHeader title={'Timeline'} />
        <div className="mt-6">
          <p className="text-sm sm:text-lg text-[#FFFAFA] text-center max-w-[35rem] mx-auto sm:leading-7 mt-4">
            Get ready to shine! <br /> ReelShort calls on all passionate storytellers to join the ultimate short drama contest of the year. <br /> Whether it's a heartwarming romance, a thrilling mystery, a creative fan adaptation, or your very own original creation – this is your moment to make an unforgettable mark!
          </p>

          <div className="max-w-[80%] border-b-2 border-b-white/80 mx-auto flex justify-between item-center mt-10 mb-6 *:bg-white *:rounded-full *:size-4 *:relative *:top-2">
            <div></div><div></div><div></div><div></div>
          </div>

          <div className="flex justify-between">
            {timelineData.map((item, i) => (
              <div key={i} className="text-center w-[200px] flex flex-col justify-between">
                <h2 className="text-sm sm:text-lg font-semibold text-[#FFFAFA] mb-2">{item.title}</h2>
                <div>
                  <p className="text-[#B3B1B0] text-xs">{item.date}</p>
                  <p className="text-[#B3B1B0] text-xs">{item.timezone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contest awards */}
      <div className="space-y-6">
        <OverviewHeader title={'Awards'} />
        <div className="flex flex-wrap justify-center gap-4">
          {awardData.map((award, index) => (
            <ContestAwardCard key={index} img={award.img} title={award.title} />
          ))}
        </div>
      </div>

      {/* Contest awards */}
      <div className="space-y-6">
        <OverviewHeader title={'Main Theme'} />
        <div className="flex flex-wrap justify-center gap-4">
          {contestTheme.map((award, index) => (
            <ContestAwardCard key={index} img={award.img} title={award.title} />
          ))}
        </div>
      </div>

      {/* Contest awards */}
      <div>
        <OverviewHeader title={'Get Started'} />
        <div className="space-y-6 max-w-[34rem] mx-auto mt-10">
          <div className="flex justify-center gap-4 text-[#FFFAFA]">
            <h2 className="font-black italic text-2xl">01</h2>
            <p className="text-base">Upload Your Episodes Submit all episodes in MP4 or MOV format (minimum resolution: 540p). Each episode must be at least 45 seconds long.</p>
          </div>
          <div className="flex justify-center gap-4 text-[#FFFAFA]">
            <h2 className="font-black italic text-2xl">02</h2>
            <p>Add Cover & Title Provide a cover image and a concise title for your entry..</p>
          </div>
          <div className="flex justify-center gap-4 text-[#FFFAFA]">
            <h2 className="font-black italic text-2xl">03</h2>
            <p>Select a Theme Choose from: Romance, Suspense, ReelShort Fan Adaptation, or Beyond Genres.</p>
          </div>
        </div>

        {/* Contest Rules */}
        <div className="text-[#FFFAFA] p-3 sm:p-6 rounded-xl border border-[#595756] mt-10 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-center sm:text-start">Rules</h2>
          <div className="space-y-4 px-2">
            <div className="flex gap-3 border-b border-black pb-6">
              <h3 className="text-lg font-bold">01</h3>
              <p>All submissions must be 100% original. Unlicensed edits, mashups, or copied content are not allowed</p>
            </div>
            <div className="flex gap-3 border-b border-black pb-6">
              <h3 className="text-lg font-bold">02</h3>
              <p>The following are <span className="text-primary-rose font-bold">strictly prohibited:</span> explicit sexual content or nudity; graphic violence, blood, or self-harm; promotion of illegal drugs, weapons, or any unlawful behavior</p>
            </div>
            <div className="flex gap-3 border-b border-black pb-6">
              <h3 className="text-lg font-bold">03</h3>
              <p>All entries must be <span className="font-bold">vertical</span> videos (<span className="font-bold">9:16</span> aspect ratio) and between 45-90 seconds long. <br />Adding <span className="font-bold">subtitles</span> is highly encouraged!</p>
            </div>
            <div className="flex gap-3">
              <h3 className="text-lg font-semibold">04</h3>
              <p>You may upload between <span className="font-bold">1 to 100 episodes</span> per entry. Submitting 10 or more episodes makes you eligible for the <span className="font-bold">Best Series Award</span>. More episodes = more chances to stand out!</p>
            </div>
          </div>
        </div>

        {/* Video Format */}
        <div className="text-[#FFFAFA] p-3 sm:p-6 rounded-xl border border-[#595756]">
          <h2 className="text-2xl font-bold mb-6 text-center sm:text-start">Format</h2>
          <div className="space-y-4">
            {contestFormatData.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center ${index === contestFormatData.length - 1 ? '' : 'border-b border-black pb-6'}`}
              >
                <h3>{item.label}</h3>
                <p className="font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enter the contest button  */}
      <div className="flex justify-center">
        <Button variant="danger" size="lg" className="rounded-xl">
          <span>Enter the Contest</span>
          <ChevronsRight className="size-5" />
        </Button>
      </div>
    </div>
  );
};

export default ContestOverview;
