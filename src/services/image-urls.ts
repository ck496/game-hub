// Function to build cropped image urls
//      - The Url attribute for games returns full sized images which are not optimized for the small game cards
//      - Since RAWG API supports cropping on the fly, create cropped urls to get smaller images for faster loads
const getCroppedUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const croppedUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return croppedUrl;
};

export default getCroppedUrl;
