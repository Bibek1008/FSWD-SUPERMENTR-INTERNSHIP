import React, { useState, useEffect } from "react";
import FileItem from "./FileItem";

export default function FolderList() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [clipboard, setClipboard] = useState(null);
  const [actionDelay, setActionDelay] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setFiles([
        { id: 1, name: "Documents", type: "folder" },
        { id: 2, name: "Images", type: "folder" },
        { id: 3, name: "notes.txt", type: "file" },
        { id: 4, name: "todo.md", type: "file" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const handleSelect = (file) => setSelectedFile(file);

  const cut = () => {
    if (!selectedFile) return alert("Select a file or folder first!");
    setClipboard({ ...selectedFile, action: "cut" });
    alert(`'${selectedFile.name}' cut. You can paste it after 2 seconds.`);
  };

  const copy = () => {
    if (!selectedFile) return alert("Select a file or folder first!");
    setClipboard({ ...selectedFile, action: "copy" });
    alert(`'${selectedFile.name}' copied. You can paste it after 2 seconds.`);
  };

  const paste = () => {
    if (!clipboard) return alert("Nothing to paste!");
    setActionDelay(true);

    setTimeout(() => {
      if (clipboard.action === "cut") {
        setFiles(files.filter(f => f.id !== clipboard.id));
      }
      const newId = Math.max(...files.map(f => f.id)) + 1;
      setFiles([...files, { ...clipboard, id: newId }]);
      setClipboard(null);
      setActionDelay(false);
    }, 2000);
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Folder Architect</h1>
      {loading ? (
        <p>Retrieving data... Please wait</p>
      ) : (
        <>
          <div style={{ marginBottom: "15px" }}>
            <button onClick={cut} style={{ marginRight: "5px" }}>Cut</button>
            <button onClick={copy} style={{ marginRight: "5px" }}>Copy</button>
            <button onClick={paste} disabled={actionDelay}>Paste</button>
          </div>
          {actionDelay && <p style={{ color: "orange" }}>Processing action, please wait...</p>}
          {files.map(file => (
            <FileItem
              key={file.id}
              file={file}
              handleSelect={handleSelect}
              selected={selectedFile && selectedFile.id === file.id}
            />
          ))}
        </>
      )}
    </div>
  );
}
