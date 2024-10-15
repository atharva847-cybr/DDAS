// Simulated list of existing files on the user's system
//local storage se connected 
const existingFiles = {
    "example-file.txt": "C:\\Downloads\\example-file.txt",
    "sample-data.pdf": "C:\\Documents\\sample-data.pdf",
    "report.docx": "C:\\Reports\\report.docx"
};

const notification = document.getElementById('notification');
const fileLocation = document.getElementById('fileLocation');
const fileToDownload = "example-file.txt"; // Simulated file to download

// Create a downloadable link for the file
const createDownloadLink = (fileName, fileContent) => {
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    return a;
};

document.getElementById('downloadBtn').addEventListener('click', function() {
    // Check if the file already exists
    if (existingFiles[fileToDownload]) {
        // Show notification if the file exists
        fileLocation.innerText = `Location: ${existingFiles[fileToDownload]}`;
        notification.classList.remove('hidden');
    } else {
        alert('Downloading the file...');
        const downloadLink = createDownloadLink(fileToDownload, "This is a sample text file content.");
        downloadLink.click(); // Simulate download
        document.body.removeChild(downloadLink); // Clean up
    }
});

document.getElementById('downloadAnywayBtn').addEventListener('click', function() {
    alert('Downloading the file anyway...');
    const downloadLink = createDownloadLink(fileToDownload, "This is a sample text file content.");
    downloadLink.click(); // Simulate download
    document.body.removeChild(downloadLink); // Clean up
    notification.classList.add('hidden'); // Hide the notification
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    notification.classList.add('hidden'); // Hide the notification
});
