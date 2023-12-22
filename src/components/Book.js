import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Book= () => {

    const PageCover = React.forwardRef((props, ref) => {
    return (
        <div className="" ref={ref} data-density="hard">
            <div className="">
                <img src={props.source}  alt='cover' className='w-[100%] h-[100%]'></img>
                {/* <div style={{backgroundImage:props.source}} className='w-[100%] h-[100%] z-20 fixed bg-contain'>

                </div> */}
            </div>
        </div>
    );
    });

    const Page = React.forwardRef((props, ref) => {
        return (
            <div className="" ref={ref}>
                <div className=" ">
                    <img src={props.source} alt='pages' className='w-[100%] h-[100%]' />
                    {/* <div style={{backgroundImage:props.source}} className='w-[100%] h-[100%] z-20 fixed bg-contain '>

                    </div> */}
                </div>
            </div>
        );
    });

    const navigate=useNavigate();
    const back = () => {
        navigate('/');
    }

    const bookRef=useRef(null);
    // const bookRef2=useRef(null);
    // const [page,setPage] = useState(0);
    // const totalpage=bookRef.current.pageFlip().pageCount();
    

    const handlePrev=() => {
        bookRef.current.pageFlip().flipPrev();
        console.log("button click");
    }

    const handleNext=() => {
        bookRef.current.pageFlip().flipNext() ;
        console.log("button click");
    }

    // const handlePrev2=() => {
    //     bookRef2.current.pageFlip().flipPrev();
    //     console.log("button click");
    // }

    // const handleNext2=() => {
    //     bookRef2.current.pageFlip().flipNext() ;
    //     console.log("button click");
    // }

    // const onPage = (e) => {
    //     setPage(e.data);
    // };
    

    let settings={
        // width:50,
        // height:50,
        // size:"stretch",
        width:300,
        height:300,
        size:"stretch",
        // minWidth:315,
        // maxWidth:1000,
        // minHeight:400,
        // maxHeight:1533,
        // maxShadowOpacity=0.,
        // showCover={true},
        // minWidth:315,
        // maxWidth:1000,
        // minHeight:400,
        // maxHeight:1533,
        maxShadowOpacity:0.5,
        showCover:true,
        // mobileScrollSupport:true,
        // className:"demo-book",
        ref:{bookRef},
    } ;

    // let settings2={
    //     size:"stretch",
    //     width:550,
    //     height:550,
    //     maxShadowOpacity:0.5,
    //     showCover:true,
    //     ref:{bookRef2},
    // };

    // if(window().width<="700px"){
    //     bookRef2.current.style.display="none"
    // }

    return (
        <div className=' pt-[1%] h-[100vh] flex flex-col items-center bg-bisque overflow-hidden'>
            <div className='flex w-[100%] mb-6 items-center px-[12%]'>
                <div className='w-1/2'>
                    <img src='./images/raghu.png' alt='logo' className=' w-1/4 max-sm:w-[60%]'/>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <button className="text-black border-2 border-solid border-red    w-fit text-base font-bold uppercase text-center px-6 py-2 ml-[45%] hover:bg-red hover:text-white rounded-xl cursor-pointer max-sm:mt-3 max-sm:px-4 max-sm:py-2 max-sm:text-sm " onClick={back}>back</button>
                </div>
            </div>

            <div className=''>
                <button className='text-base capitalize mr-16' onClick={handlePrev} ><img src='./images/prev.png' alt='icons' onClick={handlePrev} /></button>
                <button className='text-base capitalize' onClick={handleNext}><img src='./images/next.png' alt='icons' onClick={handleNext}></img></button>
            </div>

            {/* <div className='pt-12 hidden max-sm:block'>
                <button className='text-base capitalize mr-16' onClick={handlePrev2} ><img src='./images/prev.png' alt='icons' onClick={handlePrev} /></button>
                <button className='text-base capitalize' onClick={handleNext2}><img src='./images/next.png' alt='icons' onClick={handleNext}></img></button>
            </div> */}
            
                <HTMLFlipBook {...settings} ref={bookRef} className=''>
                    <PageCover source={"./images/first.png"} className='' ></PageCover>
                    <Page source={"./images/second.png"} className='' ></Page>
                    <Page source={"./images/third.png"}></Page>
                    <Page source={"./images/5.png"}></Page>
                    <Page source={"./images/fourth.png"}></Page>
                    <Page source={"./images/6.png"}></Page>
                    <Page source={"/images/7.png"}></Page>
                    <Page source={"./images/8.png"}></Page>
                    <Page source={"./images/9.png"}></Page>
                    <Page source={"./images/10.png"}></Page>
                    <Page source={"./images/12.png"}></Page>
                    <Page source={"./images/13.png"}></Page>
                    <Page source={"./images/16.png"}></Page>
                    <Page source={"./images/15.png"}></Page>
                    <Page source={"./images/17.png"}></Page>
                    <Page source={"./images/18.png"}></Page>
                    <Page source={"./images/19.png"}></Page>
                    <Page source={"./images/20.png"}></Page>
                    <PageCover source={"./images/21.png"}></PageCover>
                </HTMLFlipBook>

            {/* <HTMLFlipBook {...settings2} ref={bookRef2} className='hidden max-sm:block'>
                <PageCover source={"URL('./images/first.png')"} className='' ></PageCover>
                <Page source={"URL('./images/second.png')"} className='' ></Page>
                <Page source={"URL('./images/third.png')"}></Page>
                <Page source={"URL('./images/5.png')"}></Page>
                <Page source={"URL('./images/fourth.png')"}></Page>
                <Page source={"URL('./images/6.png')"}></Page>
                <Page source={"URL('./images/7.png')"}></Page>
                <Page source={"URL('./images/8.png')"}></Page>
                <Page source={"URL('./images/9.png')"}></Page>
                <Page source={"URL('./images/10.png')"}></Page>
                <Page source={"URL('./images/12.png')"}></Page>
                <Page source={"URL('./images/13.png')"}></Page>
                <Page source={"URL('./images/16.png')"}></Page>
                <Page source={"URL('./images/15.png')"}></Page>
                <Page source={"URL('./images/17.png')"}></Page>
                <Page source={"URL('./images/18.png')"}></Page>
                <Page source={"URL('./images/19.png')"}></Page>
                <Page source={"URL('./images/20.png')"}></Page>
                <PageCover source={"URL('./images/21.png')"}></PageCover>
            </HTMLFlipBook> */}
        
        </div>
    )
}

export default Book ;

// const PageCover = React.forwardRef((props, ref) => {
//     return (
//       <div className="page page-cover bg-yellow" ref={ref} data-density="hard">
//         <div className="page-content">
//           <h2>{props.children}</h2>
//         </div>
//       </div>
//     );
//   });
  
//   const Page = React.forwardRef((props, ref) => {
//     return (
//       <div className="page bg-yellow" ref={ref}>
//         <div className="page-content">
//           <h2 className="page-header">Page header - {props.number}</h2>
//           <div className="page-image"></div>
//           <div className="page-text">{props.children}</div>
//           <div className="page-footer">{props.number + 1}</div>
//         </div>
//       </div>
//     );
//   });
  
//   class Book extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         page: 0,
//         totalPage: 0,
//       };
//     }
  
//     nextButtonClick = () => {
//         this.flipBook.pageFlip().flipNext();
//     };
  
//     prevButtonClick = () => {
//       this.flipBook.pageFlip().flipNext();
//     };
  
//     onPage = (e) => {
//       this.setState({
//         page: e.data,
//       });
//     };
  
//     componentDidMount() {
//       this.setState({
//         totalPage:20,
//       });
//     }
  
//     render() {
//       return (
//         <div>
//           <HTMLFlipBook
//             width={550}
//             height={733}
//             size="stretch"
//             minWidth={315}
//             maxWidth={1000}
//             minHeight={400}
//             maxHeight={1533}
//             maxShadowOpacity={0.5}
//             showCover={true}
//             mobileScrollSupport={true}
//             onFlip={this.onPage}
//             onChangeOrientation={this.onChangeOrientation}
//             onChangeState={this.onChangeState}
//             className="demo-book"
//             ref={(el) => (this.flipBook = el)}
//             autoSize={true}
//           >

//             <PageCover>BOOK TITLE</PageCover>
//             <Page number={1}>Lorem ipsum...</Page>
//             <Page number={2}>Lorem ipsum...</Page>
//             <Page number={1}>Lorem ipsum...</Page>
//             <Page number={2}>Lorem ipsum...</Page>
//             <Page number={1}>Lorem ipsum...</Page>
//             <Page number={2}>Lorem ipsum...</Page>
//             <Page number={1}>Lorem ipsum...</Page>
//             <Page number={2}>Lorem ipsum...</Page>
//             <Page number={1}>Lorem ipsum...</Page>
//             <Page number={2}>Lorem ipsum...</Page>
//             <PageCover>THE END</PageCover>

//           </HTMLFlipBook>
  
//           <div className="container">
//             <div>

//               <button type="button" onClick={this.prevButtonClick}>
//                 Previous page
//               </button>

//               [<span>{this.state.page}</span> of
//                <span>{this.state.totalPage}</span>]

//               <button type="button" onClick={this.nextButtonClick}>
//                 Next page
//               </button>

//             </div>
//             <div>

//               State: <i>{this.state.state}</i>, orientation: <i>{this.state.orientation}</i>

//             </div>
//           </div>
//         </div>
//       );
//     }
//   }

// export default Book