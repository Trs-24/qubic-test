import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      tableBackground: string;
      text: string;
      textSecondary: string;
      border: string;
      highlight: string;
    };
    sizes: {
      0: string;
      2: string;
      4: string;
      8: string;
      10: string;
      12: string;
      14: string;
      16: string;
      20: string;
      22: string;
      24: string;
      32: string;
      40: string;
      48: string;
      50: string;
      56: string;
      60: string;
      64: string;
      72: string;
      80: string;
      96: string;
      128: string;
      160: string;
      192: string;
      280: string;
      320: string;
      340: string;
      400: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      xxxxl: string;
      xxxxxl: string;
    };
  }
}
