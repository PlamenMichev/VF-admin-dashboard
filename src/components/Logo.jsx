import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, BoxProps } from '@mui/material';

export default function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 810 810"
        height="100%"
        version="1.0"
      >
        <defs>
          <clipPath id="a">
            <path d="M 171.90625 171.90625 L 638.40625 171.90625 L 638.40625 638.40625 L 171.90625 638.40625 Z M 171.90625 171.90625" />
          </clipPath>
        </defs>
        <path
          fill="#875A7B"
          d="M 655.714844 810 L 154.285156 810 C 69.214844 810 0 740.785156 0 655.714844 L 0 154.285156 C 0 69.214844 69.214844 0 154.285156 0 L 655.714844 0 C 740.785156 0 810 69.214844 810 154.285156 L 810 655.714844 C 810 740.785156 740.785156 810 655.714844 810 Z M 655.714844 810"
        />
        <g>
          <path
            fill="#FFF"
            d="M 625.828125 374.808594 C 625.816406 374.796875 625.804688 374.789062 625.792969 374.777344 L 435.5 184.488281 C 427.386719 176.375 416.605469 171.90625 405.132812 171.90625 C 393.660156 171.90625 382.878906 176.371094 374.761719 184.484375 L 184.566406 374.675781 C 184.503906 374.742188 184.441406 374.808594 184.375 374.875 C 167.71875 391.625 167.746094 418.808594 184.457031 435.515625 C 192.089844 443.15625 202.175781 447.578125 212.957031 448.042969 C 213.394531 448.085938 213.835938 448.105469 214.277344 448.105469 L 221.863281 448.105469 L 221.863281 588.144531 C 221.863281 615.855469 244.410156 638.40625 272.128906 638.40625 L 346.578125 638.40625 C 354.125 638.40625 360.246094 632.285156 360.246094 624.738281 L 360.246094 514.945312 C 360.246094 502.300781 370.53125 492.015625 383.175781 492.015625 L 427.089844 492.015625 C 439.734375 492.015625 450.019531 502.300781 450.019531 514.945312 L 450.019531 624.738281 C 450.019531 632.285156 456.136719 638.40625 463.6875 638.40625 L 538.136719 638.40625 C 565.855469 638.40625 588.402344 615.855469 588.402344 588.144531 L 588.402344 448.105469 L 595.433594 448.105469 C 606.902344 448.105469 617.6875 443.640625 625.804688 435.523438 C 642.53125 418.785156 642.539062 391.558594 625.828125 374.808594 Z M 625.828125 374.808594"
          />
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}