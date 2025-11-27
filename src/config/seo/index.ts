const images = [
  'https://hacknitr.com/logo.png',
  'https://res.cloudinary.com/dscnitrourkela/image/upload/v1752326964/hacknitr/zblorl5fuiaulxica9cu.png',
];
const description =
  'HackNXT 1.0 is a 36-hour offline hackathon happening in January 2026 at SGGS Nanded. With 500+ participants from across Maharashtra and nearby states, HackNXT brings developers, designers, and innovators together to build meaningful projects, compete, and grow.';

const title = { default: 'HackNXT 1.0', template: `%s | HackNXT 1.0` };
const url = 'https://hacknxt.vercel.app/';//changes need 
const metadataBase = new URL(url);

export const metaDataObject = {
  metadataBase: metadataBase,
  title: title,
  openGraph: {
    url: url,
    description: description,
    images: images,
  },
  description: description,
};