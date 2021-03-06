export default {
  get: jest.fn().mockResolvedValue(() => Promise.resolve(mockResoponse)),
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
    {
      id: 2,
      name: "Get Different",
      url: "https://images.blinkist.io/images/books/619533446cee070007d48b4d/1_1/470.jpg",
      author: "Mike Maclowicz",
      duration: "13-minutes read",
      category: "entrepreneurship",
    },
    {
      id: 3,
      name: "Zero",
      url: "https://images.blinkist.io/images/books/6183be696cee070007a5cd39/1_1/470.jpg",
      author: "Charles Seife",
      duration: "12-minutes read",
      category: "entrepreneurship",
    },
    {
      id: 4,
      name: "Why StartUp Fails",
      url: "https://images.blinkist.io/images/books/616814026cee0700089d6a92/1_1/470.jpg",
      author: "Tom Esinmann",
      duration: "15-minutes read",
      category: "entrepreneurship",
    },
    {
      id: 5,
      name: "Beyond Entrepreneuship 2.0",
      url: "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
      author: "Jim Collins",
      duration: "15-minutes read",
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
