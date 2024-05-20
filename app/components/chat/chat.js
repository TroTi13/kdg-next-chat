'use client'

import { useState } from "react";
import Loader from "../loader/loader";
import Result from "../result/result";

export default function Chat() {

  const [ result, setResult ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const prompt = form.prompt;
    const value = prompt.value;

    const data = {
      "model": "llama3",
      "prompt": value,
      "stream": false,
    }

    console.log('prompt value', value, JSON.stringify(data));

    setLoading(true);
    setResult('');

    fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => response.json()).then(data => {
      console.log('response', data);
      setResult(data.response);
      setLoading(false);
    });

  }

  return (
    <div className="container-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="prompt" className="form-label">Example textarea</label>
          <textarea className="form-control" id="prompt" rows="3" name="prompt"></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary">Versturen</button>
      </form>

      <Loader loading={loading} />

      <Result content={result} />
    </div>
  );
}