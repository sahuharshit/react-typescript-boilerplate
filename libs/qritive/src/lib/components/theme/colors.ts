// have all the enumerations of Color into EColor
export enum EColor {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
    neutral = "neutral",
  }
  
  const primaryColors = {
    main: "#0E5AA7",
    L15: "#690DD4",
    L35: "#8156D0",
    L55: "#9F77EA",
    L75: "#B492F3",
    L95: "#E1D1FF",
    D15: "#41168E",
    D35: "#331667",
    D55: "#210D45",
    D75: "#170831",
    D95: "#0A0316",
  
  };
  const neutralColors = {
    main: "#E6E6E6",
    L15: "#EAEAEA",
    L35: "#EFEFEF",
    L55: "#F4F4F4",
    L75: "#F9F9F9",
    L95: "#FFFFFF",
    D15: "#C3C3C3",
    D35: "#969696",
    D55: "#686868",
    D75: "#393939",
    D95: "#0C0C0C",
  };
  const secondaryColors = {
    main: "#009688",
    L15: "#26A599",
    L35: "#59BAB1",
    L55: "#8CCFC9",
    L75: "#BFE4E1",
    L95: "#E6F4F2",
    D15: "#007F73",
    D35: "#006158",
    D55: "#00433D",
    D75: "#002522",
    D95: "#000706",
  };
  const tertiaryColors = {
    main: "#F34041",
    L15: "#F45C5D",
    L35: "#F78283",
    L55: "#F9A8A9",
    L75: "#FBCFCF",
    L95: "#FEF5F5",
    D15: "#CE3637",
    D35: "#9E292A",
    D55: "#6D1C1D",
    D75: "#3C1010",
    D95: "#0C0303",
  };
  
  /**
   * @todo For some weird reason using the Enum property inside of
   * the interface is not detected by VScode hence hard coding it
   * for now. Pls revisit for any changes required.
   */
  export interface IColor {
    primary: typeof primaryColors;
    secondary: typeof secondaryColors;
    tertiary: typeof tertiaryColors;
    neutral: typeof neutralColors;
  }
  
  const color: IColor = {
    [EColor.primary]: primaryColors,
    [EColor.neutral]: neutralColors,
    [EColor.secondary]: secondaryColors,
    [EColor.tertiary]: tertiaryColors,
  };
  
  export { color };