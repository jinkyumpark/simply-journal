import React from 'react';

const Page = ({ totalCount, itemsPerPage, activePage }) => {
    return (
        <>
            <ul class='pagination justify-content-center'>
                {Array.from(
                    { length: totalCount / itemsPerPage + 1 },
                    (_, i) => i + 1
                ).map((pageNumber) => {
                    return (
                        <div className='page-item'>
                            <a
                                href=''
                                className={
                                    'page-link' +
                                    (activePage === pageNumber && ' active')
                                }
                            >
                                {pageNumber}
                            </a>
                        </div>
                    );
                })}
            </ul>
        </>
    );
};

export default Page;
