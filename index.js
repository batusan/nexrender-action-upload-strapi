// index.js
module.exports = (job, settings, { input, api_url, folderId }, type) => {
  if (type != "postrender") {
    throw Error("this action only can be used in postrender.");
  }
  return Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };

    const formData = new FormData();
    formData.append("files", fs.createReadStream(input));
    formData.append("ref", "media");
    formData.append("field", "media");
    formData.append("refId", folderId);

    axios
      .post(api_url, formData, { headers: headers })
      .then((res) => {
        resolve(`Upload success. File path: ${res.data[0].url}`);
      })
      .catch((err) => {
        reject(`Upload failed. Error: ${err.message}`);
      });
  });
};
