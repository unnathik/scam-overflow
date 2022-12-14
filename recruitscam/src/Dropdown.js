import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import "./Dropdown.css";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const Dropdown = ({ placeHolder, options, isSearchable, onChange }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if(inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  const handleInputClick = (e) => {
    setShowMenu(!showMenu);
  }

  const getDisplay = () => {
    if(selectedValue){
      return selectedValue.label;
    }
    return placeHolder;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
    onChange(option);
  };

  const isSelected = (option) => {
    if(!selectedValue) {
      return false;
    }
    return selectedValue.value == option.value;
  }

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }
    return options.filter((option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) === 0);
  };

  return (
    <div className="w-1/3 text-left border border-solid relative rounded">
      <div ref={inputRef} onClick={handleInputClick} className="p-1 pl-2 flex text-center justify-between select-none ">
        <div className="dropdown-selected-value z-999">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="translate-y-1 w-full border border-solid rounded overflow-auto max-h-36 bg-white z-999">
        {isSearchable && (
          <div className="search-box bg-white">
            <input onChange={onSearch} value={searchValue} ref={searchRef}/>
          </div>
        )}
          {getOptions().map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`dropdown-item bg-white ${isSelected(option) && "selected"}`}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;