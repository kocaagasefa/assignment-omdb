import { InputGroup, FormControl } from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";

const CustomInput = (props) => (
  <InputGroup className="mb-3">
    <FormControl {...props} placeholder="Type to search..." />
  </InputGroup>
);

const SearchBar = ({ onChange, value, debounceTimeout = 300 }) => (
  <DebounceInput
    onChange={(e) => onChange(e.target.value)}
    value={value}
    debounceTimeout={debounceTimeout}
    element={CustomInput}
  />
);
export default SearchBar;
