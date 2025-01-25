import { Card } from "@nextui-org/react";

type VideoEmbedProps = {
  videoId: string;
};

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId }) => {
  return (
    <Card className="bg-orange-500 ">
      <iframe className="w-[100%] p-1 rounded-lg h-3/6 md:h-[300px] md:w-[500px]"
      width={500}
      height={300}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Card>
  );
};

export default VideoEmbed;
