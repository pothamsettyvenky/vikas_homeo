import { GoogleGenerativeAI } from "@google/generative-ai";

async function test() {

  try {

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const result = await model.generateContent("Say hello");

    const text = result.response.text();

    console.log("API WORKING ✅");
    console.log(text);

  } catch (error) {

    console.log("API FAILED ❌");
    console.log(error);

  }

}

test();