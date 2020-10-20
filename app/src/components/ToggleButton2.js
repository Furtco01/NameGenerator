import React from 'react';
import { ToggleButton } from '@material-ui/lab';
import { ToggleButtonGroup } from '@material-ui/lab';

export default function NameToggle() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    props.onClick();
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
