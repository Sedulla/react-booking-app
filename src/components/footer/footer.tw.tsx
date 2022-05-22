import tw from 'twin.macro';

export const FooterContainer = tw.div`
    w-screen max-w-5xl text-[13px]
`;

export const FooterLists = tw.div`
    w-screen flex justify-center gap-[91px]
`;

export const FooterList = tw.ul`
    list-none
`;

export const FooterListItem = tw.li`
    mb-[9px] text-[#003580] cursor-pointer
`;
