//Resume Document
import './ResumeDoc.css';


function ResumeDoc(){
    const  resumePdf = 'https://drive.google.com/file/d/1L41eMg_WeEUTZxfwKarE6l-XzBPQwWNJ/view?usp=share_link';

    return (<>
        <a className="btn download-btn fs-5 mb-3" href={`${ResumeDoc}`} download>Download</a>

        <embed
            className='mb-2'
            src={`https://drive.google.com/file/d/1L41eMg_WeEUTZxfwKarE6l-XzBPQwWNJ/view?usp=share_link${ResumeDoc}/preview`}
            style={{display: 'block', margin: '0 auto', width: '90%', minWidth: '300px', height: '70vw', minHeight: '600px'}}
            width="75%"
        />
    </>);
}


// EXPORT
export default ResumeDoc;  