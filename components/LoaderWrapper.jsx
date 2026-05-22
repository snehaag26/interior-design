'use client';

import { useState } from 'react';
import Loader from './Loader';

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Loader onComplete={() => setLoading(false)} />
      {!loading && (
        <div className="animate-in fade-in duration-1000">
          {children}
        </div>
      )}
    </>
  );
}
