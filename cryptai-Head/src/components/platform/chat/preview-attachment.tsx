import { Attachment } from 'ai';

import { LoaderIcon } from 'lucide-react';

export const PreviewAttachment = ({
  attachment,
  isUploading = false,
}: {
  attachment: Attachment;
  isUploading?: boolean;
}) => {
  const { name, url, contentType } = attachment;

  return (
    <div className="flex max-w-16 flex-col gap-2">
      <div className="bg-muted relative flex h-20 w-16 flex-col items-center justify-center rounded-md">
        {contentType ? (
          contentType.startsWith('image') ? (
            // NOTE: it is recommended to use next/image for images
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={url}
              src={url}
              alt={name ?? 'An image attachment'}
              className="size-full rounded-md object-cover"
            />
          ) : (
            <div className=""></div>
          )
        ) : (
          <div className=""></div>
        )}

        {isUploading && (
          <div className="absolute animate-spin text-zinc-500">
            <LoaderIcon />
          </div>
        )}
      </div>

      <div className="max-w-16 truncate text-xs text-zinc-500">{name}</div>
    </div>
  );
};
