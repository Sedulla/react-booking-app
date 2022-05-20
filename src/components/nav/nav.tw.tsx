import tw from 'twin.macro';

export const TopNav = tw.div`
    flex justify-center h-[51px] bg-[#003580]
`;

export const NavContainer = tw.div`
    w-[75vw] max-w-[1064px] text-white flex items-center justify-between
`;

export const Logo = tw.span`
    text-3xl font-bold
`;

export const NavItems = tw.div``;

export const NavButton = tw.button`
    ml-5 border-none py-[7px] px-[15px] cursor-pointer bg-white text-[#0071c2] text-[15px]
`;
