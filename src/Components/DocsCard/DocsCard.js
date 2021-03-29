import React, {useEffect, useState} from "react";
import { Document, Page, pdfjs  } from 'react-pdf';
import "./DocsCard.css";
import samplePDF from './test.pdf';
import previous_icon from './Icons/baseline_keyboard_arrow_left_black_36dp.png';
import next_icon from './Icons/baseline_keyboard_arrow_right_black_36dp.png';


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

    return (<div className='doc-pdf-wrapper'>
        <div className='doc-info-wrapper'>
            <div className='docs-name'>
                {props.name}
            </div>
            <form>
                <button className='pdf-open-button' type = 'button' onClick={() => setPdfShown(!isPdfShown)}>{isPdfShown? "Закрыть" : "Открыть"}</button>
            </form>
        </div>
        <div className={isPdfShown? 'pdf-wrapper' : 'pdf-hidden'}>
            <Document
                file={samplePDF}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <div className='page-number-wrapper'>
                <button
                    className='page-button'
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    <img className='page-button-icon' src={previous_icon} alt = "previous page"/>
                </button>
                <p>
                    {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button
                    className='page-button'
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    <img className='page-button-icon' src={next_icon} alt = "next page"/>
                </button>
            </div>
        </div>
        </div>
    );
}