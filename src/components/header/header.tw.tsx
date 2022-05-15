import tw from 'twin.macro';

export const Wrapper = tw.div`
    bg-[#003580] text-white flex justify-center
`;

export const HeaderContainer = tw.div`
    w-[90vw] max-w-[1023px] mt-5 mb-[99px] mx-0 relative
`;

export const HeaderList = tw.div`
    flex gap-[39px] mb-[51px]
`;

export const HeaderListItem = tw.div`
    flex items-center gap-[9px]
`;

export const ListItemText = tw.span``;

export const HeaderTitle = tw.div``;

export const HeaderDescription = tw.div`
    my-[19px] mx-0
`;

export const HeaderButton = tw.button`
    bg-[#0071c2] text-white font-bold p-[9px] border-none cursor-pointer
`;
