import "@/styles/globals.css";
import type { AppPropsWithLayout } from "@/types";
import { Flowbite } from "flowbite-react";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Flowbite theme={{ mode: "dark" }}>
      {getLayout(<Component {...pageProps} />)}
    </Flowbite>
  );
}
