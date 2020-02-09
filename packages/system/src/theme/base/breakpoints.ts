type Breakpoints = Array<string> & {
  mobile: string;
  largeMobile: string;
  tablet: string;
  desktop: string;
  largeDesktop: string;
};

export const breakpoints = ['576px', '768px', '992px', '1200px'] as Breakpoints;

/* eslint-disable prefer-destructuring */
breakpoints.mobile = '0px';
breakpoints.largeMobile = breakpoints[0];
breakpoints.tablet = breakpoints[1];
breakpoints.desktop = breakpoints[2];
breakpoints.largeDesktop = breakpoints[3];
/* eslint-enable prefer-destructuring */
