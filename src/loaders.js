
import url from "./url";

export const indexLoader = async () => {
  const response = await fetch(url);
  const vocabs = await response.json();
  return vocabs;
};
// Show Loader
export const showLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(url + id)
    const vocab = await response.json()
    return vocab
}

