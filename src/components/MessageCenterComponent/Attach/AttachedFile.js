import React from 'react'
import { ReactComponent as PdfIcon } from 'img/vector/icons/pdficon.svg'

const AttachedFile = () => {
  return (
    <div className="attached-file col-auto">
      <div className="d-flex flex-column">
        <div className="preview" />
        <div className="footer py-1 px-2 d-flex flex-row justify-content-center align-items-center">
          <div className="icon">
            <PdfIcon style={{ width: '1rem' }} />
          </div>
          <div className="file-name small ml-1">File Name.pdf</div>
        </div>
      </div>
    </div>
  )
}

export default AttachedFile
