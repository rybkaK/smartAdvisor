interface Settings {
  googleMapsApiKey: string;
}

export const settings = Object.freeze<Settings>({
  googleMapsApiKey: process.env.NEXT_PUBLIC_API_URL || "",
});
