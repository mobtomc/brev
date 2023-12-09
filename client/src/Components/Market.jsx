import React, { useState , useContext } from 'react';
import UserContext from "../context/UserContext";

const Gpt3Demo = () => {
  const [userInput, setUserInput] = useState('');
  const [gptResponse, setGptResponse] = useState('');

  const { business } = useContext(UserContext);

  const handleGenerateText = async () => {
    try {
      const apiKey = process.env.REACT_APP_GPT_API_KEY; 
      const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
      const prompt = `give me strategic marketing techniques for ${business} in bullet points`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt,
          max_tokens: 100,  // Adjust as needed
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch GPT-3 response');
      }

      const data = await response.json();
      setGptResponse(data.choices[0].text);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1 className='text-center text-gradient1 text-3xl sm:text-5xl font-bold mb-4 mt-12'>AI Generated Strategies for your buissness.</h1>
      {/* <div>
        <label>
          User Input:
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </label>
      </div> */}
      <div className='flex justify-center items-center'>
        <button className='rounded-xl inline-flex justify-center items-center w-[80%] sm:w-auto my-6 px-3 py-2 font-semibold text-center text-white bg-blue-700 hover:bg-blue-800 text-sm sm:text-lg' onClick={handleGenerateText}>Magically Generate the marketing strategy for your Business</button>
      </div>
      <div className='flex flex-col py-10 gap-3'>
        <h2 className='text-3xl font-bold text-center'>Generated Text:</h2>
        <p className='text-justify px-6'>{gptResponse}</p>
      </div>
    </div>
  );
};

export default Gpt3Demo;
