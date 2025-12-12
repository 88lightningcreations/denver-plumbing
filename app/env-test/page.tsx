import React from 'react';

const EnvTestPage = () => {
  return (
    <div>
      <h1>Environment Variables</h1>
      <p>Supabase URL: {process.env.NEXT_PUBLIC_SUPABASE_URL}</p>
      <p>Supabase Anon Key: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}</p>
    </div>
  );
};

export default EnvTestPage;
