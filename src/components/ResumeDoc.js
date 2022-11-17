//Resume Document
import './ResumeDoc.css';


function ResumeDoc(){
    const  resumePdf = 'TiffanyResume.pdf';

    return (<>
        <a className="btn download-btn fs-5 mb-3" href={`${resumePdf}`} download>Download</a>

      
    </>);
}


// EXPORT
export default ResumeDoc;  