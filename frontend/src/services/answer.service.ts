import api from "./api";


export const answerService = {

  createAnswer: async (
    data: {
      interview_id: number;
      question_id: number;
      answer_text?: string;
      video_url?: string | null;
    }
  ) => {

    const response = await api.post(
      "/answers",
      data
    );

    return response.data;

  },


  getAnswers: async (
    interviewId: string
  ) => {

    const response = await api.get(
      `/answers/interview/${interviewId}`
    );

    return response.data;

  },

};
