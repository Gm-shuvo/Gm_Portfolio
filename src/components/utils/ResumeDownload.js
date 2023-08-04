export const handleDownload = async () => {
  const cvUrl =
    "https://res.cloudinary.com/gmshuvo/image/upload/v1691131846/Gm_Shuvo_Resume_tsmthm.pdf";
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
