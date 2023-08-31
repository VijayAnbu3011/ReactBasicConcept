document.getElementById("buttonId").addEventListener("click", function () {
  // Array of file URLs and names
  var files = [
    {
      url: "https://dev-env-zealhr-hrms.s3.ap-south-1.amazonaws.com/hrms-backend/file/1690543836313/Project_Requirement.docx",
      name: "filename1.ext",
    },
    {
      url: "https://dev-env-zealhr-hrms.s3.ap-south-1.amazonaws.com/hrms-backend/file/1690797173473/Infosys_-_Java.docx",
      name: "filename2.ext",
    },
    // Add more files here if needed
  ];

  // Function to trigger the download
  function downloadFile(file) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    iframe.src = file.url;
  }

  // Loop through the files and trigger the download for each
  for (var i = 0; i < files.length; i++) {
    downloadFile(files[i]);
  }
});
