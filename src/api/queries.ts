export async function getDictionaryTerm(searchTerm: string | undefined) {
  try {
    if (searchTerm) {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
      localStorage.setItem("previousSearch", searchTerm);
      return res.json();
    }
  } catch (e) {
    console.log("Error has occured while fetching: ", e);
  }
}

