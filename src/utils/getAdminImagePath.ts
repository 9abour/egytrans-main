import { Image } from '@/types/common.types';

export const getAdminImagePath = (
  image?: Image,
  size?: 'small' | 'large' | 'medium' | 'thumbnail'
) => {
  if (!image) {
    return '';
  }

  let url = image.url;

  switch (size) {
    case 'small':
      url = image.formats.small.url;
      break;
    case 'medium':
      url = image.formats.medium.url;
      break;
    case 'thumbnail':
      url = image.formats.thumbnail.url;
      break;
    case 'large':
      url = image.formats.large.url;
      break;
  }

  return process.env.NEXT_PUBLIC_API_URL + url;
};

export default getAdminImagePath;
