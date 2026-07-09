// AUTOMATIKUSAN GENERÁLT — ne szerkeszd kézzel.
// Frissítés: node scripts/atalakulasok.mjs
// (A projekt-címeket a scripts/atalakulasok.mjs META blokkjában állítsd.)

export type TrImage = { src: string; w: number; h: number };
export type TrProject = {
  slug: string;
  title: string;
  location: string;
  before: TrImage[];
  after: TrImage[];
};

export const projects: TrProject[] = [
  {
    "slug": "projekt-1",
    "title": "Családi ház — teljes felújítás",
    "location": "2024",
    "before": [
      {
        "src": "/atalakulasok/projekt-1/elotte/01.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/atalakulasok/projekt-1/elotte/02.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/atalakulasok/projekt-1/elotte/03.webp",
        "w": 1600,
        "h": 1200
      }
    ],
    "after": [
      {
        "src": "/atalakulasok/projekt-1/utana/01.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/atalakulasok/projekt-1/utana/02.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/atalakulasok/projekt-1/utana/03.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/atalakulasok/projekt-1/utana/04.webp",
        "w": 1600,
        "h": 1200
      },
      {
        "src": "/atalakulasok/projekt-1/utana/05.webp",
        "w": 1600,
        "h": 1200
      }
    ]
  },
  {
    "slug": "projekt-2",
    "title": "Lakásfelújítás",
    "location": "2023",
    "before": [
      {
        "src": "/atalakulasok/projekt-2/elotte/01.webp",
        "w": 1200,
        "h": 1600
      },
      {
        "src": "/atalakulasok/projekt-2/elotte/02.webp",
        "w": 1200,
        "h": 1600
      },
      {
        "src": "/atalakulasok/projekt-2/elotte/03.webp",
        "w": 1600,
        "h": 1200
      }
    ],
    "after": [
      {
        "src": "/atalakulasok/projekt-2/utana/01.webp",
        "w": 1600,
        "h": 1200
      }
    ]
  },
  {
    "slug": "projekt-3",
    "title": "Szobafelújítás",
    "location": "2023",
    "before": [
      {
        "src": "/atalakulasok/projekt-3/elotte/01.webp",
        "w": 1200,
        "h": 1600
      },
      {
        "src": "/atalakulasok/projekt-3/elotte/02.webp",
        "w": 1200,
        "h": 1600
      }
    ],
    "after": [
      {
        "src": "/atalakulasok/projekt-3/utana/01.webp",
        "w": 1600,
        "h": 1200
      }
    ]
  }
];
