import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((i) => (
      i.map((j) => ({
        status: j.status,
        value: j.status === 'full' ? j.value : String(j.reason),
      }))
    ));
}
