import { useState, useEffect } from 'react';
import {SpeechClient} from '@google-cloud/speech'
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Thông tin xác thực tài khoản Google Cloud
const projectId = 'YOUR_PROJECT_ID';
const keyFilename = './path/to/keyfile.json';

// Tạo một client để gọi API

const speechClient = new SpeechClient({
  projectId,
  keyFilename,
});

function SpeechToText() {
  const [transcription, setTranscription] = useState('');

  useEffect(() => {
    // Khởi tạo SpeechRecognition API
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    // Gọi Google Cloud Speech-to-Text API để chuyển đổi giọng nói thành văn bản
    recognition.addEventListener('result', async (event:any) => {
      const audio = event.results[0][0].transcript;
      const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
      };
      const audioBytes = audio.length * 2;
      const request = {
        audio: { content: audio },

      };
      const [response] = await speechClient.recognize(request);
      if(!response.results){
        return;
      }
      const transcription = response.results
        .map((result:any) => result.alternatives[0].transcript)
        .join('\n');
      setTranscription(transcription);
    });
  }, []);

  const handleStart = () => {
    recognition.start();
  };

  return (
    <div>
      <input type="text" value={transcription} readOnly />
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default SpeechToText;
