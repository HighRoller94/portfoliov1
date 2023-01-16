import React from 'react';
import Link from 'next/link';

function GetInTouch() {

    return (
        <>
            <div className="footer__contact ">
                <h2>Got an idea for a project?
                    <Link href="/contact">
                        <span className="focus"> Get in touch!</span>
                    </Link>
                </h2>
            </div>
        </>

    )
}

export default GetInTouch
