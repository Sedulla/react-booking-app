import tw from 'twin.macro';

export const HotelsPageContainer = tw.div`
    flex justify-center mt-5
`;

export const HotelsPageWrapper = tw.div`
    w-screen max-w-5xl flex gap-5
`;

export const HotelsPageSearch = tw.div`
    bg-[#febb02] p-3 rounded-xl sticky top-3 
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

// OPTIONS

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

export const HotelsPageResult = tw.div`
    flex-[3]
`;
