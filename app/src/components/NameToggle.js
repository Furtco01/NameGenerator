import React from 'react';
import { ToggleButton } from '@material-ui/lab';
import { ToggleButtonGroup } from '@material-ui/lab';

//export default function for material ui toggle component
//uses state hooks to declare initial state and set function
//to update the state as the toggle is selected

export default function NameToggle(props) {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    //added condition to check if the incoming newAlignment
    //value is null to prevent the user from unclicking the
    //button, resulting in no value being selected 
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      props.onClick();
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        Long
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        Short
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
