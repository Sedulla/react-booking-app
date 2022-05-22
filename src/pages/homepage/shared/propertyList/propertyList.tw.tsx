import tw from 'twin.macro';

export const PropertyListContainer = tw.div`
    flex justify-between gap-[19px] w-screen max-w-5xl
`;

export const PropertyListItem = tw.div`
    overflow-hidden rounded-[9px] cursor-pointer flex-[1]
`;

export const PropertyListImage = tw.img`
    w-[19vw] h-[31vh] object-cover
`;

export const PropertyListTitles = tw.div`
`;

export const PropertyListTitleBig = tw.h1`
    text-[17px]    
`;

export const PropertyListTitleSmall = tw.h3`
    text-[15px] font-light
`;
