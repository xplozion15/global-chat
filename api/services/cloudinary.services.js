// services/cloudinary.services.js

import cloudinary from "../lib/cloudinary.js";

const uploadImage = (buffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      },
    );

    uploadStream.end(buffer);
  });
};

export { uploadImage };
