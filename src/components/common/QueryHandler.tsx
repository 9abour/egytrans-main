import Loader from '@/components/common/Loader';
import React from 'react';

const QueryHandler = ({
  isLoading,
  isError,
  error,
  children,
}: {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  children: React.ReactNode;
}) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <h2 className="text-xl font-bold text-red-600">Error</h2>
        <p className="text-gray-600">
          {error?.message || 'An error occurred while fetching data.'}
        </p>
      </div>
    );
  }

  return children;
};

export default QueryHandler;
