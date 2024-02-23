/* 
  Work Later:
  - Working on Error objects:
      - initiateData.ListKey: ErrorListkey 
      - initiatialData: Error
*/

import { useState, useEffect } from 'react';

interface IInitiateData{
    ListKey: string,
    Message: string
}
type TSearchStatus = "pending"|"running"|"complete"

const SearchComponent = () => {
  const [searchKey, setSearchKey] = useState<string>("")
  const [listKey, setListKey] = useState<string | null>(null)
  const [searchResults, setSearchResults] = useState([])
  const [searchStatus, setSearchStatus] = useState<TSearchStatus>("pending") // 'pending', 'running', 'complete'

  const initiateSearch = async () => {
    try {
      // Step 1: Initiate the search and get the ListKey
      const initiateResponse = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/substructure/smiles/${searchKey}/json`);
      const initiateData:IInitiateData = await initiateResponse.json();

      if (initiateData.ListKey) {
        setListKey(initiateData.ListKey)
        setSearchStatus('running')
      } else {
        console.error('Error initiating search')
      }
    } catch (error) {
      console.error('Error initiating search:', error)
    }
  };

  const checkSearchStatus = async () => {
    try {
      // Step 2: Check the status and retrieve results if the search is complete
      const checkStatusResponse = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/listkey/${listKey}/cids/json`);
      const checkStatusData = await checkStatusResponse.text();

      if (checkStatusData.includes('your search is still running')) {
        // Search is still running, check again later
        setSearchStatus('running');
      } else {
        // Search is complete, retrieve results
        setSearchResults(checkStatusData.split('\n').map(Number).filter(Boolean));
        setSearchStatus('complete');
      }
    } catch (error) {
      console.error('Error checking search status:', error);
    }
  };

  useEffect(() => {
    // Perform the search when the searchKey changes
    if (searchKey.trim() !== '') {
      initiateSearch();
    }
  }, [searchKey]);

  useEffect(() => {
    // Check the search status periodically when the search is running
    if (searchStatus === 'running') {
      const intervalId = setInterval(() => {
        checkSearchStatus();
      }, 5000); // Check every 5 seconds

      return () => clearInterval(intervalId); // Cleanup interval on component unmount or when search is complete
    }
  }, [searchStatus, listKey]);

  return (
    <div>
      <input
        type="text"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        placeholder="Enter SMILES for search"
      />
      <button onClick={() => initiateSearch()}>Search</button>

      {searchStatus === 'running' && <p>Search is still running...</p>}
      {searchStatus === 'complete' && (
        <div>
          <p>Search is complete!</p>
          <p>Results: {searchResults.length} records found.</p>
          <ul>
            {searchResults.map((cid) => (
              <li key={cid}>{cid}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
