import tw from 'twin.macro';

export const FooterContainer = tw.div`
    w-screen max-w-5xl text-sm
`;

export const FooterLists = tw.div`
    w-screen flex justify-center gap-[99px] mt-3 mb-3
`;

export const FooterList = tw.ul`
    list-none
`;

export const FooterListItem = tw.li`
    mb-3 text-[#003580] cursor-pointer
`;
