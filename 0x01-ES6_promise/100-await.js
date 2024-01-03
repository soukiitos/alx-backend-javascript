import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let i = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    i = { photo, user };
  } catch (error) {
    i = { photo: null, user: null };
  }
  return i;
}
