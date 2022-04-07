export type NavigationLinksType = {
  icon: any,
  title: string,
  linkTo: string,
}

export type NavBarType = {
  navigationLinks: NavigationLinksType[];
  active: string;
  setActive: any;
}
