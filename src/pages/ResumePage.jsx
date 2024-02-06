import Resume from '../assets/KellyBennett.pdf';

function ResumePage() {
    return(
        <>
        <iframe height="1200px" width="100%" src={Resume}></iframe>
        </>
    );
}

export default ResumePage;