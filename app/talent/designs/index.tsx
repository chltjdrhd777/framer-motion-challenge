import * as React from "react";

export interface ComponentInfo {
  name: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  from?: {
    creator: string;
    link: string;
  };
}

export type CollectionsTypes = Array<
  "general" | "animations-dev" | "50-day-challenge"
>;

export interface IndexData {
  general: ComponentInfo[];
  "animations-dev": ComponentInfo[];
  "50-day-challenge": ComponentInfo[];
}

export const NewIndex: IndexData = {
  general: [
    {
      name: "blurry-input",
      component: React.lazy(() => import("./blurry-input")),
    },
    {
      name: "sonner",
      component: React.lazy(() => import("./sonner/index")),
    },
    {
      name: "drag-profiles-picture",
      component: React.lazy(() => import("./drag-profiles-picture")),
    },
    {
      name: "expand-profiles-picture",
      component: React.lazy(() => import("./expand-profiles-picture")),
    },
    {
      name: "forms",
      component: React.lazy(() => import("./forms")),
    },
    {
      name: "loading",
      component: React.lazy(() => import("./loading")),
    },
    {
      name: "number-animation",
      component: React.lazy(() => import("./number-animation")),
    },
    {
      name: "blur-text",
      component: React.lazy(() => import("./blur-text")),
    },
    {
      name: "textarea-tagging",
      component: React.lazy(() => import("./textarea-tagging")),
    },
    {
      name: "sub-list-toggle",
      component: React.lazy(() => import("./sub-list-toggle")),
    },
    {
      name: "Theme-Toggle",
      component: React.lazy(() => import("./theme-toggle")),
      from: {
        creator: "Татьяна Крупина",
        link: "https://www.figma.com/community/file/1052592425974607958/toggle-switch-free-can-edit",
      },
    },
  ],
  "animations-dev": [
    {
      name: "form-popover",
      component: React.lazy(() => import("./form-popover")),
    },
    // {
    //   name: "practice",
    //   component: React.lazy(() => import("./practice")),
    // },
  ],
  "50-day-challenge": [
    {
      name: "day-1",
      component: React.lazy(() => import("./50-day-challenge/day-1")),
    },
  ],
};
