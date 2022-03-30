import Iframe from "react-iframe";

export const YoutubeVideo = ({ embed }) => {
  return (
    <>
      <Iframe
        url={`https://www.youtube.com/embed/${embed}`}
        width="560"
        height="315"
        id="myId"
        className="video"
        display="initial"
        position="relative"
      />
    </>
  );
};
