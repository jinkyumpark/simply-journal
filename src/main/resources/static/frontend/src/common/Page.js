import React from 'react';

const Page = ({ totalPages, currentPage, url }) => {
    return (
        <>
            <ul class='pagination justify-content-center'>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => {
                        return (
                            <li
                                className={
                                    'page-item ' +
                                    (pageNumber == currentPage ? 'active' : '')
                                }
                            >
                                <a
                                    href={`${url}${
                                        url.indexOf('?') === -1 ? '?' : '&'
                                    }page=${pageNumber}`}
                                    className='page-link'
                                >
                                    {pageNumber}
                                </a>
                            </li>
                        );
                    }
                )}
            </ul>
        </>
    );
};

export default Page;
