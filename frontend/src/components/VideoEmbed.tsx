import { Card, CardBody} from "@nextui-org/react";

type VideoEmbedProps = {
  videoId: string;
};

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId }) => {
  return (
    <Card className="bg-orange-500/75">
      <CardBody>
        <iframe
          width="600"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </CardBody>
    </Card>
  );
};

export default VideoEmbed;
