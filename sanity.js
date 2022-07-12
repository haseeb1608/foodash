import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "apiwdy0q",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-07-11"
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);
export default client;