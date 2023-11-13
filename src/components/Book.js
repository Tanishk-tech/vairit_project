import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Book= () => {

    const PageCover = React.forwardRef((props, ref) => {
    return (
        <div className="" ref={ref} data-density="hard">
            <div className="">
                {/* <img src={props.source}  alt='cover' className=''></img> */}
                <div style={{backgroundImage:props.source}} className='w-[100%] h-[100%] z-20 fixed bg-contain'>

                </div>
            </div>
        </div>
    );
    });

    const Page = React.forwardRef((props, ref) => {
        return (
            <div className="" ref={ref}>
                <div className=" ">
                    {/* <img src={props.source} alt='pages' className='' /> */}
                    <div style={{backgroundImage:props.source}} className='w-[100%] h-[100%] z-20 fixed bg-contain'>

                    </div>
                </div>
            </div>
        );
    });

    const navigate=useNavigate();
    const back = () => {
        navigate('/');
    }

    const bookRef=useRef(null);
    // const [page,setPage] = useState(0);
    // const totalpage=bookRef.current.pageFlip().pageCount();
    

    const handlePrev=() => {
        bookRef.current.pageFlip().flipPrev();
    }

    const handleNext=() => {
        bookRef.current.pageFlip().flipNext() ;
    }

    // const onPage = (e) => {
    //     setPage(e.data);
    // };
    

    let settings={
        width:100,
        height:100,
        size:"stretch",
        // minWidth:315,
        // maxWidth:1000,
        // minHeight:400,
        // maxHeight:1533,
        maxShadowOpacity:0.5,
        showCover:true,
        mobileScrollSupport:true,
        className:"demo-book",
        ref:{bookRef},
    } ;

    return (
        <div className='px-[12%] pt-[1%] flex flex-col items-center bg-bisque overflow-hidden'>
            <div className='flex w-[100%] mb-6 items-center'>
                <img src='./images/raghu.png' alt='logo' className=' w-[5%] h-[5%] mr-[35%] ml-[5%]  '/>
                <button className="bg-black text-white  w-fit text-base font-bold uppercase text-center px-8 py-4 ml-[45%] hover:bg-yellow hover:text-black rounded-xl cursor-pointer max-sm:mt-3 max-sm:px-4 max-sm:py-2 max-sm:text-sm " onClick={back}>back</button>
            </div>
            
            <HTMLFlipBook {...settings} ref={bookRef}  className='mb-6 cursor-grab'>
                <PageCover source={"URL('./images/first.png')"} ></PageCover>
                <Page source={"URL('./images/second.png')"}></Page>
                <Page source={"URL('./images/third.png')"}></Page>
                <Page source={"URL('./images/5.png')"}></Page>
                <Page source={"URL('./images/fourth.png')"}></Page>
                <Page source={"URL('./images/6.png')"}></Page>
                <Page source={"URL('./images/7.png')"}></Page>
                <Page source={"URL('./images/8.png')"}></Page>
                <Page source={"URL('./images/9.png')"}></Page>
                <Page source={"URL('./images/10.png')"}></Page>
                {/* <Page source={"URL('./images/11.png')"}></Page> */}
                <Page source={"URL('./images/12.png')"}></Page>
                <Page source={"URL('./images/13.png')"}></Page>
                {/* <Page source={"URL('./images/14.png')"}></Page> */}
                <Page source={"URL('./images/16.png')"}></Page>
                <Page source={"URL('./images/15.png')"}></Page>
                <Page source={"URL('./images/17.png')"}></Page>
                <Page source={"URL('./images/18.png')"}></Page>
                <Page source={"URL('./images/19.png')"}></Page>
                <Page source={"URL('./images/20.png')"}></Page>
                <PageCover source={"URL('./images/21.png')"}></PageCover>
            </HTMLFlipBook>

            <div className=''>
                <button className='text-base capitalize mr-6' onClick={handlePrev}><img src='./images/prev.png' alt='icons' /></button>
                {/* [<span>{page}</span> of 
                <span>20</span>] */}
                <button className='text-base capitalize    ' onClick={handleNext}><img src='./images/next.png' alt='icons' /></button>
            </div>
        
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