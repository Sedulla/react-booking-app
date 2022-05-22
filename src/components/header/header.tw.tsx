import tw from 'twin.macro';

export const Wrapper = tw.div`
    bg-[#003580] text-white flex justify-center relative
`;

export const HeaderContainer = tw.div`
    w-[90vw] max-w-[1023px]
`;

export const HeaderList = tw.div`
    flex gap-[39px] mb-[51px]
`;

export const HeaderListItem = tw.div`
    flex items-center gap-[9px]
`;

export const ListItemText = tw.span``;

export const HeaderTitle = tw.h1``;

export const HeaderDescription = tw.div`
    my-[19px] mx-0
`;

export const HeaderButton = tw.button`
    bg-[#0071c2] text-white font-bold p-[7px] border-none cursor-pointer
`;

// SEARCH

export const SearchBoxContainer = tw.div`
    w-[90vw] max-w-[1023px] h-[3.3rem] bg-white py-[9px] px-0 bottom-[-31px] border-[3px] border-[#febb03] border-solid flex items-center justify-around rounded-[5px] absolute 
`;

export const HeaderSearchItem = tw.div`
    flex items-center gap-[9px]
`;

export const HeaderSearchInput = tw.input`
    border-none outline-none
`;

export const HeaderSearchText = tw.span`
    cursor-pointer text-[#9CA3AF]
`;

// OPTIONS

export const OptionsContainer = tw.div`
   z-[3] absolute top-[51px] rounded-[5px] text-[#9CA3AF] bg-white shadow-lg
 `;

export const SearchOptionItem = tw.div`
    w-[199px] flex justify-between m-3
`;

export const SearchOptionText = tw.span`
`;

export const OptionsCounterBox = tw.div`
    flex items-center text-black text-[13px] gap-[9px]
`;

export const OptionCounterButton = tw.button`
    w-[31px] h-[31px] border-[1px] border-solid border-[#0071c3] text-[#0071c3] bg-white cursor-pointer disabled:cursor-not-allowed
`;

export const OptionCounterNumber = tw.span`
`;
