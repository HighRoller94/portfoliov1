import React from 'react';
import Link from 'next/link';

function GetInTouch() {

    return (
        <>
            <div className="getInTouch">
                <div className="wrapper"> 
                    <h1>
                        What's next?
                    </h1>
                    <p>
                        Got an idea for a project? Get in touch and let's grab a drink sometime!
                    </p>
                    <button>
                        <Link href="/contact">
                            <span className="focus">Lets go</span>
                        </Link>
                    </button>
                </div>
            </div>
        </>

    )
}

export default GetInTouch
