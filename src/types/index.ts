export interface BaseResult {
  aula: string;
  links: string;
}

export interface SearchResult extends BaseResult {
  [key: string]: string;
}

export interface ThemeResult extends BaseResult {
  exercicios: string;
  [key: string]: string;
}

export interface GeminiResponse {
  text: () => string;
}

export interface GeminiResult {
  response: GeminiResponse;
} 