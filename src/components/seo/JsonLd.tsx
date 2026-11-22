import React from 'react';

export const JsonLd: React.FC<{ data: Record<string, unknown> | Array<Record<string, unknown> | null> | null }> = ({
  data,
}) => {
  if (!data) return null;
  const filtered = Array.isArray(data) ? data.filter(Boolean) : data;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(filtered).replace(/</g, '\\u003c'),
      }}
    />
  );
};
