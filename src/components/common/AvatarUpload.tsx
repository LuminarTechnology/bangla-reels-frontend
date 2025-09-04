import React, { useRef, useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import { Button } from '@/src/components/ui/button';
import { Loader2, User } from 'lucide-react';
import { useUser } from '@clerk/nextjs';

interface AvatarUploadProps {
  onAvatarChange: (file: File) => void;
  size?: 'sm' | 'md' | 'lg';
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({
  onAvatarChange,
  size = 'lg',
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    if (user?.imageUrl) {
      setPreview(user.imageUrl);
    }
  }, [user]);

  const sizeClasses = {
    sm: 'size-16',
    md: 'size-24', 
    lg: 'size-35'
  };

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);

    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      onAvatarChange(file);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative group cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <Avatar className={`${sizeClasses[size]} border-4 border-white shadow-lg`}>
          {isUploading ? (
            <div className="w-full h-full flex items-center justify-center bg-blue-50 rounded-full">
              <div className="relative">
                <Loader2 className="size-8 animate-spin text-black" />
                <div className="absolute inset-0 bg-blue-200 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
          ) : preview ? (
            <AvatarImage
              src={preview}
              alt="Avatar"
              className="object-cover"
            />
          ) : (
            <AvatarFallback className="bg-gray-100">
              <User className="size-10 text-gray-400" />
            </AvatarFallback>
          )}
        </Avatar>
      </div>

      {/* File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleInputChange}
        accept="image/*"
        className="hidden"
      />

      {/* Upload Button */}
      <Button
        onClick={() => fileInputRef.current?.click()}
        className="bg-[#141414] hover:bg-black text-white px-6 py-5 rounded-xl"
      >
        Change Avatar
      </Button>
    </div>
  );
};

export default AvatarUpload;