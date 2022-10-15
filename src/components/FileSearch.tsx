import React, { useState } from "react";
import { Input } from "antd";
import { async } from "q";
const { Search } = Input;

const FileSearch = ({
  onFileSearch,
}: {
  onFileSearch: (val: string) => void | Promise<void>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Search
        placeholder="input search text"
        size="middle"
        loading={isLoading}
        onSearch={async (val) => {
          try {
            setIsLoading(true);
            await onFileSearch(val);
          } catch (error) {
          } finally {
            setIsLoading(false);
          }
        }}
      />
    </div>
  );
};

export default FileSearch;
