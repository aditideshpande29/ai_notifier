const axios = require("axios");

const API_KEY = "AIzaSyC01fuD75BD87-rMzHCcnS-w_Qbn0ZcEvo";

async function test() {
  try {

    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
      {
        contents: [{
          parts: [{ text: "Say hello in one line." }]
        }]
      }
    );

    console.log("✅ API WORKING");
    console.log(res.data);

  } catch (err) {

    console.log("❌ API ERROR");
    console.log(err.response?.data || err.message);

  }
}

test();
