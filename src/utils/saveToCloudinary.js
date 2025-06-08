import { v2 as cloudinary } from 'cloudinary';
import { getEnvVar } from './getEnvVar.js';

cloudinary.config({
  secure: true,
  cloud_name: getEnvVar('CLOUD_NAME'),
  api_key: getEnvVar('API_KEY'),
  api_secret: getEnvVar('API_SECRET'),
});

export const saveFileToCloudinary = async (file) => {
  const base64String = file.buffer.toString('base64');
  const dataUri = `data:${file.mimetype};base64,${base64String}`;

  const response = await cloudinary.uploader.upload(dataUri, {
    folder: 'avatars',
  });

  return response.secure_url;
};
