"use client"

import MarkdownPreview from '@uiw/react-markdown-preview';

type MdxPreviewProps = {
  source: string;
}

export const MdxPreview = ({ source }: MdxPreviewProps) => {
  return <MarkdownPreview source={source} />
}