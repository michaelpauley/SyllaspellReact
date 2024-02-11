const fetchGameData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow or handle as needed
    }
  };
  
  export default fetchGameData;
  