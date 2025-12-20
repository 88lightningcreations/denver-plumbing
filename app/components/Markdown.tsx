'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import MarkdownImage from './MarkdownImage.client'; // Import MarkdownImage

// Define the type for the context value
type FirstImageContextType = [boolean, () => void];

// Create the context
const FirstImageContext = createContext<FirstImageContextType>([false, () => {}]);

type MarkdownProps = {
  content: string;
};

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  // Manage the state of whether the first image has been rendered
  const [firstImageRendered, setFirstImageRendered] = useState(false);

  // Memoize the function to mark the first image as rendered
  const markFirstImageRendered = useCallback(() => {
    setFirstImageRendered(true);
  }, []);

  return (
    <FirstImageContext.Provider value={[firstImageRendered, markFirstImageRendered]}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ node, ...props }) => {
            // Access the context to check if this is the first image and mark it
            const [isAlreadyFirstImageRendered, setAsFirstImage] = useContext(FirstImageContext);
            
            const imageUrl = (props.src as string) || '';
            const altText = (props.alt as string) || '';

            // Assign default width/height and allow override from markdown properties
            // Ensure width and height are numbers for the MarkdownImage component
            const width = node?.properties?.width ? Number(node.properties.width) : 600;
            const height = node?.properties?.height ? Number(node.properties.height) : 400;

            const isPriority = !isAlreadyFirstImageRendered; // This image is priority if no image has been marked as first yet

            // If this is the first image to be rendered, mark it in the context
            if (isPriority) {
              setAsFirstImage();
            }

            return (
              <MarkdownImage
                src={imageUrl}
                alt={altText}
                width={width}
                height={height}
                isPriority={isPriority} // Pass the isPriority flag to MarkdownImage
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </FirstImageContext.Provider>
  );
};

export default Markdown;