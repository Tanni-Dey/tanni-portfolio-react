import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import bookCloset from '../../../../images/book_closet.png'
import bookCloset2 from '../../../../images/book_closet2.png'
import bookCloset3 from '../../../../images/book_closet3.png'
import partsIndusto from '../../../../images/parts_industo.png'
import partsIndusto2 from '../../../../images/parts_industo2.png'
import partsIndusto3 from '../../../../images/parts_industo3.png'
import furnitureReview from '../../../../images/furniture_review.png'
import furnitureReview2 from '../../../../images/furniture_review2.png'
import furnitureReview3 from '../../../../images/furniture_review3.png'
import { Link } from 'react-router-dom';
import './Projects.css'


const Projects = () => {
    const [projct, setProject] = useState('')
    const allProject = [
        { id: 1, name: 'Book Closet', img: bookCloset, img2: bookCloset2, img3: bookCloset3, des: 'This is a book warehouse website. It has 100+ books. User can signup with social login or email password login. After login he/she can add many books in this website and show this books manage books page and my books page. Upcomming book section has see in home page', tech: 'Warehouse Project : HTML, CSS, Tailwind CSS, React JS, JWT', live: 'https://book-closet.web.app/', clientCode: 'https://github.com/Tanni-Dey/book-closet-client', serverCode: 'https://github.com/Tanni-Dey/book-closet-server' },
        { id: 2, name: 'Parts Industo', img: partsIndusto, img2: partsIndusto2, img3: partsIndusto3, des: 'This is a Tv parts manufacturing website. User can signup with social login or email password login. After login he/she can purchase any product. After order, he can payment with his/her credit card.He can Update his/her profile if he/she want. It has a admin panel in this website, admin can only accees this panel. User can See About Our business, he/she can see home page.', tech: 'Manufacture Project : HTML, CSS, Tailwind CSS, React JS, Daisy UI, JWT, Stripe', live: 'https://parts-industo.web.app/', clientCode: 'https://github.com/Tanni-Dey/parts-industo-client', serverCode: 'https://github.com/Tanni-Dey/parts-industo-server' },
        { id: 3, name: 'Furniture Review', img: furnitureReview, img2: furnitureReview2, img3: furnitureReview3, des: 'This is a customer reviews site.All reviews has in reviews page and some reviews showing in customer review section in home page.Some charts has in dashboard page.', tech: 'Reviews Project : HTML, CSS, Tailwind CSS, React JS, Firebase', live: 'https://furniture-review.netlify.app/', clientCode: 'https://github.com/Tanni-Dey/furniture-review' }
    ]

    const p = allProject.find(selected => selected.id === projct)
    console.log(p)

    return (
        <div id='projects'>



            {/* <!-- The button to open modal --> */}

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-middle sm:modal-middle">
                <div class="modal-box text-black">
                    <div class="carousel w-full">
                        <div id="slide1" class="carousel-item relative w-full">
                            <img src={p?.img} class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" class="btn btn-circle">❮</a>
                                <a href="#slide2" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" class="carousel-item relative w-full">
                            <img src={p?.img2} class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" class="btn btn-circle">❮</a>
                                <a href="#slide3" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" class="carousel-item relative w-full">
                            <img src={p?.img3} class="w-full" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" class="btn btn-circle">❮</a>
                                <a href="#slide1" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <h3 class="font-bold font-serif text-xl">{p?.name}</h3>
                    <h3 class="text-lg">{p?.tech}</h3>
                    <p class="py-4">{p?.des}</p>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">ok</label>
                    </div>
                </div>
            </div>
            {/* <!-- Put this part before </body> tag --> */}



            <h2 className='text-5xl font-serif text-primary text-center font-bold'>My <span className='text-secondary'>Portfolio</span></h2>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-3 my-20 px-10 md:px-20'>

                {
                    allProject.map(project => <div key={project.id} class="card shadow-xl single-project">
                        <figure><img className='p-img' src={project.img} alt={project.name} /></figure>
                        <div class="card-body font-serif">
                            <h2 class="card-title text-secondary text-3xl">
                                {project.name}
                                <a href={project.live} target='_blank' class="badge badge-primary">LIVE</a>
                            </h2>
                            <p className='text-gray-500'>{project.tech}</p>
                            <div class="card-actions justify-end">
                                {
                                    project.serverCode && <a target='_blank' href={project.serverCode} class="badge badge-outline text-black font-bold hover:bg-secondary hover:text-white hover:py-1">Server <BsGithub className='ml-3' /></a>
                                }
                                <a href={project.clientCode} target='_blank' class="badge badge-outline hover:bg-primary hover:text-white hover:py-1 text-black font-bold">Client <BsGithub className='ml-3' /></a>
                                <label onClick={() => setProject(project.id)} for="my-modal-6" className='badge badge-outline hover:bg-primary hover:text-white hover:py-1 text-black font-bold'>Details</label>
                                {/* 
                                <label onClick={() => setProject(project.id)} for="my-modal-6" class="btn modal-button">open modal</label> */}


                            </div>
                        </div>
                    </div>)
                }

                {/*    <div class="card shadow-xl single-project">
                    <figure><img className='p-img' src={bookCloset} alt="Book_Closet" /></figure>
                    <div class="card-body font-serif">
                        <h2 class="card-title text-secondary text-3xl">
                            Book Closet
                            <a href='https://book-closet.web.app/' target='_blank' class="badge badge-primary">LIVE</a>
                        </h2>
                        <p className='text-gray-500'>Warehouse Project : HTML, CSS, Tailwind CSS, React JS, JWT</p>
                        <div class="card-actions justify-end">
                            <a target='_blank' href='https://github.com/Tanni-Dey/book-closet-server' class="badge badge-outline text-black font-bold hover:bg-secondary hover:text-white hover:py-1">Server <BsGithub className='ml-3' /></a>
                            <a href='https://github.com/Tanni-Dey/book-closet-client' target='_blank' class="badge badge-outline hover:bg-primary hover:text-white hover:py-1 text-black font-bold">Client <BsGithub className='ml-3' /></a>
                        </div>
                    </div>
                </div>
                <div class="card shadow-xl single-project">
                    <figure><img className='p-img' src={partsIndusto} alt="parts_industo" /></figure>
                    <div class="card-body font-serif">
                        <h2 class="card-title text-secondary text-3xl">
                            Parts Industo
                            <a href='https://parts-industo.web.app/' target='_blank' class="badge badge-primary">LIVE</a>
                        </h2>
                        <p className='text-gray-500'>Manufacture Project : HTML, CSS, Tailwind CSS, React JS, Daisy UI, JWT, Stripe</p>
                        <div class="card-actions justify-end">
                            <a target='_blank' href='https://github.com/Tanni-Dey/parts-industo-server' class="badge badge-outline text-black font-bold hover:bg-secondary hover:text-white hover:py-1">Server <BsGithub className='ml-3' /></a>
                            <a href='https://github.com/Tanni-Dey/parts-industo-client' target='_blank' class="badge badge-outline hover:bg-primary hover:text-white hover:py-1 text-black font-bold">Client <BsGithub className='ml-3' /></a>
                        </div>
                    </div>
                </div>
                <div class="card shadow-xl single-project">
                    <figure><img className='p-img' src={furnitureReview} alt="furniture_review" /></figure>
                    <div class="card-body font-serif">
                        <h2 class="card-title text-secondary text-3xl">
                            Furniture Review
                            <a href='https://furniture-review.netlify.app/' target='_blank' class="badge badge-primary">LIVE</a>
                        </h2>
                        <p className='text-gray-500'>Reviews Project : HTML, CSS, Tailwind CSS, React JS, Firebase</p>
                        <div class="card-actions justify-end">
                            <a href='https://github.com/Tanni-Dey/furniture-review' target='_blank' class="badge badge-outline hover:bg-primary hover:text-white hover:py-1 text-black font-bold">Client <BsGithub className='ml-3' /></a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Projects;