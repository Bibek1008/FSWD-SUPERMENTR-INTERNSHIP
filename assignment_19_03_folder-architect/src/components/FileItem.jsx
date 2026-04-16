import React from "react";

export default function FileItem({ file, handleSelect, selected }) {
  return (
    <div
      onClick={() => handleSelect(file)}
      style={{
        padding: "8px 12px",
        margin: "5px 0",
        border: selected ? "2px solid #007BFF" : "1px solid #ccc",
        borderRadius: "5px",
        background: selected ? "#E0F0FF" : "#f9f9f9",
        cursor: "pointer",
      }}
    >
      {file.name} {file.type === "folder" ? "(Folder)" : "(File)"}
    </div>
  );
}
