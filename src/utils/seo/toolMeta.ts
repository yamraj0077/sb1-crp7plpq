export interface ToolMeta {
  title: string;
  description: string;
  keywords: string[];
}

export const toolMeta: Record<string, ToolMeta> = {
  'pdf-merge': {
    title: 'Merge PDF Files Online - Free PDF Combiner Tool',
    description: 'Combine multiple PDF files into one document online. Free, fast, and secure PDF merger tool. No registration required.',
    keywords: ['merge pdf', 'combine pdf', 'pdf joiner', 'pdf combiner', 'free pdf merger']
  },
  'image-compress': {
    title: 'Compress Images Online - Free Image Compression Tool',
    description: 'Reduce image file size while maintaining quality. Support for JPG, PNG, and WebP formats. Fast and free image compression.',
    keywords: ['compress image', 'image compression', 'reduce image size', 'optimize images', 'image compressor']
  },
  'text-word-counter': {
    title: 'Word Counter - Free Online Word & Character Counter',
    description: 'Count words, characters, sentences, and paragraphs in your text. Free online word counter with detailed statistics.',
    keywords: ['word counter', 'character counter', 'text analyzer', 'word count tool', 'letter counter']
  },
  'dev-json': {
    title: 'JSON Formatter & Validator - Free Online JSON Tools',
    description: 'Format, validate, and beautify JSON data online. Free JSON formatter with syntax highlighting and error detection.',
    keywords: ['json formatter', 'json validator', 'json beautifier', 'format json', 'json parser']
  }
};

export function getToolMeta(toolId: string): ToolMeta {
  return toolMeta[toolId] || {
    title: 'Free Online Tools - Web Developer Utilities',
    description: 'Free online tools for developers and designers. Convert, compress, and manipulate files with ease.',
    keywords: ['online tools', 'web tools', 'developer tools', 'free tools']
  };
}