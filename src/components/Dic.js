// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Header from "./Header";
// import './Dic.css'

// function Dic() {
//   const [word, setWord] = useState(null);
//   const [error, setError] = useState(null);
//   let { search } = useParams();

//   useEffect(() => {
//     if (!search) {
//       // Handle the case where no search term is provided
//       setError("Please provide a search term.");
//       return;
//     }

//     async function fetchData() {
//       try {
//         const response = await fetch(
//           "https://api.dictionaryapi.dev/api/v2/entries/en/" + search
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setWord(data[0]?.meanings || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("An error occurred while fetching data.");
//       }
//     }
//     fetchData();
//   }, [search]); // Include search in the dependency array

//   return (
//     <div>
//       <Header />
//       <h2>The definition is</h2>
//       {error ? (
//         <p>{error}</p>
//       ) : word ? (
//         word.map((meaning, index) => (
//           <div className="mean-container">
//             <p key={meaning.partOfSpeech + index}>
//               {meaning.partOfSpeech}:{meaning.definitions[0]?.definition}
//             </p>
//           </div>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default Dic;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./Dic.css";

function Dic() {
  const [word, setWord] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  let { search } = useParams();

  useEffect(() => {
    if (search === "") {
      // Handle the case where no search term is provided
      setError("Please provide a search term.");
      setLoading(false); // Set loading to false
      return;
    }

    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.dictionaryapi.dev/api/v2/entries/en/" + search
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWord(data[0]?.meanings || []);
        setError(null); // Clear error on success
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Vocabulary not find.");
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    }
    fetchData();
  }, [search]); // Include search in the dependency array

  return (
    <div>
      <Header />
      <h2>The definition:</h2>
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>Loading...</p> // Show loading indicator
      ) : (
        word.map((meaning) => (
          <div className="mean-container" key={meaning.partOfSpeech}>
            <p style={{ color: "rgb(6, 6, 134)", fontWeight: "bold" }}>
              {meaning.partOfSpeech}:
            </p>
            <p>{meaning.definitions[0]?.definition}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dic;
