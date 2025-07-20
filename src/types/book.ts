import { READING_STATUS } from "@/constants/readingStatus";

export type BookRecord = {
  // 책 정보
  id: string;
  title: string;
  author: string;
  publisher: string | null;
  publicationDate: string;
  totalPages: number | null;

  // 읽기 상태
  readingStatus: ReadingStatus;
  startDate: string | null;
  endDate: string | null;

  // 리뷰
  recommend: boolean | null;
  rating: number | null; // 0 ~ 5, 0.5 단위
  review: string | null;
  quotes: Quote[];

  isPublic: boolean;

  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type Quote = {
  id: string;
  text: string;
  pageNumber: number | null; // 총 페이지 수보다 작아야 함
};

export type ReadingStatus =
  (typeof READING_STATUS)[keyof typeof READING_STATUS];
