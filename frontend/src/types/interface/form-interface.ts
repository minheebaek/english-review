export interface RegistFormData {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface MyStudyFormData {
  title: string;
  content: string;
  boardImageList: string[];
  tagList: string[];
}
