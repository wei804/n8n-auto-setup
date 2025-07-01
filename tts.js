import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';
import * as dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.ELEVENLABS_API_KEY;
const voiceId = '21m00Tcm4TlvDq8ikWAM'; // 預設 Rachel

const text = 很多人明明腦袋很會想，卻總是不擅長實際去做。為什麼？因為想的時候會讓人感覺自己好像很聰明；但做的時候會發現自己其實很平凡。;

const data = {
text,
model_id: 'eleven_monolingual_v1',
voice_settings: {
stability: 0.3,
similarity_boost: 0.8
}
};

const headers = {
'xi-api-key': apiKey,
'Content-Type': 'application/json'
};

const url = https://api.elevenlabs.io/v1/text-to-speech/${voiceId};

async function generateVoice() {
try {
const response = await axios.post(url, data, {
headers,
responseType: 'arraybuffer'
});

fs.writeFileSync('output.mp3', response.data);  
console.log('✅ 語音已儲存為 output.mp3');  
} catch (error) {
console.error('❌ 語音合成失敗：', error.response?.data || error.message);
}
}

generateVoice();
