"use client";
import Image from "next/image";

const VideoPerformanceTable = () => {
  const data = [
    {
      thumbnail: "/images/Poster 4.png",
      title: "Love is Everywhere",
      views: "50k",
      watchtime: "200 hrs",
      avgDuration: "3m 20s",
      position: "01",
    },
    {
      thumbnail: "/images/Poster 4.png",
      title: "Love is Everywhere",
      views: "50k",
      watchtime: "200 hrs",
      avgDuration: "3m 20s",
      position: "227",
    },
    {
      thumbnail: "/images/Poster 4.png",
      title: "Love is Everywhere",
      views: "50k",
      watchtime: "200 hrs",
      avgDuration: "3m 20s",
      position: "40",
    },
  ];

  const tableRowStyle = "p-3 border-r border-[#1C1C1C] text-center";
  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold text-white">Video Performance Breakdown</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg">
          <thead>
            <tr className="bg-primary-rose text-white">
              <th className="p-3 text-left">Thumbnail</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Views</th>
              <th className="p-3 text-left">Watchtime (hrs)</th>
              <th className="p-3 text-left">Avg. Watch Duration</th>
              <th className="p-3 text-left">Position</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-b border-gray-800 text-gray-300 hover:bg-gray-900/40">
                <td className={tableRowStyle}>
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="mx-auto rounded-md"
                  />
                </td>
                <td className={tableRowStyle}>{item.title}</td>
                <td className={tableRowStyle}>{item.views}</td>
                <td className={tableRowStyle}>{item.watchtime}</td>
                <td className={tableRowStyle}>{item.avgDuration}</td>
                <td className={tableRowStyle}>{item.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VideoPerformanceTable;
