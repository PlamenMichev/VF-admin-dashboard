// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Slider, SliderProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function RHFSlider({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Slider {...field} valueLabelDisplay="auto" {...other} />}
    />
  );
}
