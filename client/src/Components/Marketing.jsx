import React,{useState} from 'react'
import { Configuration, OpenAIApi } from 'openai'

export default function Marketing() {
  const [transcription, setTranscription] = useState('');
	const [gptRes, setGptRes] = useState('');
	const [userInput, setUserInput] = useState('');

  // const configuration = new Configuration({
	// 	apiKey: process.env.REACT_APP_GPT_API_KEY,
	// });
  return (
    <div>
      
    </div>
  )
}
