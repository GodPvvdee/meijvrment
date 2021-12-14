import client from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
	return builder.image(source);
};
export const getAllProduct = async () => {
	return await client.fetch(
		`*[_type == 'product' ]{name, bio, "slug": slug.current, 'image': image.asset->url }`
	)
}


// KEY "4512ad5f707e"
// Slug "гоо-сайханы-үйлчилгээ"