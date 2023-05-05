import './Title1.css'

export default function Title1() {
    return (
        <div className='container-fluid' id='title1_wrapper'>
            <div className='d-flex align-items-center justify-content-end' id='title1_box_wrapper'>
                <div id='title_box' className='d-flex align-items-center justify-content-center'>
                    <p className='fs-2 white_text'>Lizards dream about weapons</p>
                </div>
                <p className='fs-4 mt-custom white_text'>Начни прямо сейчас</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="15vw" height="15vh" fill="white" class="bi bi-arrow-down mb-custom" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
            </div>
        </div>
    );
}