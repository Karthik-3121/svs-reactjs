import axios from 'axios';

export const ScopusSearch = async (term) => {
  const { data } = await axios.get(
    //Scopus API
    '',
    {
      params: {
        // key: ,
        q: term,
      },
    }
  );
  //Temporary redirect to scopus url...
  window.location.href("")
  return data;
};
