import tw from 'twin.macro';

export const HotelPageWrapper = tw.div`
    flex flex-col items-center mt-5 
`;

export const HotelPageContainer = tw.div`
    w-screen max-w-5xl flex flex-col gap-3 relative
`;

export const HotelBookButton = tw.button`
    mr-7 absolute top-3 right-0 border-none bg-[#0071c2] text-white font-bold py-3 px-5 rounded cursor-pointer 
`;

export const HotelReserveButton = tw.button`
   border-none bg-[#0071c2] text-white font-bold py-3 px-5 rounded cursor-pointer 
`;

export const HotelPageTitle = tw.h1`
    text-xl 
`;

export const HotelPageAddress = tw.div`
    text-sm flex items-center gap-3
`;

export const HotelAddressText = tw.span``;

export const HotelPageDistance = tw.span`
    text-[#0071c2] font-bold
`;

export const HotelPagePrice = tw.span`
    text-[#008009] font-bold
`;

export const HotelPageImages = tw.div`
    flex flex-wrap justify-center
`;

export const HotelImageWrapper = tw.div`
    w-[339px] 
`;

export const HotelPageImage = tw.img`
    w-[310px] object-cover 
`;

export const HotelPageDetails = tw.div`
    flex justify-between gap-5 mt-5
`;

export const HotelDetailsTexts = tw.div`
    flex-[3]        
`;

export const HotelPageDescription = tw.p`
    text-sm mt-5
`;

export const HotelDetailsPrice = tw.div`
    flex-[1] bg-[#ebf3ff] flex flex-col p-3 gap-3 mr-7
`;

export const HotelPriceTitle = tw.h1`
    text-xl text-[#555]
`;

export const HotelPriceText = tw.span`
    text-sm 
`;

export const HotelPriceValue = tw.h3`
    font-light
`;

// ======== SLIDER ======== //

export const Slider = tw.div`
    sticky top-0 left-0 w-[100vw] h-[100vh] flex items-center z-[999] bg-[rgba(0,0,0,0.3)]
`;

export const SliderImageWrapper = tw.div`
    w-screen h-screen flex justify-center items-center
`;

export const SliderSingleImage = tw.img`
    w-[999px] h-[79vh]
`;
