import React from "react";
import { Calendar, User } from "lucide-react";
import CommentSection from "@/src/components/pages/fandom/CommentSection";
import FandomSidebar from "@/src/components/pages/fandom/FandomSidebar";

const FandomDetailsPage = () => {
  return (
    <div>
      <div className="px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="overflow-hidden rounded-lg bg-white shadow-sm">
              {/* Header */}
              <div className="border-b border-gray-200 p-6">
                <div className="mb-3 text-sm font-medium text-red-500">Top Movie Stories</div>
                <h1 className="mb-4 text-3xl leading-tight font-bold text-gray-900 lg:text-4xl">
                  I Must Avenge The Pain I Suffered In My Last Life: Arianna Taylor's Vows In Reborn
                  To Love Mr. Right Movie
                </h1>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>2025-08-15</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>by Madeline Velasquez</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative">
                <img
                  src="/api/placeholder/800/400"
                  alt="Reborn To Love Mr Right Movie"
                  className="h-64 w-full object-cover lg:h-80"
                />
                <div className="bg-opacity-20 absolute inset-0 bg-black"></div>
                <div className="absolute right-4 bottom-4 left-4">
                  <div className="text-4xl font-bold tracking-wider text-white lg:text-6xl">
                    REBORN
                  </div>
                  <div className="text-2xl font-bold text-white lg:text-3xl">TO LOVE</div>
                  <div className="text-2xl font-bold text-yellow-400 italic lg:text-3xl">
                    Mr Right
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6 leading-relaxed text-gray-700">
                    Arianna of{" "}
                    <span className="cursor-pointer text-red-500 underline">
                      Reborn To Love Mr. Right
                    </span>{" "}
                    movie promises I Must Avenge The Pain I Suffered In My Last Life!
                  </p>

                  <p className="mb-6 leading-relaxed text-gray-700">
                    The highly anticipated drama series brings viewers into a world of second
                    chances, revenge, and unexpected romance. Following Arianna Taylor's journey as
                    she navigates her reborn life with the memories and pain of her previous
                    existence, the story explores themes of redemption, justice, and the power of
                    love to heal even the deepest wounds.
                  </p>

                  <p className="mb-6 leading-relaxed text-gray-700">
                    Set against a backdrop of high school drama and complex relationships, "Reborn
                    To Love Mr. Right" showcases how past experiences can shape our present choices.
                    Arianna's determination to right the wrongs of her past life creates compelling
                    storylines filled with emotional depth and surprising twists.
                  </p>

                  <p className="mb-6 leading-relaxed text-gray-700">
                    The movie features exceptional performances from a talented cast, bringing
                    authenticity to each character's journey. From moments of intense drama to
                    heartwarming romantic scenes, the film delivers a complete emotional experience
                    that resonates with audiences seeking both entertainment and meaningful
                    storytelling.
                  </p>

                  <p className="leading-relaxed text-gray-700">
                    As Arianna confronts those who wronged her in the past while discovering new
                    love in the present, viewers are taken on an emotional rollercoaster that
                    explores the complexity of human relationships and the possibility of redemption
                    through love and forgiveness.
                  </p>
                </div>
              </div>
            </article>

            {/* Comments Section */}
            <CommentSection />
          </div>

          {/* Sidebar */}
          <FandomSidebar />
        </div>
      </div>
    </div>
  );
};

export default FandomDetailsPage;
