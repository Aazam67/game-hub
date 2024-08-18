const getCroppedImageUrl = (url: string) => {
  const t = "media/";
  const index = url.indexOf(t) + t.length;
  //   return `${url.slice(0, index)}crop/600/400/${url.slice(index)}`;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCroppedImageUrl;
