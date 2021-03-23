import React, {useEffect, useState} from "react";
import { Document, Page, pdfjs  } from 'react-pdf';
import "./DocsCard.css";
import samplePDF from './test.pdf';


export default function DocsCard(props) {
    //TODO: Добавить запрос на загрузку pdf по имени
    const [isPdfShown, setPdfShown] = useState(false);

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, [])

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
        //setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (<>
        <div className='doc-info-wrapper'>
            <div className='docs-name'>
                {props.name}
            </div>
            <form>
                <button type = 'button' onClick={() => setPdfShown(!isPdfShown)}>{isPdfShown? "Закрыть" : "Открыть"}</button>
            </form>
        </div>
        <div className={isPdfShown? 'pdf-wrapper' : 'pdf-hidden'}>
            <Document
                file={samplePDF}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <div>
                <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    Previous
                </button>
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
                </button>
            </div>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
        </>
    );
}