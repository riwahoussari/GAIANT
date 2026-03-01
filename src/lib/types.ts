export type TJsonContentObj =
  | {
      type: "heading";
      content: string;
    }
  | {
      type: "text";
      content: string[];
    }
  | {
      type: "list";
      content: string[];
    }
  | {
      type: "image";
      content: TImg;
    }
  | {
      type: "table";
      content: {
        cols: number[];
        headCols: number[];
        head: string[];
        rows: string[][];
      };
    };

export type TImg = {
  src: string;
  alt?: string;
  srcset?: string;
};

export type TArticle = {
  id: string;
  title: string;
  overview: string;
  author: string;
  mainImg: TImg;
  date: TDate;
  readTime?: string;
  content: TJsonContentObj[];
  withLogo?: boolean;
};

export type TDate = {
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  day: number;
  year: number;
  string: string;
};
