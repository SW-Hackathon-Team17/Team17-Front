import { useCallback, useRef } from "react";

import FileUploadIcon from "@mui/icons-material/FileUpload";
export default function ImageUpload() {
  const inputRef = useRef(null);
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.click();
  }, []);

  const onImageChange = async (e) => {
    e.preventDefault();
    const file = e.target.files;

    if (!file) return null;

    // const convertedFile = await Heic2Jpg(file[0]);

    // const lowCapacityFile = await compressedFile(convertedFile);

    // const storageRef = ref(storage, `files/${file[0].name}`);
    // const uploadTask = uploadBytesResumable(storageRef, lowCapacityFile);

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //   },
    //   (error) => {
    //     switch (error.code) {
    //       case "storage/canceld":
    //         alert("Upload has been canceled");
    //         break;
    //     }
    //   },
    //   () => {
    //     getDownloadURL(storageRef).then((downloadURL) => {
    //       console.log("File available at", downloadURL);

    //       //   setImageURL(downloadURL);
    //       const prev = getValues("images");
    //       setValue("images", [...prev, downloadURL]);
    //     });
    //   }
    // );
  };

  return (
    <>
      <FileUploadIcon
        onClick={onUploadImageButtonClick}
        sx={{ fontSize: "35px" }}
      />
      <input
        hidden
        type="file"
        // accept="image/*"
        accept=".jpg,.jpeg,.png,.gif,.bmp,.heic,.heif,.pptx"
        ref={inputRef}
        onChange={onImageChange}
      />
    </>
  );
}
