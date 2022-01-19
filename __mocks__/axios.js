export default {
  get: jest.fn().mockResolvedValue(mockResoponse),
};

const mockResoponse = {
  data: [
    {
      id: 1,
      name: "Boss It",
      url: "https://images.blinkist.io/images/books/6155c3ed6cee070008752e82/1_1/470.jpg",
      author: "Carl Reader",
      duration: "13-minutes read",
      category: "entrepreneurship",
    },
  ],
};
const mockResoponse1 = {
  data: [
    {
      id: 1,
      name: "Boss It",
      url: "https://images.blinkist.io/images/books/6155c3ed6cee070008752e82/1_1/470.jpg",
      author: "Carl Reader",
      duration: "13-minutes read",
      category: "entrepreneurship",
      isFinished: true,
    },
  ],
};
