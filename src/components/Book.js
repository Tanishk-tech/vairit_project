import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import { useState } from 'react';

const Book= () => {
    let settings={
        width:550,
        height:733,
        size:"stretch",
        minWidth:315,
        maxWidth:1000,
        minHeight:400,
        maxHeight:1533,
        maxShadowOpacity:0.5,
        showCover:true,
        mobileScrollSupport:true,
        className:"demo-book",
    } ;

    const PageCover = React.forwardRef((props, ref) => {
    return (
        <div className="page page-cover" ref={ref} data-density="hard">
            <div className="page-content">
                <h2>{props.children}</h2>
            </div>
        </div>
    );
    });

    const Page = React.forwardRef((props, ref) => {
        return (
            <div className="page" ref={ref}>
                <div className="page-content">
                    <h2 className="page-header">Page header - {props.number}</h2>
                    <div className="page-image"></div>
                    <div className="page-text">{props.children}</div>
                    <div className="page-footer">{props.number + 1}</div>
                </div>
            </div>
        );
    });

    const [page,setPage]= useState(0);

   

    return (
        <div className='px-[12%] pt-[6%] flex items-center'>
            <HTMLFlipBook {...settings} className='bg-grey'>
                <PageCover>BOOK TITLE</PageCover>
                <Page number={1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Page>
                <Page number={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Page>
                <Page number={3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Page>
                <Page number={4}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Page>
                <Page number={5}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Page>
                <PageCover>THE END</PageCover>
            </HTMLFlipBook>
        
        </div>
    )
}

export default Book ;