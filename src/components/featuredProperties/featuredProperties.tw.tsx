import tw from 'twin.macro';

export const FpContainer = tw.div`
    flex justify-between gap-[19px] w-[90vw] max-w-[1023px] md:
`;

export const FpItem = tw.div`
    flex-[1] gap-[9px] flex flex-col
`;

export const FpImage = tw.img`
    w-[25vw] h-[39vh]
`;

export const FnName = tw.span`
    font-bold
`;

export const FnCity = tw.span`
    font-light
`;

export const FnPrice = tw.span`
    font-bold
`;

export const FpRating = tw.div``;

export const FpRatingStar = tw.button`
    bg-[#003580] text-white border-none p-[3px] mr-[9px] font-bold
`;

export const FpRatingText = tw.span`
    font-bold
`;
