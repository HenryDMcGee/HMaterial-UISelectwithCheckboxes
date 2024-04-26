import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  selectOptions: {
    "& .MuiListItem-root": {
      borderTop: "1px solid rgb(3,15,252)",
      borderRadius: 8,
    },
    "& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover": {
      backgroundColor: "transparent",
    },
    backgroundColor: "rgb(3,252,244)",
    "& .MuiCheckbox-root": {
      color: "green",
    },
    "& .MuiCheckbox-colorSecondary": {
      "&.Mui-checked": {
        color: "orange",
      },
    },
  },
  nativeSelect: {
    "& .MuiSelect-root": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
      "& option": {
        padding: "10px 4px",
        //backgroundColor: "rgba(0, 0, 0, 0.08) !important",
        "&::before": {
          content: '"\\2610"',
          width: "1.3em",
          textAlign: "center",
          display: "inline-block",
          fontSize: 24,
        },
      },
      "& option:checked": {
        "&::before": {
          content: '"\\2611"',
          fontSize: 24,
        },
      },
    },
  },
}));

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
      width: 240,
    },
  },
};

const names = [
  "Sean Spencer",
  "Burton Guster",
  "Juliet O'Hara",
  "Carlton Lasiter",
  "James Roday",
  "Dule Hill",
];

export default function MultipleSelect() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);
  MenuProps.PaperProps.className = classes.selectOptions; //had to be here to use hook, and menu uses popper

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  return (
    <>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
          <Select
            //className={classes.selectOptions} not here
            multiple
            value={personName}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
      </div>
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <a
          target="_blank"
          href="https://smartdevpreneur.com/how-to-create-a-material-ui-select-component-with-checkboxes/"
        >
          Read here how to add checkboxes to the Select component.
        </a>
      </div>
    </>
  );
}
