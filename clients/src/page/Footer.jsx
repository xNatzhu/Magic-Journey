export default function Footer() {
    return(
        <footer className="bg-[#161616]" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            <div className="px-4 py-12 mx-auto bg-[#161616] w-[100%] sm:px-6 lg:px-16">
                <div className="flex flex-wrap justify-center lg:justify-center items-center">
                <span className="mt-2 text-sm font-light text-gray-300">
                    Copyright © 2023 -
                    <a href="https://www.linkedin.com/in/agustin-saravia/" className="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer"><span>@Agustin Saravia</span></a>
                    |  xNatzhu
                </span>
                </div>
            </div>
        </footer>
    );
}