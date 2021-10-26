export type variables = {
  Tmap: TJMap.Tmap | null;
  [propName: string]: any;
};

const globles: variables = {
  Tmap: null,
  req: process.env.VUE_APP_BASE_API,
};

for (const key in globles) {
  (window as any)[key] = globles[key];
}
