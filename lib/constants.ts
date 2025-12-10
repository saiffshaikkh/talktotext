export const plansMap = [
  {
    id: "basic",
    name: "Basic",
    description: "Get started with TalkToText!",
    price: "10",
    items: ["3 Blog Posts", "3 Transcription"],
    paymentLink: "https://buy.stripe.com/test_eVq6oId61e2QgKc3rSgA800",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1SQJyMK0CXF7mINb3jtj14MN"
        : "",
  },
  {
    id: "pro",
    name: "Pro",
    description: "All Blog Posts, let’s go!",
    price: "19.99",
    items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
    paymentLink: "https://buy.stripe.com/test_9B6fZi2rn1g4bpS1jKgA801",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1SQJyMK0CXF7mINbs43y4Yqx"
        : "",
  },
];

export const ORIGIN_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://talktotext.vercel.app";
