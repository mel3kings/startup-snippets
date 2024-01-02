# Simple React Datepicker

- Out of the box date picker
- using package: react-datepicker

## Prerequisites

- add necessary imports and default styling

```JS
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
```

- Create default state:

```JS
const [expenseDate, setExpenseDate] = useState(new Date());
```

## Code

```JS
            <div className="form-group mb-6">
              <label htmlFor="type" className="form-label inline-block mb-2 text-gray-700">
                {category} Date
              </label>
              <br />
              <DatePicker
                dateFormat="MMM dd, yyyy"
                className="pl-4 text-gray-500 border-solid border-2 border-gray-200 rounded-lg p-2"
                selected={expenseDate}
                onChange={setExpenseDate}
                popperPlacement="bottom-end"
              />
            </div>
```
