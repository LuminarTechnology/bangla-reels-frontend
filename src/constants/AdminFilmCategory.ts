export interface CategoryDataI {
  no: string;
  id: string;
  categoryName: string;
  totalMovies: string;
  date: string;
  isActive: boolean;
}

export const CategoryData: CategoryDataI[] = [
  {
    no: "001",
    id: "USR001",
    categoryName: "love",
    totalMovies: "5",
    date: "31/12/2024",
    isActive: true,
  },
  {
    no: "002",
    id: "USR002",
    categoryName: "crime",
    totalMovies: "8",
    date: "15/11/2024",
    isActive: false,
  },
  {
    no: "003",
    id: "USR003",
    categoryName: "drama",
    totalMovies: "3",
    date: "20/10/2024",
    isActive: true,
  },
  {
    no: "004",
    id: "USR004",
    categoryName: "action",
    totalMovies: "6",
    date: "05/09/2024",
    isActive: true,
  },
  {
    no: "005",
    id: "USR005",
    categoryName: "comedy",
    totalMovies: "4",
    date: "10/12/2024",
    isActive: false,
  },
  {
    no: "006",
    id: "USR006",
    categoryName: "thriller",
    totalMovies: "7",
    date: "25/11/2024",
    isActive: true,
  },
  {
    no: "007",
    id: "USR007",
    categoryName: "horror",
    totalMovies: "2",
    date: "30/09/2024",
    isActive: false,
  },
  {
    no: "008",
    id: "USR008",
    categoryName: "romance",
    totalMovies: "9",
    date: "15/12/2024",
    isActive: true,
  },
  {
    no: "009",
    id: "USR009",
    categoryName: "sci-fi",
    totalMovies: "5",
    date: "01/11/2024",
    isActive: true,
  },
  {
    no: "010",
    id: "USR010",
    categoryName: "adventure",
    totalMovies: "6",
    date: "20/12/2024",
    isActive: false,
  },
];