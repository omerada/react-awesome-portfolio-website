import React from 'react';

interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
  text?: string;
  className?: string;
  bgColor?: string;
  textColor?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width = 300,
  height = 200,
  text = 'Image Placeholder',
  className = '',
  bgColor = '#f3f4f6',
  textColor = '#6b7280',
}) => {
  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg ${className}`}
      style={style}
    >
      <div className="text-center">
        <svg
          className="mx-auto h-8 w-8 mb-2 opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-sm font-medium">{text}</p>
      </div>
    </div>
  );
};

// Özel placeholder'lar için utility fonksiyonlar
export const ProjectImagePlaceholder: React.FC<{ title?: string }> = ({
  title = 'Proje Görseli',
}) => (
  <ImagePlaceholder
    width="100%"
    height="300px"
    text={title}
    className="aspect-video object-cover"
    bgColor="#1f2937"
    textColor="#9ca3af"
  />
);

export const ProfileImagePlaceholder: React.FC<{ name?: string }> = ({
  name = 'Profil Fotoğrafı',
}) => (
  <ImagePlaceholder
    width="200px"
    height="200px"
    text={name}
    className="rounded-full"
    bgColor="#3b82f6"
    textColor="#ffffff"
  />
);

export const CompanyLogoPlaceholder: React.FC<{ company?: string }> = ({
  company = 'Şirket Logosu',
}) => (
  <ImagePlaceholder
    width="120px"
    height="60px"
    text={company}
    className="object-contain"
    bgColor="#f9fafb"
    textColor="#4b5563"
  />
);

export const TestimonialImagePlaceholder: React.FC<{ name?: string }> = ({
  name = 'Kişi Fotoğrafı',
}) => (
  <ImagePlaceholder
    width="64px"
    height="64px"
    text={name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()}
    className="rounded-full text-xs"
    bgColor="#6366f1"
    textColor="#ffffff"
  />
);
