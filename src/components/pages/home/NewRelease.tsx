import React from "react";
import { StreamingCard } from "../../common/StreamingCard";
import { useLocale } from "@/src/app/LocaleProvider";
import { TLang } from "@/src/types/globals";
import { StreamingData } from "@/src/constants/homePage";

type NewReleaseProps = {
  sectionTitle: string;
  play: string;
};

const NewRelease: React.FC<NewReleaseProps> = ({ sectionTitle, play }) => {
  const { lang } = useLocale() as { lang: TLang };

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-white">{sectionTitle}</h2>
      <div className="my-10 grid items-center justify-between gap-5 xl:grid-cols-3">
        {StreamingData.map((newData, i) => (
          <StreamingCard
            key={i}
            title={newData.title[lang]}
            description={newData.description[lang]}
            genres={newData.genres[lang]}
            type={newData.type[lang]}
            imageUrl="/images/new-release-1.jpg"
            play={play}
          />
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
