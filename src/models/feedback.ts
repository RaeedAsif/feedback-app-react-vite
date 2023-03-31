export interface Feedback {
    id: number;
    type: string;
    feedback: string;
    date: string;
  }

  export interface ListFeedback {
    count: number;
    content: [Feedback]
  }