import sanityImage from "@sanity/image-url";
import client from "./sanityClient";

const imageBuilder = sanityImage(client);

export const getImageUrl = (asset, width = 600, quality = 85, fit = "max") => {
  const image = imageBuilder.image(asset);
  return image.quality(quality).width(width).fit(fit).auto("format").url();
};

export async function getCollagePage() {
  return await client.fetch(`*[_type == "collage"] {
      title,
      "assets": assets[] {
        "type": _type,
        alt,
        caption,
        asset,
        "url": asset -> url,
        poster
      }
    }|[0]`);
}
