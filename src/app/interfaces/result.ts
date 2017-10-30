export interface ResultInterface {
  visitor: number;
  home: number;
}

export interface ResultSummaryInterface {
  result: ResultInterface;
  status: string;
  comment?: string;
  homeName?: string;
  visitorName?: string;
}
