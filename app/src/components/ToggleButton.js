import React from 'react';
import { ToggleButton } from '@material-ui/lab';
import { ToggleButtonGroup } from '@material-ui/lab';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');


  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" sex="male" aria-label="left aligned">
        Male
      </ToggleButton>
      <ToggleButton value="right" sex="female" aria-label="right aligned">
        Female
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
