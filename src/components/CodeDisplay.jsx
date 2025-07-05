import { Clipboard, Check } from "lucide-react";
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Import languages you need (add more as needed)
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";

const CodeDisplay = ({ code, language = "javascript" }) => {
  const [copied, setCopied] = useState(false);

  // Initialize Prism highlighting
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 h-[70vh] relative text-white rounded-xl overflow-auto shadow-lg">
   
      {/* Sticky header with copy button */}
      <div className="sticky top-0 left-0  right-0 bg-gray-800/80 backdrop-blur-sm z-10 p-2 flex justify-between items-center border-b border-gray-700">
        <span className="text-xs font-mono text-gray-400 uppercase">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="p-2 rounded hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
          aria-label="Copy code"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Clipboard className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Code content with Prism highlighting */}
      <pre className="!m-0 !p-4 !bg-transparent !overflow-auto h-full">
        <code className={`language-${language} whitespace-pre-wrap`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeDisplay;