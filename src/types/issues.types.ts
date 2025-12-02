export type IssueStatus = {
  name: string;
  slug: string;
}

export interface Issue {
  id: number;
  title: string;
  description: string;
  status: IssueStatus;
  created_at: string;
  updated_at: string;
}

export type ModeType = "create" | "edit";

export interface IssueStatusType {
  id: number;
  name: string;
}

// Issue type from backend
export interface IssueType {
  id: number;
  title: string;
  description: string;
  status_id: number;
  status: IssueStatusType;
  created_at: string;
  updated_at: string;
}


// API response wrapper type
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  result: {
    data: T;
  };
}
