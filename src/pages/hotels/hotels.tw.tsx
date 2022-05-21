import tw from 'twin.macro';

export const HotelsPageContainer = tw.div`
    flex justify-center mt-5
`;

export const HotelsPageWrapper = tw.div`
    w-screen max-w-5xl flex gap-5
`;

// ======= HOTELS PAGE SEARCH ======= //

export const HotelsPageSearch = tw.div`
    bg-[#febb02] p-3 rounded-xl sticky top-3 h-[max-content]
`;

export const HotelsPageTitle = tw.h1`
    text-xl text-[#555] mb-3
`;

export const HotelsPageItem = tw.div`
    flex flex-col gap-1 mb-3
`;

export const PageItemTitle = tw.label`
    text-sm
`;

export const PageItemInput = tw.input`
    h-7 border-none p-1
`;

export const PageItemText = tw.span`
    h-7 p-1 bg-white flex items-center cursor-pointer
`;

// options

export const HotelsPageOptions = tw.div`
    p-3
`;

export const PageOptionItem = tw.div`
    flex justify-between mb-3 text-[#555] text-sm
`;

export const SearchResultButton = tw.button`
    p-3 bg-[#0071c2] text-white border-none font-bold cursor-pointer w-[301px]
`;

export const OptionItemText = tw.span`
`;

export const OptionItemInput = tw.input`
    h-5
`;

// ======= HOTELS SEARCH RESULT ======= //

export const HotelsPageResult = tw.div`
    flex-[3]
`;

export const SearchResultItem = tw.div`
    flex justify-between rounded-lg gap-5 mb-5 p-3 border-[1px] border-solid border-gray-700 
`;

export const ResultItemImage = tw.img`
    h-[199px] w-[199px] object-cover
`;

export const ResultItemInfo = tw.div`
    flex flex-col gap-3 flex-[3]
`;

export const ResultItemTitle = tw.h1`
    text-xl text-[#0071c2] mt-0
`;

export const ResultItemDistance = tw.span`
    text-sm -mt-3.5
`;

export const ResultItemTaxi = tw.span`
    text-sm bg-green-700 text-white w-max p-1 rounded-lg
`;

export const ResultItemSubtitle = tw.span`
    text-sm font-bold
`;

export const ResultItemFeatures = tw.span`
    text-sm
`;

export const ResultItemCancel = tw.span`
    text-sm font-bold  text-green-700
`;

// RESULT ITEM DETAILS

export const ResultItemDetails = tw.div`
    flex-[1] flex flex-col justify-between
`;

export const ResultItemRating = tw.div`
    flex justify-between 
`;

export const ResultRatingText = tw.span`
    font-bold 
`;

export const ResultRatingNumber = tw.button`
    bg-[#003580] text-white font-bold border-none p-1
`;

export const ResultDetailsTexts = tw.div`
    text-right flex flex-col gap-1
`;

export const ResultItemPrice = tw.span`
    text-xl
`;

export const ResultItemFee = tw.span`
    text-sm text-gray-700
`;

export const ResultItemCheck = tw.button`
    bg-[#0071c2] text-white font-bold border-none py-3 px-1 cursor-pointer rounded
`;
