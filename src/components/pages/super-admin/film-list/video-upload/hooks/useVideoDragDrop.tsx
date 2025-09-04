import { useState, useCallback } from "react";

interface UseVideoDragDropReturn {
  isDragOver: boolean;
  handleDragOver: (e: React.DragEvent) => void;
  handleDragLeave: (e: React.DragEvent) => void;
  handleDragEnd: (e: React.DragEvent) => void;
}

export function useVideoDragDrop(
  onDrop: (e: React.DragEvent) => void
): UseVideoDragDropReturn {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Only set drag over if we have video files
    const items = Array.from(e.dataTransfer.items);
    const hasVideoFiles = items.some(
      (item) => item.kind === "file" && item.type.startsWith("video/")
    );
    
    if (hasVideoFiles) {
      setIsDragOver(true);
    }
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Only remove drag over if we're leaving the actual drop zone
    // Check if the related target is outside the drop zone
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    
    if (
      x < rect.left ||
      x > rect.right ||
      y < rect.top ||
      y > rect.bottom
    ) {
      setIsDragOver(false);
    }
  }, []);

  const handleDragEnd = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    onDrop(e);
  }, [onDrop]);

  return {
    isDragOver,
    handleDragOver,
    handleDragLeave,
    handleDragEnd,
  };
}