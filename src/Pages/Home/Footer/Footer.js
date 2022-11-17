import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-gray-200 bg-opacity-50'>
            <footer class="footer p-10 text-base-content my-0 ">
                <div>
                    <span class="font-bold text-[#006a4e] flex items-center">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/8KPBBhf/picture.png" />
                        </div>
                        <div className='px-2'>
                            <h2>Mastodon Limited</h2>
                        </div>
                    </span>
                    <span><p>House 08, Road 19, Nikunja 2, </p><br /><p>Khilkhet Dhaka 1229</p></span>


                    <div class="grid grid-flow-col gap-4">
                        <a className='text-[#99ca3f]' href="https://www.linkedin.com/company/mastodonlimited/?originalSubdomain=bd" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="icon icon-tabler icon-tabler-brand-linkedin" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <rect x="4" y="4" width="16" height="16" rx="2" /> <line x1="8" y1="11" x2="8" y2="16" /> <line x1="8" y1="8" x2="8" y2="8.01" /> <line x1="12" y1="16" x2="12" y2="11" /> <path d="M16 16v-3a2 2 0 0 0 -4 0" /> </svg></a>
                        <a className='text-[#99ca3f]' href='https://www.facebook.com/mastodonlimited' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /> </svg></a>
                        <a className='text-[#99ca3f]' href='https://www.instagram.com/mastodonlimited' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /> </svg></a>
                        <a className='text-[#99ca3f]' href='https://www.youtube.com/channel/UCr5dNYTQfxQ49UbW-5biDvQ' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /> </svg></a>
                    </div>

                </div>
                <div>
                    <span class="font-bold text-[#006a4e]">Contact Info</span>
                    <p><span className='font-bold'>Email:</span> info@mastodonbd.com</p>
                    <p><span className='font-bold'>Mobile No. :</span> +8801710684938, +8801810172434</p>
                    <span class="font-bold text-[#006a4e]">We are Available</span>
                    <p><span className='font-bold'>Working Day:</span> 6 days per week</p>
                    <p><span className='font-bold'>Working Hour:</span> 9AM to 6PM</p>
                </div>
                <div>
                    <span class="font-bold text-[#006a4e]">Recent Post</span>
                    <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 "><img src="https://i.ibb.co/ZdD70pG/recentpost1.jpg" alt="" srcset="" /></div>
                        <div class="col-span-2"><span><small><i class="fa fa-clock-o" aria-hidden="true"></i> Jul 16 2022</small></span></div>
                        <Link class="row-span-2 col-span-2 hover:text-[#99ca3f] font-bold"><a href='/blog'><span>Substainable strategic </span><br /><span>theme areas</span></a></Link>

                    </div>
                    <div class="grid grid-row3-3 grid-flow-col gap-4">
                        <div class="row-span-3"><img src="https://i.ibb.co/9Vxf2fg/recentpost2.jpg" alt="" srcset="" /></div>
                        <div class="col-span-2"><span><small><i class="fa fa-clock-o" aria-hidden="true"></i> Jul 16 2022</small></span></div>
                        {/* <div class="row-span-2 col-span-2 hover:text-[#99ca3f] font-bold"><a href=''><span>Objectively excellent </span><br /><span>scenarios attempt</span></a></div> */}
                        <Link to='/blog' class="row-span-2 col-span-2 hover:text-[#99ca3f] font-bold"><span>Objectively excellent </span><br /><span>scenarios attempt</span></Link>
                    </div>
                </div>
                <div>
                    <span class="font-bold text-[#006a4e]">Quick Link</span>
                    <a class="link link-hover ">AboutUs</a>
                    <a class="link link-hover ">ContactUs</a>
                    <a class="link link-hover ">BuyaCar</a>
                    <a class="link link-hover ">Spare Parts</a>
                </div>


            </footer>
            <h2 className='text-center pt-4 pb-4 '>Copyright @ 2022 <span className='font-bold'>Mastodon Limited.</span> All Rights reserved.</h2>
        </div>
    );
};

export default Footer;