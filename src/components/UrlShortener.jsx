import React, { useState } from 'react';

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!originalUrl) {
      setError('Please enter a valid URL');
      return;
    }

    if (!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')) {
      setError('Please enter a valid URL with "http://" or "https://"');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer your_token`,
        },
        body: JSON.stringify({
          long_url: originalUrl,
        }),
      });

      const data = await response.json();

      if (data.link) {
        setShortenedUrl(data.link);
      } else {
        setError('Error shortening the URL');
      }
    } catch (err) {
      setError('Error shortening the URL');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Enter URL"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
        </div>
        <button
          disabled={loading}
        >
          {loading ? 'Shortening...' : 'Shorten URL'}
        </button>
      </form>

      {error && <p>{error}</p>}

      {shortenedUrl && (
        <div>
          <h2>Shortened URL:</h2>
          <a
            href={shortenedUrl}
            target="_blank"
          >
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
