import React from "react";
import classes from "./DowloadButton.module.scss";
import { DownloadSvg } from "../../../assets/svg";

interface DownloadButtonProps {
  url: string;
  text: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ url, text }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className={classes.dowloadButton} onClick={handleDownload}>
      <DownloadSvg />
      {text}
    </button>
  );
};

export default DownloadButton;
