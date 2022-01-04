import React, {memo} from 'react';
import PropTypes from 'prop-types';

const SearchResults = (props) => {
  const {searchLocations, data} = props;
  return (
    <div className='mt-3 pb-3 bg-white'>
      {
        data.map(
          (searchResult, index) => 
            <button 
              type='button' 
              onClick={() => searchLocations(searchResult.name)} city={searchResult.name}
              key={index}
              className="text-white rounded-full px-2 py-1 bg-gradient-to-l from-purple-500 to-orange-500 m-1">
              {searchResult.name}
            </button>
        )
      }
    </div>
  )
}

SearchResults.propTypes = {
  searchLocations: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
}

SearchResults.displayName = 'SearchResults';


export default memo(SearchResults);
