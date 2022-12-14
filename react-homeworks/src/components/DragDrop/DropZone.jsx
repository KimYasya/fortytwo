import React, { useState } from 'react';

import './DropZone.css';

export const DropZone = () => {
  const [ drag, setDrag ] = useState(false);
  const [ files, setFiles ] = useState([]);

function handleDragStart(e) {
  e.preventDefault();
  setDrag(true);
}

function handleDragLeave(e) {
  e.preventDefault();
  setDrag(false);
}

function handleDrop(e) {
  e.preventDefault();
  setFiles([...e.dataTransfer.files])
  setDrag(false);
  console.log(files)
}

const deleteFile = () => {
  setFiles([]);

};

  return (
    <div>
      <h4>Вложенные файлы</h4>
      <div>{files.map(file =>
        <div key={file.index} className="added-files">
        {file.name}  
        <div type="button"
                className="delete-button__files"
                onClick={() => deleteFile()}
        >delete
        </div></div>)}</div>
       
      <div className="dropzone">
        {drag 
        ? <div className="dropzone-field"
               onDragStart={(e) => handleDragStart(e)}
               onDragLeave={(e) => handleDragLeave(e)}
               onDragOver={(e) => handleDragStart(e)}
               onDrop={(e) => handleDrop(e)}
               >Отпустите файлы, чтобы добавить</div>
        : <div className="dropzone-field"
               onDragStart={(e) => handleDragStart(e)}
               onDragLeave={(e) => handleDragLeave(e)}
               onDragOver={(e) => handleDragStart(e)} 
               >Перетащите файлы, чтобы добавить</div>      
        }
      </div>
    </div>
  );
};