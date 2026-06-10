import React from 'react'

const MobileFooterAccordion = ({ 
    btnText,
    linkOne,
    linkTwo,
    linkThree,
    linkFour,
    linkFive,
    linkSix,
    linkSeven,
    linkEight,
    linkNine,
    linkTen,
    linkEleven,
    linkTwelve,
    linkThirteen,
    target,
    id,
    controls
 }) => {
  return (
    <div class="accordion" id="accordionFooter">
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="true" aria-controls={controls}>
                HELP
            </button>
            </h2>
            <div id={id} class="accordion-collapse collapse show" data-bs-parent="#accordionFooter">
               <div class="accordion-body">
                  <ul className='d-flex flex-column gap-1 list-unstyled'>
                    <li className='text-decoration-none'> <a href="#">{linkOne}</a></li>
                    <li className='text-decoration-none'> <a href="#">{linkTwo}</a></li>
                    <li className='text-decoration-none'> <a href="#">{linkThree}</a></li>
                    <li className='text-decoration-none'> <a href="#">{linkFour}</a></li>
                    <li className='text-decoration-none'> <a href="#">{linkFive}</a></li>
                    <li className='text-decoration-none'> <a href="#">{linkSix}</a></li>
                  </ul>
               </div>
            </div>
        </div>
     </div>
  )
}

export default MobileFooterAccordion