import tw from 'twin.macro';

export const FpContainer = tw.div`
    flex justify-between gap-3 w-screen max-w-5xl
`;

export const FpItem = tw.div`
    flex flex-col flex-[1] gap-3
`;

export const FpImage = tw.img`
    w-[25vw] h-[301px] object-cover
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
    bg-[#003580] text-white border-none p-1 mr-3 font-bold
`;

export const FpRatingText = tw.span`
    font-bold
`;
