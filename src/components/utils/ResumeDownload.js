import { CV_URL } from "../../constents";

export const handleDownload = async () => {
  const cvUrl = CV_URL;
  const Name = "Gm_Shuvo";
  try {
    const response = await fetch(cvUrl);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${Name}_cv.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.log("Error in downloading CV:", error);
  }
};
